'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var L = require('leaflet');
var L__default = _interopDefault(L);
var geo = require('@ttungbmt/geo');
var utils = require('@ttungbmt/utils');

const TileWMSLayer = L.TileLayer.WMS.extend({
  initialize: function (url, options = {}) {
    L.TileLayer.WMS.prototype.initialize.call(this, url, this.getOptions(options));
    this.uuid = options.uuid ? options.uuid : utils.uniqid();
  },
  getOptions: function ({
    uuid,
    ...options
  }) {
    return {
      format: 'image/png',
      transparent: true,
      ...options
    };
  },
  getFeatureInfoUrl: function (latlng, params) {
    return geo.getFeatureInfoUrl(this, latlng, params);
  }
});
function tileWMSLayer(url, options) {
  return new TileWMSLayer(url, options);
}

L__default.tileWMSLayer = tileWMSLayer;

module.exports = TileWMSLayer;
//# sourceMappingURL=leaflet-wms.cjs.js.map
