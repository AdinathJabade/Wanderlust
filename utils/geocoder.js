const NodeGeocoder = require('node-geocoder');


const options = {
  provider: 'openstreetmap',
  httpAdapter: 'https',
  userAgent: 'TripsterApp/1.0 (adujabade@gmail.com)',
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
