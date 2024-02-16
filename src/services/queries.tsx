import {fetch_wrapper} from "@/services/fetch_wrapper.tsx";
import queryString from "query-string";
import {TrendsResponse} from "@/types/responses.ts";


export const queries = {
    getTrends: async (): Promise<TrendsResponse> => {
        const params: { [key: string]: string | number } = {
            interval: '1h',
            symbol: 'BTCUSDT,ETHUSDT,XRPUSDT,ENSUSDT',
            start: Date.now() - 86400000,
            end: Date?.now(),
            limit: 24
        };
        const query = queryString.stringify(params, { arrayFormat: 'bracket' });

        return await fetch_wrapper.get(`spot/api/quote/v1/multi/kline${query ? '?' + query : ''}`);
    },
}