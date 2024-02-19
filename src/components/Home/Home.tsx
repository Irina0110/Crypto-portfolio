import {FC, useEffect, useState} from 'react';
import './Home.scss'
import {queries} from "@/services/queries.tsx";
import {TrendCard} from "@/components/TrendCard/TrendCard.tsx";
import {Cryptocurrency} from "@/types/responses.ts";

const CLASS = 'home';

export const Home: FC = () => {
    const [trends, setTrends] = useState<Cryptocurrency[]>();

    useEffect(() => {
        queries.getTrends().then((result) => {
            setTrends(result)
        });
    }, [])


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
                    {trends?.map((trend) => <TrendCard key={trend?.symbol} {...trend}/>)}
                </div>
            </div>
        </div>
    )
}