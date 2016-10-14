/**
 * Created by basti on 14/10/2016.
 */
var URI = "http://loc.geopunt.be/geolocation/location?latlon=";

var coords = "51.196873,3.254300";

var URL = URI + coords;

var JSONObject = jQuery.getJSON(URL);