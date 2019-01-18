'use strict';
const Database = require('../.');

Database('../.local/content.db').backup('copy.db');
