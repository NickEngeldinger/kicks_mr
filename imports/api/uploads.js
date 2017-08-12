import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

export const Images = new FilesCollection({
	storagePath: 'public/img',
	collectionName: 'Images',
	allowClientCode: false,
	onBeforeUpload(file) {
		if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
			return true;
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