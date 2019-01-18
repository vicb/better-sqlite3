'use strict';
const native = require('../build/better_sqlite3.node');

native.open('../.local/content.db', 'copy.db');
