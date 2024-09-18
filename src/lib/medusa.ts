import Medusa from "@medusajs/medusa-js"
import { PUBLIC_MEDUSA_BACKEND_URL, PUBLIC_MEDUSA_PUBLISHABLE_API_KEY } from '$env/static/public'
export default new Medusa({
    baseUrl: PUBLIC_MEDUSA_BACKEND_URL,
    publishableApiKey: PUBLIC_MEDUSA_PUBLISHABLE_API_KEY
})

export const MEDUSA_BACKEND_URL= PUBLIC_MEDUSA_BACKEND_URL;
export const MEDUSA_PUBLISHABLE_API_KEY = PUBLIC_MEDUSA_PUBLISHABLE_API_KEY;
export const MEDUSA_BASE_HEADER = {"x-publishable-api-key": MEDUSA_PUBLISHABLE_API_KEY}