import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.header.events({
    'click .loginButton'(event) {
        FlowRouter.go('/login');
    },
    'click .signupButton'(event) {
        FlowRouter.go('/signup');
    }
});
