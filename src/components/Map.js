import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

import { useMapServices } from "../hooks";
import { isDomAvailable } from "../lib/util";

const DEFAULT_MAP_SERVICE_NAME = "OpenStreetMap";

const Map = props => {
	const {
		children,
		className,
		mapServiceName = DEFAULT_MAP_SERVICE_NAME,
		...otherProps
	} = props;

	const services = useMapServices({
		names: [mapServiceName],
	});
	const mapService = services[0];

	let mapClassName = `map`;
	if (className) {
		mapClassName = `${mapClassName} ${className}`;
	}

	if (!isDomAvailable()) {
		return (
			<div className={mapClassName}>
				<p className="map-loading">Loading map...</p>
			</div>
		);
	}

	return (
		<div className={mapClassName}>
			<MapContainer className="map-base" zoomControl={false} {...otherProps}>
				{children}
				{mapService && <TileLayer {...mapService} />}
				<ZoomControl position="bottomright" />
			</MapContainer>
		</div>
	);
};

Map.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	baseMapService: PropTypes.string,
};

export default Map;
