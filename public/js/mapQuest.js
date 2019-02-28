function initMap() {
	L.mapquest.key = '5b6Dz9mBDeMl9AgGKJY5ISW4Js5xmUwk';

	var map = L.mapquest.map('map', {
		center: [32.879029, -117.235849],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.879029, -117.235849]).addTo(map);
}