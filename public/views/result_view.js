App.Views.ResultView = Backbone.View.extend({
  tagName: "li",
  template: Handlebars.compile(
    '<a href="">{{result}}</a>'
  ),
  render: function(){

    $(this.el).html(this.template(this.model));
    return this;
  }
});