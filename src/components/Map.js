import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

import { useConfigureLeaflet, useMapServices } from "../hooks";
import { isDomAvailable } from "../lib/util";

const DEFAULT_MAP_SERVICE = "OpenStreetMap";

const Map = (props) => {
	const {
		children,
		className,
		baseMapServiceName = DEFAULT_MAP_SERVICE,
		...otherProps
	} = props;

	useConfigureLeaflet();

	const services = useMapServices({
		names: [...new Set([baseMapServiceName, DEFAULT_MAP_SERVICE])],
	});
	const baseMapService = services.find((service) => service.name === baseMapServiceName);

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
			<MapContainer className="map-base" ZoomControl="false" {...otherProps}>
				{children}
				{baseMapService && <TileLayer {...baseMapService} />}
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
