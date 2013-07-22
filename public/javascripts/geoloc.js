$(document).ready(function() {
  
    navigator.geolocation.getCurrentPosition(GetLocation);

    function GetLocation(location) {

        console.log("YOLO!");

        var locString = "<p>Your location is: "+location.coords.latitude+", "+location.coords.longitude+", with the accuracy of: "+location.coords.accuracy+".</p>";

        $('p.lead').html(locString);
    }


});

