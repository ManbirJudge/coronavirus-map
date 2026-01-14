export function mapFlyTo(map, { zoom, center }) {
	return new Promise((resolve, reject) => {
		const baseErrMsg = "Failed to fly to area";

		if (!map.flyTo) {
			reject(`${baseErrMsg}: no 'flyTo' method on map.`);
		}
		if (typeof zoom !== "number") {
			reject(`${baseErrMsg}: Zoom value must be a number: ${zoom}.`);
		}

		const mapCenter = center || map.getCenter();
		const mapZoom = zoom || map.getZoom();

		map.flyTo(mapCenter, mapZoom, {
			duration: 2,
		});

		map.once("moveend", () => {
			resolve();
		});
	});
}

export function getCurLoc() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
			err => reject(err)
		);
	});
}
