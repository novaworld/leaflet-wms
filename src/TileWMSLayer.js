import { TileLayer } from 'leaflet'
import { getFeatureInfoUrl } from "@ttungbmt/geo";
import { uniqid } from "@ttungbmt/utils";

export const TileWMSLayer = TileLayer.WMS.extend({
    initialize: function(url, options = {}) {
        TileLayer.WMS.prototype.initialize.call(this, url, this.getOptions(options))
        this.uuid = options.uuid ? options.uuid : uniqid()
    },

    getOptions: function({uuid, ...options}){
        return {
            format: 'image/png',
            transparent: true,
            ...options
        }
    },

    getFeatureInfoUrl: function (latlng, params) {
        return getFeatureInfoUrl(this, latlng, params)
    }
})

export function tileWMSLayer(url, options) {
    return new TileWMSLayer(url, options);
}

