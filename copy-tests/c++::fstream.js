'use strict';
const native = require('../build/better_sqlite3.node');

native.fstream('content.db', 'copy.db');
