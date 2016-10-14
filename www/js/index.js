function deviceReady(){
    $("#submitShop").click(addShop);
}

$(document).on("pagehide","#start",function(){
    getLocation(function(latlong){
        latlong = latlong.split(",");
        var lat = latlong[0];
        var long = latlong[1];
        initMap(parseFloat(lat), parseFloat(long), "map_addshop");
    });
});

function initMap(lat, long, mapId) {
    var stad = {lat: lat, lng: long};
    var map = new google.maps.Map(document.getElementById(mapId), {
        zoom: 16,
        center: stad
    });
    var marker = new google.maps.Marker({
        position: stad,
        map: map
    });
}

$(document).on("deviceready", deviceReady);