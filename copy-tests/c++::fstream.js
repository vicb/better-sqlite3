'use strict';
const native = require('../build/better_sqlite3.node');

native.fstream('../.local/content.db', 'copy.db');
