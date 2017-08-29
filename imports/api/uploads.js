import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

export const Images = new FilesCollection({
	storagePath: '../../../../../../kix_imgs/public/img/kicks',
	collectionName: 'Images',
	allowClientCode: false,
	onBeforeUpload(file) {
		if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
			return true;
		}
		else if (! /png|jpg|jpeg/i.test(file.extension)) {
			return 'File types are restricted to png, jpg, and jpeg';
		}
		else {
			return 'Uploads are limited to files under 10MB';
		}
	}
});

if (Meteor.isServer) {
	Meteor.publish('files.images.all', function imagesPublication() {
		return Images.find().cursor;
	});
}