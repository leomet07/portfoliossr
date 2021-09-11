<template>
	<section class="container">
		<div>
			<h1 class="title">
				{{ error.statusCode }}
			</h1>
			<h2 class="info">
				{{ error.message }}
			</h2>
			<nuxt-link v-if="error.statusCode === 404" class="button" to="/">
				Back to homepage
			</nuxt-link>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		error: {
			type: Object,
			default: () => ({}),
		},
	},
};
</script>

<style scoped>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.button {
	color: black;
}
</style>
