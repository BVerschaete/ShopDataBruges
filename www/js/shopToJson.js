/**
 * Created by basti on 14/10/2016.
 */
function addShop() {
    var shopName = $("#shopName").val();
    var shopDescription = $("#shopDescription").val();
    
    if (shopName && shopDescription) {
        getLocation(function(latlon){
            getJSON(latlon, function (locatie) {
                if(locatie) {
                    generateJSON(shopName, shopDescription, locatie);
                } else {
                    $("#error").show();
                }
            });
        });
    }
}

function generateJSON(shopName, shopDescription, locatie){
    var locationArray = locatie.split(",");
    var streetArray = locationArray[0].split(" ");
    var cityArray = locationArray[1].split(" ");
    cityArray.shift();

    var streetName = streetArray[0];
    var streetNumber = streetArray[1];
    var cityName = cityArray[1];
    var postalCode = cityArray[0];

    var validPostalCodes = ["8310", "8000", "8380", "8200"];
    
    if(validPostalCodes.indexOf(postalCode) > -1) {
        var obj = '{'
            + '"json_featuretype":"Winkel",'
            + '"name":"' + shopName + '",'
            + '"description":"' + shopDescription + '",'
            + '"Straat":"' + streetName + '",'
            + '"HuisNr":"' + streetNumber + '",'
            + '"Postcode":"' + postalCode + '",'
            + '"Gemeente":"' + cityName + '",'
            + '"StrnmEnHuisnr":"' + locationArray[0] + '"}';

        console.log(obj);
        //plaats in localstorage
    } else {
        $("#error").show();
    }
}