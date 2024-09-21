import { MEDUSA_BACKEND_URL, MEDUSA_BASE_HEADER } from '$lib/medusa.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const d = await request.formData();
		const data = {
			email: d.get('email'),
			password: d.get('password')
		};
		if (!data.email || data.email.length < 5) {
			return fail(400, { message: 'Shorter than 5', field: 'email' });
		}
		if (!data.password || data.password.length < 5) {
			return fail(400, { message: 'Shorter than 5', field: 'password' });
		}
		const res = await fetch(`${MEDUSA_BACKEND_URL}/auth/customer/emailpass`, {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		if (!res.ok) {
			const d = await res.json();
			return fail(res.status, d);
		}
		const token = (await res.json()).token;
		const res2 = await fetch(`${MEDUSA_BACKEND_URL}/auth/session`, {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		if (!res2.ok) {
			const d = await res2.json();
			return fail(res2.status, d);
		}
		console.log(res2.headers)

		return redirect(307, '/shop/auth/login');
	}
};
