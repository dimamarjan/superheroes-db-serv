const app = require('../app');
const db = require('../db/db');
require('dotenv').config();

const PORT = process.env.PORT;

db.then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port: ${PORT}`);
	});
}).catch((err) => {
	console.log(err);
});
