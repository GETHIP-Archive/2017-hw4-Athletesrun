import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Profiles } from '../../imports/api/profiles.js';

Template.login.events({
    'submit .loginForm': (event) => {

        event.preventDefault();

        let email = $('.loginEmailInput').val();
        let password = $('.loginPasswordInput').val();
        Meteor.loginWithPassword(email, password, (error) => {
            if(error) {
                alert('Unsuccesful login');
            }
        });
    }
});
