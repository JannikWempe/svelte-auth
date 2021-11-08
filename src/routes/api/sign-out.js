import { removeSession } from './_db';
import { parse, serialize } from 'cookie';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ headers: { cookie } }) {
	const cookies = parse(cookie || '');

	if (cookies.session_id) {
		await removeSession(cookies.session_id);
	}

	return {
		status: 200,
		headers: {
			'Set-Cookie': serialize('session_id', '', {
				path: '/',
				expires: new Date(0),
			}),
		},
	};
}
