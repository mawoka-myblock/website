import type { EndpointOutput } from '@sveltejs/kit';
    
export async function get(): Promise<EndpointOutput> {
    const res = await fetch('https://strapi.myblock.eu.org/api/articles?sort[0]=createdAt%3Adesc');
    const data = await res.json();

    return { body: data };
}