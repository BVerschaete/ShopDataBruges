/**
 * Created by basti on 14/10/2016.
 */
var URI = "http://loc.geopunt.be/geolocation/location?latlon=";

function test(){

    var coords = "51.196873,3.254300";

    var URL = URI + coords;

    var JSONString = "";
    
    $.getJSON(URL, function(data){
        JSONString = data;
        console.log(JSONString["LocationResult"][0]["FormattedAddress"]);
    });
}