export const mapServices = [
	{
		name: 'OpenStreetMap',
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	},
	// {
	// 	name: "OpenFreeMap",
	// 	attribution: `&copy; <a href="https://openfreemap.org/">OpenFreeMap</a>`,
	// 	url: "https://tiles.openfreemap.org/styles/bright/{z}/{x}/{y}.png"
	// },
	{
		name: "StadiaMaps",
		attribution: `
			&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>
			&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>
			&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>
		`,
		url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
	},
	{
		name: "Carto",
		attribution: `&copy; <a href="https://carto.com/attributions">CARTO</a>`,
		url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
	},
	{
		name: "Esri",
		attribution: `Sources: Esri, TomTom, FOA, NOAA, USGS | Powered by Esri`,
		url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
	}
];
