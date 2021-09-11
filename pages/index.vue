<template>
	<div class="container">
		<h1>
			About Me
		</h1>
		<h3 id="aboutmetext">
			{{ aboutme.text }}
		</h3>
		<h1>Lenny's projects</h1>
		<div id="projects" ref="projects" :key="dir">
			<div v-if="projects.length > 0">
				<div v-for="project in projects" v-bind:key="project._id">
					<ProjectDisplay
						:description="project.description"
						:images="project.images"
						:reverse="get_boolean()"
						:direction="dir"
						:web_url="project.web_url"
						:gh_url="project.gh_url"
						class="project"
					/>

					<hr />
				</div>
			</div>

			<div v-else>
				<h3>If my projects don't load soon, reload the page.</h3>
			</div>

			<h3>Inspired by Fireship</h3>
		</div>
	</div>
</template>

<script>
let bool = true;
export default {
	async asyncData({ $http }) {
		const projects = await $http.$get("/api/get_projects");
		const aboutme = await $http.$get("/api/get_aboutme");
		return {
			projects,
			aboutme,
		};
	},
	data: function() {
		return {
			dir: "row",
			get_boolean() {
				bool = !bool;
				return String(bool);
			},
			projects: [],
		};
	},
	async created() {},
	mounted() {
		window.onload = () => {
			this.dir = window.innerWidth > 900 ? "row" : "column";
		};
		window.onresize = () => {
			this.dir = window.innerWidth > 900 ? "row" : "column";
		};
	},
	head() {
		return {
			title: "My Portfolio",
		};
	},
};
</script>

<style scoped>
.container {
	margin: 0 auto;
	min-height: 100vh;

	text-align: center;
}

body {
	color: black;
}
h1 {
	text-align: center;
	margin: 0;
}
#projects {
	text-align: center;
}

.project {
	margin-left: auto;
	margin-right: auto;
	width: 75%;
	margin-bottom: 2%;
	margin-top: 2%;
}

hr {
	width: 70%;
}

#aboutmetext {
	text-align: center;
	margin-left: 0;
	padding: 0;
}
@media only screen and (max-width: 1200px) {
	.project {
		width: 90%;
	}
}
</style>
