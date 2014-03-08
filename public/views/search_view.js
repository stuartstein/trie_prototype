App.Views.SearchView = Backbone.View.extend({

  id: 'search_page',
  template: Handlebars.compile(
    '<h1>Search Mini-Wikipedia</h1>' +
      '<form id="search_form">' +
      '<input id="search_term" type="text" name="search[term]">' +
    '</form>' +
    '<ul id="results_list">' +
    '</ul>'
    ),
  
  events: {
    "keyup #search_term" : "getResults",
    "submit #search_form" : "submitForm"
  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  getResults: function(){
    $('#results_list').empty();
    var term = $('#search_term').val();
    if(term !== ""){
      var results = App.autocompleter.complete(term);
      _.each(results, this.showSearchResult, this);
    }
  },

  showSearchResult: function(result){
    var view = new App.Views.ResultView({model: {result: result}});
    $('#results_list').append(view.render().el);
  },

  submitForm: function(event){
    event.preventDefault();
    this.getResults();
  }

});