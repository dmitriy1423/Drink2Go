function initLeaflet() {
  const mapOptions = {
    center: [59.968322, 30.317359],
    zoom: 18
  }

  const map = new L.map('map', mapOptions);

  const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

  map.addLayer(layer);

  const iconOptions = {
    iconUrl: './img/icons/stack.svg#map-icon',
    iconSize: [38, 50]
  };

  const customIcon = L.icon(iconOptions);

  const markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: false,
    icon: customIcon
  };

  const marker = new L.Marker([59.968322, 30.317359], markerOptions);

  marker.addTo(map);
}

export default initLeaflet;
