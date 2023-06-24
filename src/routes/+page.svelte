<script lang="ts">
	import './+page.css';

	let button_action_text = 'Get Started';

	const loginClick = () => {
		button_action_text = 'Login Now';
	};

	const signUpClick = () => {
		button_action_text = 'Sign Up Now';
	};
</script>

<header class="lg:px-28 px-10 grid grid-cols-8 mt-10">
	<div class="logo">
		<!-- <img src="/logo.png" alt="MyNodes Logo" /> -->
		<h1 class="text-3xl font-semibold">MoneyNodes</h1>
	</div>
	<nav class="col-span-5 self-center">
		<ul class="list-style-none flex font-medium gap-14 ml-20">
			<li><a href="#">Home</a></li>
			<li><a href="#">Features</a></li>
			<li><a href="#">Pricing</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</nav>
	<div class="user-actions self-center justify-self-end col-span-2">
		<button class="mr-6 rounded-lg border border-black px-6 py-2" on:click={loginClick}
			>Login</button
		>
		<button class="rounded-lg bg-blue-600 px-6 py-2 text-white" on:click={signUpClick}
			>Sign Up</button
		>
	</div>
</header>

<main class="lg:px-28 mt-20 flex justify-between items-center">
	<div class="content">
		<h2 class="text-6xl">Welcome to MoneyNodes</h2>
		<h3 class="mt-3 ml-2">
			Masternodes are MoneyNodes, a simple and easy way to make passive income!
		</h3>

		<h4 class="text-md ml-2 mt-12 mb-2 font-medium">
			Start Earning Passive Income with Masternodes!
		</h4>
		<input
			class="ml-2 rounded-md p-2 border border-black border-2"
			type="email"
			placeholder="Enter your email!"
		/>
		<button class="ml-4 bg-blue-600 text-white rounded-md px-4 py-2 border border-2 border-black"
			>{button_action_text}</button
		>
	</div>
	<div class="landing-image">
		<img src="/landing-page-main.svg" alt="Growing crypto currencies" />
	</div>
</main>

<section class="my-32 bg-gray-100 py-32">
	<div class="rounded-lg bg-white py-5 mx-auto w-[60vw] drop-shadow-lg">
		<h4 class="text-3xl text-center font-bold">Features</h4>
		<div class="flex items-center justify-center px-10">
			<div class="features-content basis-6/12">
				<ul class="list-none text-lg">
					<li>Easy Setup and Management</li>
					<li>Lowest fees in market</li>
					<li>Exclusively for Beldex</li>
					<li>No Risk of loosing coins</li>
					<li>Pay using BDX</li>
				</ul>
			</div>
			<div class="features-image">
				<img src="/features-overview-animate.svg" alt="A Person holding a block of blockchain" />
			</div>
		</div>
	</div>
</section>

<section class="my-32">
	<div class="rounded-lg bg-gray-100 py-5 mx-auto w-[20vw] drop-shadow-lg">
		<h4 class="text-3xl text-center font-bold">Pricing</h4>
		<div class="flex items-center justify-center px-10 my-5 flex-col gap-5">
			<img src="/beldex.png" alt="Beldex" class="pricing-logo" />
			<span class="text-center font-semibold">Beldex Masternodes</span>
			<span class="text-center"
				>Aimed to build scalable, decentralized, and secure applications Internet of Privacy.</span
			>
			<span class="text-lg font-semibold">
				$ <span class="text-4xl text-green-600 font-bold"> 4</span> /month
			</span>
		</div>
	</div>
</section>
