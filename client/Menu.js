Template.Menu.onCreated(function() {
    var self = this;
    self.autorun(function(){
        self.subscribe('recipes');
    });
});

Template.Menu.helpers({
    recipes: ()=> {
        return Recipes.find({inMenu:true});
    }
});
Template.Menu.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    }
});