/**
 * Created by jeroom on 14/10/2016.
 */

function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var latlon = position.coords.latitude + "," + position.coords.longitude;
            if(callback){
                callback(latlon)
            }
            return latlon;
        });
    } else {
        return "GPS Not enabled";
    }
}




