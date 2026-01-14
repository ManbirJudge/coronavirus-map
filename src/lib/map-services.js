import { mapServices } from "../data/map-services";

export function getMapServices() {
	return mapServices || [];
}

export function getMapServiceByName(name, additionalServices = []) {
	const allServices = [...getMapServices(), ...additionalServices];
	return allServices.find(service => service.name === name);
}
