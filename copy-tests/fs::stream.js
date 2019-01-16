'use strict';
const fs = require('fs');

fs.createReadStream('../../api-content-sqlite/content.db').pipe(fs.createWriteStream('copy.db'));
