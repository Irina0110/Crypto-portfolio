import {fetch_wrapper} from "@/services/fetch_wrapper.tsx";
import queryString from "query-string";
import {Cryptocurrency} from "@/types/responses.ts";


export const queries = {
    getTrends: async ({coins, category}: {coins?: string, category?: string}): Promise<Cryptocurrency[]> => {
        const params: { [key: string]: string | number | boolean | undefined} = {
            vs_currency: 'usd',
            ids: coins,
            price_change_percentage: '7d',
            order: 'market_cap_desc',
            sparkline: true,
            category,
            precision: 2,
            locale: 'en',
            per_page: 7
        };
        const query = queryString.stringify(params, { arrayFormat: 'bracket' });

        return await fetch_wrapper.get(`coins/markets${query ? '?' + query : ''}`);
    }
}