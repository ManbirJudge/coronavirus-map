import React from "react";

import { useSiteMetadata } from "../hooks";
import Layout from "../components/Layout";
import Container from "../components/Container";

const AboutPage = () => {
	const {
		projectRepoUrl,
		authorName,
		authorUrl,
		projectDesc,
	} = useSiteMetadata();

	return (
		<Layout pageName="about">
			<Container type="content">
				<h1>About</h1>
				<p>{projectDesc}</p>
				<p>In the future, this page will be much more informative. Till then following are some points:</p>
				<ul>
					<li><p><a href={projectRepoUrl}>Project Github</a></p></li>
					<li><p>My GitHub profile: <a href={authorUrl}>{authorName}</a></p></li>
				</ul>
			</Container>
		</Layout>
	);
}
export default AboutPage;

export function Head() {
	return (
		<title>About | Coronovirus Map</title>
	)
}
