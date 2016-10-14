/**
 * Created by basti on 14/10/2016.
 */
var URI = "http://loc.geopunt.be/geolocation/location?latlon=";


function getJSON(coordinates, callback){

    var URL = URI + coordinates;
    $.getJSON(URL, function(data){
        var location = data["LocationResult"][0]["FormattedAddress"];
        if(callback) {
            callback(location);
        } else {
            return location;
        }
    });
}