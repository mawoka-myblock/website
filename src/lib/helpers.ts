export const pp_id_to_provider = (pp_id: string): "default" | "stripe"|"stripe_giropay" | "not_found" => {
    switch (true) {
        case pp_id.startsWith('pp_system_default'):
            return 'default';
        case pp_id.startsWith('pp_stripe_stripe'):
            return 'stripe';
        case pp_id.startsWith('pp_stripe-giropay_stripe'):
            return 'stripe_giropay';
        default:
            return 'not_found';
    }
};