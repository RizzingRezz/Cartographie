var latitude;
var longitude;
var acurracy;
var map = new L.Map("mapid", {
	center: new L.LatLng(0, 0),
	zoom: 9
});
function maPosition(position) 
{
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	acurracy = position.coords.accuracy;
	map.setView(new L.LatLng(latitude, longitude), 8);
	var circle = L.circle([latitude, longitude], {
		color: 'blue',
		radius: acurracy
		}).addTo(map).bindPopup("Vous êtes approximativement à " + acurracy + " mètres de ce point").openPopup();
	var latlngMarseille = L.latLng(43.3, 5.4);
	var latlngCurrentPosition = L.latLng(latitude, longitude);
	document.getElementById("longitude").innerHTML = longitude;
	document.getElementById("latitude").innerHTML = latitude;
	document.getElementById("distance").innerHTML = latlngMarseille.distanceTo(latlngCurrentPosition);
}

if(navigator.geolocation)
	navigator.geolocation.getCurrentPosition(maPosition);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
minZoom: 1,
maxZoom: 20,
ext: 'png'
}).addTo(map);
			
					
L.marker([43.7102, 7.2620]).addTo(map).bindPopup('Marqueur sur Nice');
var polygon = L.polygon([
	[32.259265, -64.857788],
	[25.777634, -80.183716],
	[18.448347, -66.104736]
],{ color: 'red', fillColor: '#f03'}).addTo(map).bindPopup('Triangle des Bermudes');
			
const url="https://api-adresse.data.gouv.fr/search/?q=nice&type=street&limit=2";
$.getJSON(url, function(result)
{
	var data = result.features;
	console.log(data)
	
	data.forEach(element => {
		L.marker([element.geometry.coordinates[1], element.geometry.coordinates[0]]).addTo(map)
		.bindPopup('Utilisation de GeoJson');
	});
});