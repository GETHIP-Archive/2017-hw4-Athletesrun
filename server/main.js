import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';

import { PostsAPI } from '../imports/api/posts.js';
import { ProfilesAPI } from '../imports/api/profiles.js';

import { Profile } from '../collections/profiles.js';
import { Posts } from '../collections/posts.js';

Meteor.startup(() => {
    // code to run on server at startup
    Accounts.onCreateUser((options, user) => {
        console.log(user);

        Profile.insert({
            email: user.email[0].address
        });

        return user;
    });
});
