import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa.js';
import { fail, redirect } from '@sveltejs/kit';



export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const d = await request.formData();
		const data = {
			email: d.get("email"),
            password: d.get("password")
		};
        if (!data.email || data.email.length <5) {
            return fail(400, {message: "Shorter than 5", field: "email"})
        }
        if (!data.password || data.password.length <5) {
            return fail(400, {message: "Shorter than 5", field: "password"})
        }
		const res = await fetch(`${MEDUSA_BACKEND_URL}/auth/customer/emailpass/register`, {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		if (!res.ok) {
			const data = await res.json();
			return fail(res.status, data);
		}
        
        return redirect(307, "/shop/auth/login")
        
	}
};