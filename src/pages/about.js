import React from "react";

import { useSiteMetadata } from "../hooks";
import Layout from "../components/Layout";
import Container from "../components/Container";

const AboutPage = () => {
	const {
		companyName,
		companyUrl,
		authorName,
		authorUrl,
		siteDescription,
	} = useSiteMetadata();

	return (
		<Layout pageName="about">
			<Container type="content">
				<h1>About</h1>
				<h2>{companyName}</h2>
				<p>{siteDescription}</p>
				<p>
					<a href={companyUrl}>View on Github</a>
				</p>
				<h2>Created By</h2>
				<p>
					<a href={authorUrl}>{authorName}</a>
				</p>
			</Container>
		</Layout>
	)
}
export default AboutPage

export function Head() {
	return (
		<title>About | Coronovirus Map</title>
	)
}
