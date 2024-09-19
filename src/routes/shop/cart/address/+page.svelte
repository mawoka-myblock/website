<script lang="ts">
    import type {PageData} from "./$types"

    export let data: PageData
    let input_data = {
        first_name: "",
        last_name: "",
        address_1: "",
        company: "",
        postal_code: "",
        city: "",
        country_code: "",
        province: "",
        phone: ""
    }
</script>


<div class="min-h-screen flex items-center justify-center">
    <div class="max-w-lg w-full bg-white p-8 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600">
        <!-- Form Title -->
        <h1 class="text-2xl font-bold mb-6 text-gray-800 text-center dark:text-white">Enter Your Address</h1>

        <!-- Address Form -->
        <form  method="POST">
            <!-- First Name -->
            <div class="mb-4">
                <label for="first_name" class="block text-sm font-medium text-gray-700 dark:text-white mb-2">First Name</label>
                <input type="text" id="first_name" name="first_name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" required
                bind:value={input_data.first_name}>
            </div>

            <!-- Last Name -->
            <div class="mb-4">
                <label for="last_name" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Last Name</label>
                <input type="text" id="last_name" name="last_name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" required bind:value={input_data.last_name}>
            </div>

            <!-- Address Line 1 -->
            <div class="mb-4">
                <label for="address_1" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Address Line 1</label>
                <input type="text" id="address_1" name="address_1" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" required bind:value={input_data.address_1}>
            </div>

            <!-- Company (Optional) -->
            <div class="mb-4">
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Company (Optional)</label>
                <input type="text" id="company" name="company" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" bind:value={input_data.company}>
            </div>

            <!-- Postal Code -->
            <div class="mb-4">
                <label for="postal_code" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Postal Code</label>
                <input type="text" id="postal_code" name="postal_code" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" required bind:value={input_data.postal_code}>
            </div>

            <!-- City -->
            <div class="mb-4">
                <label for="city" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">City</label>
                <input type="text" id="city" name="city" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" required bind:value={input_data.city}>
            </div>

            <!-- Country Code -->
            <div class="mb-4">
                <label for="country_code" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white ">Country</label>
                <select id="country_code" name="country_code" bind:value={input_data.country_code} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" required>
                    {#each data.cart.region.countries as country}
                        <option value={country.iso_2}>{country.display_name}</option>
                    {/each}
                </select>
            </div>

            <!-- Province/State -->
            <div class="mb-4">
                <label for="province" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Province/State</label>
                <input type="text" id="province" name="province" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" required bind:value={input_data.province}>
            </div>

            <!-- Phone Number -->
            <div class="mb-4">
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800" required bind:value={input_data.phone}>
            </div>

            <!-- Submit Button -->
            <button 
                type="submit" 
                class="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                Submit Address
            </button>
        </form>
    </div>
</div>