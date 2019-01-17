'use strict';
const native = require('../build/better_sqlite3.node');

native.open('content.db', 'copy.db');
