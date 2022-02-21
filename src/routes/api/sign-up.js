import { createSession, getUserByEmail, registerUser } from './_db';
import { serialize } from 'cookie';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const { email, password } = await request.json();
	const user = await getUserByEmail(email);

	if (user) {
		return {
			status: 409,
			body: {
				message: 'User already exists',
			},
		};
	}

	// ⚠️ CAUTION: Do not store a plain password like this. Use proper hashing and salting.
	await registerUser({
		email,
		password,
	});

	const { id } = await createSession(email);
	return {
		status: 201,
		headers: {
			'Set-Cookie': serialize('session_id', id, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7, // one week
			}),
		},
		body: {
			user: {
				email,
			},
		},
	};
}
