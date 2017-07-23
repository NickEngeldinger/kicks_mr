import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Kicks = new Mongo.Collection('kicks');

Meteor.methods({
	'kicks.insert'(model, colorway) {
		check(model, String);
		check(colorway, String);

		if (! Meteor.userId()) {
			throw new Meteor.error('not-authorized');
		}

		Kicks.insert({
			model,
			colorway,
			createdAt: new Date()
		});
	},

	'kicks.remove'(kickId) {
		check(kickId, String);

		Kicks.remove(kickId);
	}
});