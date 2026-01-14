import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, className, type }) => {
	className = `${className} container`;

	if (typeof type === "string") {
		className = `${className} container-${type}`;
	}
	if (typeof className === "string") {
		className = `${className} ${className}`;
	}

	return <div className={className}>{children}</div>;
};

Container.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	type: PropTypes.string,
};

export default Container;
