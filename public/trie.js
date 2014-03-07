Trie = function(){
  this.characters = {};
  this.isWord = false;
};

Trie.prototype.learn = function(word){

  // Find the first character of the word
  var firstChar = word.charAt(0);
  
  // Check whether the word still has letters to learn
  if(word.length > 0){

    // Has the word learned the letter yet? If not, add it to characters
    if(!this.characters.hasOwnProperty(firstChar)){
      this.characters[firstChar] = new Trie(); 
    }

    // The new character needs to learn the rest of the word.
    this.characters[firstChar].learn(word.slice(1));
  } else {
    // when there are no letters left to learn, set isWord to true.
    this.isWord = true; 
  } 

};

Trie.prototype.getWords = function(words, currentWord){
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
  if(!words){
    words = [];
  } 
  if(!currentWord) { 
    currentWord = "";
  } 

  if(this.isWord){ 
    words.push(currentWord); 
  }
  
  for(var key in this.characters){
    if(key){
      return this.characters[key].getWords(words, currentWord + key);
    }
    else{
      return words;
    }
  }
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

  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};