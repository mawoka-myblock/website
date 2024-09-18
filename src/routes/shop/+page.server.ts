import medusa from "$lib/medusa"

export const load = async () => {
    return {
        products: (await medusa.products.list()).products
    }
}