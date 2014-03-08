Trie = function(){
  this.characters = {};
  this.isWord = false;
};

Trie.prototype.learn = function(word){

  // Find the first character of the word
  var firstChar = word.charAt(0);
  
  // Check whether the word still has letters to learn
  if(word.length > 0){

    // Has the word learned firstChar yet? If not, add it to characters
    if(!this.characters.hasOwnProperty(firstChar)){
      this.characters[firstChar] = new Trie(); 
    }

    // Tell the new character to learn the rest of the word.
    this.characters[firstChar].learn(word.slice(1));
  } else {
    // When there are no letters left to learn, set isWord to true.
    this.isWord = true; 
  } 

};

Trie.prototype.getWords = function(words, currentWord){
  
  // set words and currentWord if they are undefined
  if(!words){
    words = [];
  } 
  if(!currentWord) { 
    currentWord = "";
  } 

  // add the currentWord if we're at a word node
  if(this.isWord){ 
    words.push(currentWord); 
  }
  
  // iterate over each of character and get the words for each of them. 
  // merge them into the words array
  for(var nextChar in this.characters){
    words.concat(this.characters[nextChar].getWords(words, currentWord + nextChar));
  }
    
  return words;

};

Trie.prototype.find = function(word){

  // Set the first character
  var firstChar = word.charAt(0);

  // see if there are more letters to check in word
  if(word.length > 0){

    // if the trie includes firstChar, then do a find on the rest of the word
    // otherwise, the word isn't in the tree and it should return false
    if(this.characters.hasOwnProperty(firstChar)){
      return this.characters[firstChar].find(word.slice(1));
    } else {
      return false;
    }
  } else{
    // if there are no more letters, return the last trie
    return this;
  }
};

Trie.prototype.autoComplete = function(prefix){
  // check whether the prefix is in the tree
  var isIncluded = this.find(prefix)

  // if it is included, get the words, using the prefix as the start
  // if not, return nothing in the array.
  if(isIncluded){
    return isIncluded.getWords("",prefix);
  }
  else{
    return [];
  }

};

var t = new Trie();
t.learn("be");
t.learn("begin");
t.learn("beginner");
t.learn("beast");