export const Profiles = new Mongo.Collection('posts');

if(Meteor.isServer) {
    Meteor.publish('posts', function postsPublication() {
        return Posts.find({});
    });
}
