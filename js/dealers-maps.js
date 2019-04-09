
var locations = [
      ['Shipper - Japan', 36.204824, 138.252924, 12],
      ['Shipper - Indonesia', -0.789275, 113.921327, 11],
      ['Shipper - Australia', -25.274398, 133.775136, 10],
      ['Shipper - Russia', 61.52401, 105.318756, 9],
      ['Shipper - Brazil', -14.235004, -51.92528, 8],
      ['Shipper - United States', 37.09024, -95.712891, 7],
      ['Shipper - Tanzania', -6.369028, 34.888822, 6],
      ['Shipper - Germany', 51.165691, 10.451526, 5],
      ['Shipper - Denmark', 56.26392, 9.501785, 4],
      ['Shipper - United Kingdom', 55.378051, -3.435973, 3],
      ['Shipper - Switzerland', 46.818188, 8.227512, 2],
      ['Shipper - Italy', 41.87194, 12.56738, 1]
    ];

    var map = new google.maps.Map(document.getElementById('dealers-map'), {
      zoom: 2,
			flat: true,
			scrollwheel:false,
			panControl:false,
			zoomControl:true,
			streetViewControl: false,
			mapTypeControl: false,
      center: new google.maps.LatLng(25, 50),
	  styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
		icon: 'images/map-pin.png'
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }