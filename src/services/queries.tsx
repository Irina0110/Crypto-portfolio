import {fetch_wrapper} from "@/services/fetch_wrapper.tsx";
import queryString from "query-string";
import {TrendsResponse} from "@/types/responses.ts";


export const queries = {
    getTrends: async (): Promise<TrendsResponse> => {
        const params: { [key: string]: string | number } = {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,solana,tether',
            price_change_percentage: '24h',
            locale: 'en'
        };
        const query = queryString.stringify(params, { arrayFormat: 'bracket' });

        return await fetch_wrapper.get(`coins/markets${query ? '?' + query : ''}`);
    },
}