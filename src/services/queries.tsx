import {fetch_wrapper} from "@/services/fetch_wrapper.tsx";
import queryString from "query-string";
import {Cryptocurrency} from "@/types/responses.ts";


export const queries = {
    getTrends: async (): Promise<Cryptocurrency[]> => {
        const params: { [key: string]: string | number | boolean } = {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,solana,ripple',
            price_change_percentage: '7d',
            order: 'market_cap_desc',
            sparkline: true,
            precision: 2,
            locale: 'en'
        };
        const query = queryString.stringify(params, { arrayFormat: 'bracket' });

        return await fetch_wrapper.get(`coins/markets${query ? '?' + query : ''}`);
    }
}