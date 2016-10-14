function deviceReady(){
    test();
    console.log("deviceReady");
    getLocation();
}

$(document).on("deviceready", deviceReady);