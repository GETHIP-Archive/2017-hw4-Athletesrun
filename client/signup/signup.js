import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Profile } from '../../collections/profiles.js';

import { Accounts } from 'meteor/accounts-base';

Template.signup.events({
    'submit .signupForm': (event) => {

        event.preventDefault();

        console.log($('.signupUsername').val());

        let username = $('.signupUsername').val();
        let name = $('.signupName').val();
        let email = $('.signupEmail').val();
        let password = $('.signupPassword').val();

        console.log('heyyy');

        //Meteor.call('profiles.createProfile', username, name, email, password);

        Accounts.createUser({
            username: username,
            email: email,
            password: password
        });

        console.log('Profiles: ' + Profile);

        Profile.insert({
            username: username,
            email: email,
            name: name
        });

    }
});
