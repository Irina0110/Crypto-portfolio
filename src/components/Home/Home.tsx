import {FC, useEffect, useState} from 'react';
import './Home.scss'
import {queries} from "@/services/queries.tsx";
import {TrendCard} from "@/components/TrendCard/TrendCard.tsx";

const CLASS = 'home';

interface CryptocurrencyProps {
    short_name: string,
    price: string;
    dynamic: string;
    price_range: number[]
}

export const Home: FC = () => {
    const [trends, setTrends] = useState<CryptocurrencyProps[]>();

    useEffect(() => {
        queries.getTrends().then((result) => {
            const trendsArray: CryptocurrencyProps[] = [];
            Object.keys(result?.result).map((key) => {
                    const priceRange: number[] = [];
                    result?.result[key].map((item) => (
                        priceRange?.push(+item?.c)
                    ))
                    trendsArray?.push({
                        short_name: key,
                        price: result?.result[key]?.[23]?.c,
                        dynamic: `${(+result?.result[key]?.[23]?.c - +result?.result[key]?.[0]?.c ) * 100/ +result?.result[key]?.[0]?.c}`,
                        price_range: priceRange
                    })
                }
            )
            setTrends(trendsArray);
        });
    }, [])

    console.log(trends)

    return (
        <div className={CLASS} id={'#home'}>
            <div className={`${CLASS}__title`}>
                <span>
                   Start and Build Your Crypto Portfolio Here
                </span>
                <p>
                    Only at CryptoCap, you can build a good portfolio and learn
                    best practices about cryptocurrency.
                </p>
                <div className={`${CLASS}__title__button`}>
                    Get start
                </div>
            </div>
            <div className={`${CLASS}__trends`}>
                <span className={`${CLASS}__trends__title`}>Market Trends</span>
                <div className={`${CLASS}__trends__cards`}>
                    {trends?.map((trend) => <TrendCard {...trend}/>)}
                </div>
            </div>
        </div>
    )
}