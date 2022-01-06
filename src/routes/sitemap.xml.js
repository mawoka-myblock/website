import { DateTime } from "luxon"
import { SitemapStream, streamToPromise } from 'sitemap';
import { toXML } from "jstoxml";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {

    const res = await fetch('/blog/posts');
    const data = (await res.json()).data;

    
    // const smStream = new SitemapStream({ hostname: 'https://mawoka.eu/' })
    // const pipeline = smStream.pipe(createGzip())


    // for (let i = 0; i < res.length; i++) {
    //     const date = DateTime.fromISO()
    //     smStream.write({ url: res[i].attributes.slug, lastmod: date.toFormat("yyyy-mm-dd") })
    // }
    // smStream.end()
    // const sitemap = (await streamToPromise(smStream)).toString()

    return {
        headers: {
            'content-type': 'application/xml',
            'Cache-Control': 'max-age=1500'
        },
        body: sitemap

    };
}