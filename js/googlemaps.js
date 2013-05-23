// Get coordinates from http://www.itouchmap.com/latlong.html

function initialize() {
	var latlng = new google.maps.LatLng(-34.540924,-58.464324);
	var settings = {
		zoom: 15,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	
	var companyImage = new google.maps.MarkerImage('/images/Contact/maptip.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyShadow = new google.maps.MarkerImage('/images/Contact/tip_shadow.png',
		new google.maps.Size(130,50),
		new google.maps.Point(0,0),
		new google.maps.Point(65, 50));

	var companyPos = new google.maps.LatLng(-34.540924,-58.464324);

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"Amsterdam",
		zIndex: 3});
	
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});
}
