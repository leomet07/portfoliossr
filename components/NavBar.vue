<template>
	<div class="navbar">
		<ul class="navbar-nav">
			<li class="logo">
				<router-link to="/" class="nav-link">
					<span class="link-text logo-text">Leonid M</span>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fad"
						data-icon="angle-double-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
					>
						<g class="fa-group">
							<path
								fill="currentColor"
								d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
								class="fa-secondary"
							></path>
							<path
								fill="currentColor"
								d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
								class="fa-primary"
							></path>
						</g>
					</svg>
				</router-link>
			</li>

			<li class="nav-item">
				<a
					href="mailto:leomet07@gmail.com"
					target="_blank"
					class="nav-link"
				>
					<img id="twitter" src="/img/mail.png" />
					<span class="link-text">My Email</span>
				</a>
			</li>

			<!-- 

            <li class="nav-item">
                <a
                    href="https://instagram.com/leomet07"
                    target="_blank"
                    class="nav-link"
                >
                    <img id="insta" src="../../public/img/insta_logo.png" />
                    <span class="link-text">My personal Instagram</span>
                </a>
            </li> -->

			<li class="nav-item">
				<a
					href="https://github.com/leomet07"
					target="_blank"
					class="nav-link"
				>
					<img id="github" src="/img/GitHub_Logo_White.png" />
					<span class="link-text">My Github</span>
				</a>
			</li>
			<li class="nav-item">
				<a
					href="https://buymeacoffee.com/leomet07"
					target="_blank"
					class="nav-link"
				>
					<img
						id="buymeacoffeelogo"
						src="/img/buymeacoffeelogo.png"
					/>
					<span class="link-text">My BuyMeACoffee</span>
				</a>
			</li>

			<li class="nav-item" id="themeButton">
				<img id="long_logo" src="/img/long_logo.png" />
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "NavBar",
	props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
	position: fixed;
	background-color: var(--bg-primary);
	transition: width 600ms ease;
	overflow: hidden;
	z-index: 500;
}

.navbar-nav {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	overflow: hidden;
}

.navbar-nav::-webkit-scrollbar {
	display: none;
}

.nav-item {
	width: 100%;
}

.nav-item:last-child {
	margin-top: auto;
}

.nav-link {
	display: flex;
	align-items: center;
	height: 5rem;
	color: var(--text-primary);
	text-decoration: none;
	filter: grayscale(100%) opacity(0.7);
	transition: var(--transition-speed);
}

.nav-link:hover {
	/* filter: grayscale(0%) opacity(1); */
	background: var(--bg-secondary);
	color: var(--text-secondary);
}

.link-text {
	display: none;
	margin-left: 1rem;
}

.nav-link svg,
.nav-link img {
	width: 2rem;
	min-width: 2rem;
	margin: 0 1.5rem;
}

#github {
	width: 4rem !important;
	min-width: 4rem !important;
	margin-left: 0.5rem;
	margin-right: 0.5;
}

.fa-primary {
	color: #ff7eee;
}

.fa-secondary {
	color: #df49a6;
}

.fa-primary,
.fa-secondary {
	transition: var(--transition-speed);
}

.logo {
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 1rem;
	text-align: center;
	color: var(--text-secondary);
	background: var(--bg-secondary);
	font-size: 1.5rem;
	letter-spacing: 0.3ch;
	width: 100%;
}

.logo svg {
	transform: rotate(0deg);
	transition: var(--transition-speed);
}

.logo-text {
	display: inline;
	position: absolute;
	left: -999px;
	transition: var(--transition-speed);
}

#long_logo {
	width: 100%;
	height: 100%;
}

.navbar:hover .logo svg {
	transform: rotate(-180deg);
}

#insta {
	filter: invert(100%);
}
#buymeacoffeelogo {
	filter: invert(100%);
}
/* Small screens */
@media only screen and (max-width: 600px) {
	.navbar {
		bottom: 0;
		width: 100vw;
		height: 5rem;
	}

	.logo {
		display: none;
	}

	.navbar-nav {
		flex-direction: row;
	}

	.nav-link {
		justify-content: center;
	}

	main {
		margin: 0;
	}

	.nav-item:last-child {
		margin-top: auto;
		display: none;
	}
}

/* Large screens */
@media only screen and (min-width: 600px) {
	.navbar {
		top: 0;
		width: 5rem;
		height: 100vh;
	}

	.navbar:hover {
		width: 16rem;
	}

	.navbar:hover .link-text {
		display: inline;
	}

	.navbar:hover .logo svg {
		margin-left: 11rem;
	}

	.navbar:hover .logo-text {
		left: 0px;
	}
}
</style>
