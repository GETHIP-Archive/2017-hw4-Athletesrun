import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Profiles } from '../../imports/api/profiles.js';

Template.signup.events({
    'submit .signupForm': (event) => {

        event.preventDefault();


    }
});
