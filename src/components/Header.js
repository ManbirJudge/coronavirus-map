import React from "react";
import { Link } from "gatsby";

import { useSiteMetadata } from "../hooks";

import Container from "../components/Container";

const Header = () => {
	const { projectName, projectRepoUrl } = useSiteMetadata();

	return (
		<header>
			<Container type="content">
				<p><Link to="/">{projectName}</Link></p>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><a href={projectRepoUrl}>GitHub</a></li>
				</ul>
			</Container>
		</header>
	);
};

export default Header;
