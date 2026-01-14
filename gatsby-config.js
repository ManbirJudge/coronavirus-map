const config = require("./package.json");

const { title, description, author, repository, homepage } = config;

const siteMetadata = {
	projectName: title,
	projectRepoUrl: repository.url,
	authorName: author.name,
	authorUrl: author.url,
	projectDesc: description,
};

module.exports = {
	siteMetadata,
	plugins: [
		"gatsby-plugin-resolve-src",
		{
			resolve: "gatsby-plugin-sass",
			options: {
				implementation: require("sass"),
			}
		},
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `images`,
		// 		path: `${__dirname}/src/assets/images`,
		// 	}
		// },
		"gatsby-plugin-react-leaflet",
		// {
		// 	resolve: "gatsby-plugin-manifest",
		// 	options: {
		// 		name: siteMetadata.projectName,
		// 		short_name: siteMetadata.projectName,
		// 		start_url: "/",
		// 		icon: "src/assets/images/icon.png",
		// 	},
		// },
	]
};
