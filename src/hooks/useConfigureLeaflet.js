import { useEffect } from "react";
import leaflet from "leaflet";

export default function useConfigureLeaflet() {
	useEffect(() => {
		// To get around an issue with the default icon not being set up right between using React
		// and importing the leaflet library, we need to reset the image imports
		// See https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387

		delete leaflet.Icon.Default.prototype._getIconUrl;

		leaflet.Icon.Default.mergeOptions({
			iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
			iconUrl: require("leaflet/dist/images/marker-icon.png").default,
			shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
		});
	}, []);
}
