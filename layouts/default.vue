<template>
	<div id="app">
		<NavBar id="nav" />
		<Nuxt />
	</div>
</template>
<script></script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: #2c3e50;

	/* to be away from nav */
}
#nav {
	position: fixed;
}
:root {
	font-size: 16px;
	font-family: "Open Sans";
	--text-primary: #b6b6b6;
	--text-secondary: #ececec;
	--bg-primary: #23232e;
	--bg-secondary: #141418;
	--transition-speed: 600ms;
}

body {
	color: black;
	background-color: white;
	margin: 0;
	padding: 0;
}

body::-webkit-scrollbar {
	width: 0.25rem;
}

body::-webkit-scrollbar-track {
	background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
	background: #6649b8;
}

#main {
	margin-left: 5rem;
	padding: 1rem;
}

@media only screen and (max-width: 600px) {
	#main {
		margin-left: 0rem;
		margin-right: 0rem;
		padding: 0rem;
	}
}

* {
	font-family: "Montserrat", sans-serif;
}
</style>
