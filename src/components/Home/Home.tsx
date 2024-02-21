import {FC, useEffect, useState} from 'react';
import './Home.scss'
import {queries} from "@/services/queries.tsx";
import {TrendCard} from "@/components/TrendCard/TrendCard.tsx";
import {Cryptocurrency} from "@/types/responses.ts";
import {Button} from "@/components/Button/Button.tsx";

const CLASS = 'home';

export const Home: FC = () => {
    const [trends, setTrends] = useState<Cryptocurrency[]>();

    useEffect(() => {
        queries.getTrends({coins: 'bitcoin,ethereum,solana,ripple'}).then((result) => {
            setTrends(result)
        });
    }, [])


    return (
        <div className={CLASS} id={'#home'}>
            <div className={`${CLASS}__title`}>
                <h1>
                   Start and Build Your Crypto Portfolio Here
                </h1>
                <p>
                    Only at CryptoCap, you can build a good portfolio and learn
                    best practices about cryptocurrency.
                </p>
                <Button label={'Get start'} width={'190px'}/>
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