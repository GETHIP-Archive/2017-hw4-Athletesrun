export const Profiles = new Mongo.Collection('profiles');

if(Meteor.isServer) {
    Meteor.publish('profiles', function profilesPublication() {
        return Profiles.find({});
    });
}
