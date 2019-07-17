(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('leaflet'), require('@ttungbmt/geo'), require('@ttungbmt/utils')) :
    typeof define === 'function' && define.amd ? define(['leaflet', '@ttungbmt/geo', '@ttungbmt/utils'], factory) :
    (global = global || self, global.LeafletWMS = factory(global.L, global.geo, global.utils));
}(this, function (L, geo, utils) { 'use strict';

    var L__default = 'default' in L ? L['default'] : L;

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

    return TileWMSLayer;

}));
//# sourceMappingURL=leaflet-wms.umd.js.map
