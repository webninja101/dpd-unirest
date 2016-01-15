/**
* Module dependencies
*/
var Resource = require('deployd/lib/resource');
var util = require('util');


/**
* Module setup.
*/
function Unirest() {
    Resource.apply( this, arguments );
    this.unirest = require('unirest');
}

util.inherits( Unirest, Resource );

Unirest.prototype.clientGeneration = true;

module.exports = Unirest;
