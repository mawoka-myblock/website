<script lang="ts">
	import { enhance } from "$app/forms";
    let data = {
        email: "",
        password: ""
    }

</script>

<div class="min-h-screen flex w-full">
	<div class="bg-white p-8 border border-gray-200 rounded-lg shadow-lg w-1/3 m-auto">
		<!-- Form Title -->
		<h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h1>

		<!-- Registration Form -->
		<form method="POST" use:enhance class="group">
			<!-- Email Input -->
			<div class="mb-4">
				<label for="email" class="block text-sm font-medium text-gray-700 mb-2"
					>Email Address</label
				>
				<input
					type="email"
					id="email"
                    bind:value={data.email}
					name="email"
					class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
					placeholder="you@example.com"
					required
				/>
			</div>

			<!-- Password Input -->
			<div class="mb-6">
				<label for="password" class="block text-sm font-medium text-gray-700 mb-2"
					>Password</label
				>
				<input
					type="password"
					id="password"
                    bind:value={data.password}
                    minlength="5"
					name="password"
					class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
					placeholder="Enter your password"
					required
				/>
			</div>

			<!-- Register Button -->
			<button
				type="submit"
                disabled={data.password.length < 5 || data.email.length < 5}
				class="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-60"
			>
				Register
			</button>
		</form>

		<!-- Already have an account? -->
		<div class="mt-4 text-center">
			<p class="text-gray-600">
				Already have an account? <a href="/shop/auth/login" class="text-blue-600 hover:underline"
					>Sign in</a
				>
			</p>
		</div>
	</div>
</div>
