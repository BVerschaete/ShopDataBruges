/**
 * Created by jeroom on 14/10/2016.
 */



var x;

function getLocation() {
    console.log("getLocation");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    console.log("showPosition");
    x = "Latitude: " + position.coords.latitude +
        "\n" + "Longitude: " + position.coords.longitude;
    console.log(x);
}




