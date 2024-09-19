export const pp_id_to_provider = (pp_id: string): "default" | "stripe" | "not_found" => {
    switch (true) {
        case pp_id.startsWith('pp_system_default'):
            return 'default';
        case pp_id.startsWith('pp_stripe'):
            return 'stripe';
        default:
            return 'not_found';
    }
};