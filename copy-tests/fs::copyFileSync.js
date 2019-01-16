'use strict';
const fs = require('fs');

fs.copyFileSync('../../api-content-sqlite/content.db', 'copy.db');
