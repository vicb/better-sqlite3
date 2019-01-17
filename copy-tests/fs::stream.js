'use strict';
const fs = require('fs');

fs.createReadStream('content.db').pipe(fs.createWriteStream('copy.db'));
