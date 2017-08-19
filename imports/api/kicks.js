import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Kicks = new Mongo.Collection('kicks');

if (Meteor.isServer) {
	Meteor.publish('kicks', function kicksPublication() {
		return Kicks.find();
	});
}

Meteor.methods({
	'kicks.insert'(model, colorway, category, stub){
		check(model, String);
		check(colorway, String);
		check(category, String);
		check(stub, String);

		if (! Meteor.userId()) {
			throw new Meteor.error('not-authorized');
		}

		Kicks.insert({
			model,
			colorway,
			category,
			stub,
			createdAt: new Date()
		});
	},

	'kicks.remove'(kickId) {
		check(kickId, String);

		if (! Meteor.userId()) {
			throw new Meteor.error('not-authorized');
		}

		Kicks.remove(kickId);
	},

	'kicks.update'(kickId, model, colorway) {
		check(kickId, String);
		check(model, String);
		check(colorway, String);

		if (! Meteor.userId()) {
			throw new Meteor.error('not-authorized');
		}

		Kicks.update({_id: kickId}, {$set : {model : model, colorway: colorway}});
	}
});