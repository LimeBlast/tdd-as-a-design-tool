'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    EventSchema = new Schema({
        ratings: []
    });

module.exports = mongoose.model('Event', EventSchema);
