import {FC} from 'react';
import './TrendCard.scss';
import SeeMore from '../../../public/SeeMore.svg';
import {VictoryLine} from "victory";

const CLASS = 'trend-card';

interface TrendCardProps {
    short_name: string;
    price: string;
    dynamic: string;
    price_range: number[]
}

export const TrendCard: FC<TrendCardProps> = ({dynamic, price_range, price, short_name}) => {

    return (
        <div className={CLASS}>
            <div className={`${CLASS}__header`}>
                <div className={`${CLASS}__header__info`}>
                    <img src={`https://coinicons-api.vercel.app/api/icon/${short_name.replace("USDT", "").toLowerCase()}`} alt={short_name}/>
                    <span>{short_name}</span>
                </div>
                <a href={`https://www.bybit.com/en/trade/spot/${short_name.replace("USDT", "")}/USDT`}>
                    <img src={SeeMore} className={`${CLASS}__header__button`} alt={'more info'}/>
                </a>
            </div>
            <div className={`${CLASS}__price`}>
                <div>
                    <span>{`$${price}`}</span>
                    <p>{`${(+dynamic).toFixed(2)}%`}</p>
                </div>
                <VictoryLine
                    style={{data: {stroke: "#0FAE96", strokeWidth: 5}}}
                             interpolation={"natural"} data={price_range?.map((price, index) => {
                    return {x: index, y: price}
                })}/>

            </div>
        </div>
    )
}