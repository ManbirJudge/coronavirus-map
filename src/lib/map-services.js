import { mapServices } from "../data/map-services";

export function getMapServices() {
	return mapServices || [];
}

export function getMapServiceByName(name, additionalServices = []) {
	const services = [...getMapServices(), ...additionalServices];
	return services.find(service => service.name === name);
}
