import {json as json$1} from '@sveltejs/kit';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET() {
    // the `slug` parameter is available because this file
    // is called [slug].json.js
    const url = 'https://time.mawoka.eu.org/api/compat/wakatime/v1/users/Mawoka/stats/any';
    const reponse = await fetch(url);
    const res = await reponse.json();
    return json$1(res, {
        headers: {
            'Access-Control-Max-Age': '86400',
            'content-type': 'application/json;charset=UTF-8',
            'Cache-Control': 'max-age=1500'
        },
    })
}
