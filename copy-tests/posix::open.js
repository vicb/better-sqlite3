'use strict';
const native = require('../build/better_sqlite3.node');

native.fopen('content.db', 'copy.db');
