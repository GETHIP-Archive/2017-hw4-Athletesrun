import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Profiles } from '../../imports/api/profiles.js';

Template.home.helpers({
    accountList() {
        return Profiles.find({});
    }
});
