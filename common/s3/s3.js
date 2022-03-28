const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const S3_ACC_KEY = process.env.S3_ACC_KEY;
const S3_SECRET_ACC_KEY = process.env.S3_SECRET_ACC_KEY;
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;

const s3 = new AWS.S3({
	accessKeyId: S3_ACC_KEY,
	secretAccessKey: S3_SECRET_ACC_KEY,
});

async function s3upload(file) {
	try {
		if (file.mimetype !== 'image/jpeg') {
			return false;
		}
		const param = {
			Bucket: S3_BUCKET_NAME,
			Key: `${uuidv4()}.${file.mimetype.split('/')[1]}`,
			Body: file.buffer,
			ACL: 'public-read',
		};
		return await s3.upload(param).promise();
	} catch {
		return false;
	}
}

async function s3deelete(imageKey) {
	try {
		const param = {
			Bucket: S3_BUCKET_NAME,
			Key: imageKey,
		};
		return await s3.deleteObject(param).promise();
	} catch {
		return false;
	}
}

module.exports = { s3upload, s3deelete };
