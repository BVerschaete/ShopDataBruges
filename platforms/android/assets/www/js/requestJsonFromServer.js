/**
 * Created by basti on 14/10/2016.
 */
var URI = "http://loc.geopunt.be/geolocation/location?latlon=";

function getJSON(coordinates){

    var URL = URI + coordinates;

    var JSONString = "";
    
    $.getJSON(URL, function(data){
        JSONString = data;
        var string = JSONString["LocationResult"][0]["FormattedAddress"];
        $("#result").text(string);
    });
}