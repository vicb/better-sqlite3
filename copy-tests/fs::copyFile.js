'use strict';
const fs = require('fs');

fs.copyFile('../.local/content.db', 'copy.db', (err) => {
	if (err) throw err;
});
