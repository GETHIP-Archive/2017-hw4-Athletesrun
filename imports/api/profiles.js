import { Meteor } from 'meteor/meteor';
export const Profiles = new Mongo.Collection('profiles');

if(Meteor.isServer) {
    Meteor.publish('profiles', function profilesPublication() {
        return Profiles.find({});
    });

    Meteor.methods({
        'profiles.createProfile'({username, name, email, password, }) {

        },
        'profiles.login'({username, password}) {
            
        }
    });
}
