function deviceReady(){
    console.log("deviceReady")
    getLocation();
}

$(document).on("deviceready", deviceReady);