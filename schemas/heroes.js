const { Schema, model } = require('mongoose');
const { uuid } = require('uuidv4');

const heroesSchema = new Schema(
	{
		id: {
			type: String,
		},
		nickname: {
			type: String,
		},
		real_name: {
			type: String,
		},
		origin_description: {
			type: String,
		},
		superpowers: {
			type: String,
		},
		catch_phrase: {
			type: String,
		},
		images: {
			type: Array,
		},
	},
	{
		timestamps: false,
		versionKey: false,
		toJSON: {
			transform: function (_, ret) {
				delete ret._id;
				return ret;
			},
		},
	}
);

const Heroes = model('Heroes', heroesSchema);

module.exports = Heroes;
