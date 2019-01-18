'use strict';
const native = require('../build/better_sqlite3.node');

native.fopen('../.local/content.db', 'copy.db');
