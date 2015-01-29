'use strict';
require('should');

var Model = require('../../models/event.js');
describe('Event Model', function () {
    it('should have an array of ratings', function () {
        var event = new Model();
        event.ratings.should.not.equal(undefined);
    });

    describe('when saving event', function () {
        it('should calculate average ratings', function () {
            Model.prototype.save = function (callback) {
                callback();
            };

            var event = new Model({
                ratings: [{
                    rating: 1
                }, {
                    rating: 2
                }]
            });

            event.save(function(){
                event.averageRating.should.equal(1.5);
            });
        });
    });
});
