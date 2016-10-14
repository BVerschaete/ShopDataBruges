/**
 * Created by jeroom on 14/10/2016.
 */
var x;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x = position.coords.latitude + "," + position.coords.longitude;
    getJSON(x);
}




