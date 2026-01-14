import { getMapServiceByName } from "../lib/map-services";
import MapService from "../models/map-service";

export default function useMapServices({
	names = [],
	additionalServices = [],
}) {
	const services = names.map(name => getMapServiceByName(name, additionalServices));
	return services.map(service => new MapService(service));
}
