<template>
	<section class="container">
		<div>
			<h1 class="title">
				User:
			</h1>
			<p class="info">
				{{ user.name }}
			</p>
			<nuxt-link class="link" to="/users">
				Users
			</nuxt-link>
		</div>
	</section>
</template>

<script>
export default {
	asyncData({ params, error, $http }) {
		return $http
			.$get("/api/users/" + params.id)
			.then((res) => {
				return { user: res };
			})
			.catch((e) => {
				error({ statusCode: 404, message: "User not found" });
			});
	},
	head() {
		return {
			title: `User: ${this.user.name}`,
		};
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
	margin-top: 30px;
}
</style>
