import React from "react";
import leaftlet from "leaflet";
import { useMap } from "react-leaflet";
import axios from 'axios';

import Layout from "../components/Layout";
import Map from "../components/Map";

const LOCATION = {
	lat: 0,
	lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

const MapEffect = () => {
	const map = useMap();

	axios.get('https://corona.lmao.ninja/v2/countries').then(response => {
		const { data } = response;
		const hasData = Array.isArray(data) && data.length > 0;

		if (!hasData) return

		const geoJson = {
			type: 'FeatureCollection',
			features: data.map(country => {
				const { countryInfo } = country;
				const { lat, long: lng } = countryInfo;

				return {
					type: 'Feature',
					properties: country,
					geometry: {
						type: 'Point',
						coordinates: [lng, lat]
					}
				};
			})
		};

		const geoJsonLayers = new leaftlet.GeoJSON(
			geoJson,
			{
				pointToLayer: (feature, coordinates) => {
					const { properties } = feature;
					const {
						country,
						updated,
						cases,
						deaths,
						recovered
					} = properties

					let casesString = `${cases}`;
					if (cases > 1000) {
						casesString = `${casesString.slice(0, -3)}k+`
					}

					let updatedStr;
					if (updated) {
						updatedStr = new Date(updated).toLocaleString();
					}

					const html = `
						<span class="icon-marker">
						<span class="icon-marker-tooltip">
							<h2>${country}</h2>
							<ul>
							<li><strong>Confirmed:</strong> ${cases}</li>
							<li><strong>Deaths:</strong> ${deaths}</li>
							<li><strong>Recovered:</strong> ${recovered}</li>
							<li><strong>Last Update:</strong> ${updatedStr}</li>
							</ul>
						</span>
						${casesString}
						</span>
					`;

					return leaftlet.marker(
						coordinates,
						{
							icon: leaftlet.divIcon({
								className: 'icon',
								html
							}),
							riseOnHover: true
						}
					);
				}
			}
		)

		geoJsonLayers.addTo(map);
	}).catch(err => {
		console.log(`Failed to fetch countries: ${err.message}`);
		return
	})

	return
};

const IndexPage = () => {
	const mapSettings = {
		center: CENTER,
		baseMapService: "OpenStreetMap",
		zoom: DEFAULT_ZOOM,
	};

	return (
		<Layout pageName="home">
			<Map {...mapSettings}>
				<MapEffect />
			</Map>
		</Layout>
	);
};
export default IndexPage;

export function Head() {
	return (
		<title>Home | Coronovirus Map</title>
	)
}