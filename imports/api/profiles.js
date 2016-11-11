import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';

import { Profile } from '../../collections/profiles.js';

if(Meteor.isServer) {
    Meteor.publish('profiles', function profilesPublication() {
        return Profile.find({});
    });

    Meteor.methods({
        'profiles.createProfile'(username, name, email, password) {

            console.log(username, name, email, password);

            Accounts.createUser({
                username: username,
                email: email,
                password: password
            });

            console.log('Profiles: ' + Profiles);

            Profile.insert({
                username: username,
                email: email,
                name: name
            });

            console.log('got here');
        },
        'profiles.login'({username, password}) {

        }
    });
}
