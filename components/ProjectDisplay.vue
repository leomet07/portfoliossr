<template>
	<div>
		<div id="container" ref="container">
			<!-- v-html allow unsafe render of html -->
			<h4 v-html="description" id="text"></h4>
			<div id="display">
				<div id="img_display">
					<button
						v-if="images.length > 1"
						id="previous"
						@click="previmg"
					>
						&lt;
					</button>
					<img :src="images[index]" />
					<button v-if="images.length > 1" id="next" @click="nextimg">
						&gt;
					</button>
				</div>
				<a class="link" :href="web_url" v-if="web_url" target="_blank"
					>Visit</a
				>
				<a class="link" :href="gh_url" v-if="gh_url" target="_blank"
					>Source Code</a
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavBar",
	props: [
		"reverse",
		"web_url",
		"gh_url",
		"images",
		"description",
		"direction",
	],
	mounted() {
		// eslint-disable-next-line no-console
		console.log("The props are also available in JS:", this.images);
		let dir = this.direction;
		console.log("The props are also available in JS:", dir);
		console.log(this.images);
		if (dir == "row") {
			if (this.reverse == "true") {
				console.log("Reverse the css order");
				this.$refs.container.className = "row-reverse horizantal";
			} else if (this.reverse == "false") {
				console.log("Make the css order normal left to right");

				this.$refs.container.className = "row horizantal";
			}
		} else if (dir == "column") {
			this.$refs.container.className = "column";
		}

		this.curr_url = this.images[this.index];
	},
	data: function() {
		return {
			curr_url: "",
			index: 0,
		};
	},
	methods: {
		nextimg: function() {
			this.index += 1;
			if (this.index >= this.images.length) {
				this.index = 0;
			}
			//console.log(this.url[this.index]);
		},
		previmg: function() {
			this.index -= 1;
			if (this.index < 0) {
				this.index = this.images.length - 1;
			}

			//console.log(this.url[this.index]);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#img_display {
	position: relative;
	margin-bottom: 15px;
}

#previous {
	position: absolute;
	left: 7%;

	top: 50%;
}

#next {
	position: absolute;
	left: 78%;

	top: 50%;
}
#container {
	/* Setup Flexbox */
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	/* border: 1px solid black; */

	padding-right: 2%;
	padding-left: 2%;

	margin-bottom: 5px;
}
img {
	border: 1px solid rgb(219, 219, 219);
}
.horizantal {
	width: 100%;
	justify-content: space-around;
}

.horizantal img {
	/*width: 400px;*/
	/* height: 50vh;
	 */
	max-width: 40vw;
	max-height: 30vw;

	margin-top: 4px;
}
.horizantal #text {
	width: 300px;
	margin-right: 25px;
	margin-left: 25px;
}
.row {
	flex-flow: row;
	-webkit-flex-flow: row;
}

.row-reverse {
	flex-flow: row-reverse;
	-webkit-flex-flow: row-reverse;
}

.column {
	width: 95%;
	flex-flow: column;
	-webkit-flex-flow: column;
}

.column img {
	width: 100%;

	max-height: 350px;
}

button {
	margin-top: auto;
	margin-bottom: auto;
	height: 20px;
}

.link {
	padding: 7px 10px 7px 10px;
	width: 80px;
	height: 40px;
	border: 1px solid black;
	color: black;
	text-decoration: none;
	margin-top: 50px;
	font-size: 15px;
	margin: 2px;
}
</style>
