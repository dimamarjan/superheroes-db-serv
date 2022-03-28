const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const {
	BAD_REQ,
	NOT_FOUND,
	SERVER_ERR,
} = require('./common/constants/httpCodes');

const heroesRouter = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/', heroesRouter);

app.use((err, req, res, next) => {
	if (err.name === 'ValidationError') {
		return res.status(BAD_REQ).json({
			status: 'error',
			code: BAD_REQ,
			message: err.message,
		});
	}
	if (err.message === '404') {
		return res
			.status(NOT_FOUND)
			.json({ status: 'error', code: NOT_FOUND, message: 'Not found' });
	}
	return res
		.status(SERVER_ERR)
		.json({ status: 'error', code: SERVER_ERR, message: err.message });
});

module.exports = app;
