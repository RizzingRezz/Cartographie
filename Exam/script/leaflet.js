var latitude;
var longitude;
var acurracy;
var map = new L.Map("mapid", {
	center: new L.LatLng(0, 0),
	zoom: 9
});
var comp = new L.Control.Compass({autoActive: true, showDigit:true});

map.addControl(comp);
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
}

if(navigator.geolocation)
	navigator.geolocation.getCurrentPosition(maPosition);

map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));
