var access_address_x = 35.661321;
var access_address_y = 139.697373;

$(function(){
	initMap();
});

function initMap() {
  var latlng = new google.maps.LatLng(access_address_x, access_address_y);
  var myOptions = {
    zoom: 17,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    draggable: false
  };
  var map = new google.maps.Map(document.getElementById('map'), myOptions);

  var m_latlng1 = new google.maps.LatLng(access_address_x, access_address_y);
  var marker1 = new google.maps.Marker({
    position: m_latlng1,
    map: map
  });
}