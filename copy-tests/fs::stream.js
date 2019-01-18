'use strict';
const fs = require('fs');

fs.createReadStream('../.local/content.db').pipe(fs.createWriteStream('copy.db'));
