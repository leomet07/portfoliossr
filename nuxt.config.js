export default {
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: "static",
	buildModules: ["@nuxt/image"], // <--- If Static is used

	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: "The blog showcasing Lenny's skills and projects.",
			},
			{
				"http-equiv": "Content-Type",
				content: "text/html; charset=utf-8",
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
			},
		],
	},
	htmlAttrs: {
		lang: "en",
	},

	/*
	 ** Global CSS
	 */
	css: [],

	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [],

	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,

	/*
	 ** Nuxt.js dev-modules
	 */

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://http.nuxtjs.org
		"@nuxt/http",
	],

	/*
	 ** Server Middleware
	 */
	serverMiddleware: {
		"/api": "~/api",
	},

	/*
	 ** For deployment you might want to edit host and port
	 */
	// server: {
	//  port: 8000, // default: 3000
	//  host: '0.0.0.0' // default: localhost
	// },

	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
};
