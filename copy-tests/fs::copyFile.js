'use strict';
const fs = require('fs');

fs.copyFile('../../api-content-sqlite/content.db', 'copy.db', (err) => {
  if (err) throw err;
});
