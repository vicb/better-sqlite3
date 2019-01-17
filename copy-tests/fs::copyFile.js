'use strict';
const fs = require('fs');

fs.copyFile('content.db', 'copy.db', (err) => {
	if (err) throw err;
});
