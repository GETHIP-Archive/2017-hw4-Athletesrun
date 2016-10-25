import { Mongo } from 'meteor/mongo';

var Profile = new Mongo.Collection('Profile');

Profile.schema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    description: {
        type: String,
        label: 'Description'
    },
    username: {
        type: String,
        label: 'Username'
    },
    picture: {
        type: String,
        label: 'Picture'
    },
    id: {
        type: String,
        label: 'Id'
    }
});
