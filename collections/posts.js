import { Mongo } from 'meteor/mongo';

var Post = new Mongo.Collection('Post');

Post.schema = new SimpleSchema({
    id: {
        type: String,
        label: 'Id'
    },
    user: {
        type: String,
        label: 'user'
    },
    author: {
        type: String,
        label: 'Author'
    },
    date: {
        type: Date,
        label: 'Date'
    },
    text: {
        type: String,
        label: 'Text'
    }
});

Post.attachSchema(Post.schema);

export { Profile };
