/**
 * Created by Edward on 14/10/2016.
 */

function setup() {
    $(function() {
        setTimeout(hideSplash, 4000);
    });

    function hideSplash() {
        $.mobile.changePage("#login", "fade");
        $("#splash").clear();
    }
}