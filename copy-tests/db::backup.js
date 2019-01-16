'use strict';
const Database = require('../.');

Database('../../api-content-sqlite/content.db').backup('copy.db');
