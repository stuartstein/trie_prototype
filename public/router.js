App.Routers.Main = Backbone.Router.extend({
  
  routes: {
    "(/)" : "index"
  },

  index: function(){
    this.navigate("/", {trigger: true});
    App.showSearchView();
  }

});