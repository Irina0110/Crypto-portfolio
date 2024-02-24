import {FC} from 'react';
import './TrendCard.scss';
import SeeMore from '../../../public/SeeMore.svg';
import {VictoryLine} from "victory";
import {Cryptocurrency} from "@/types/responses.ts";

const CLASS = 'trend-card';

export const TrendCard: FC<Cryptocurrency> = ({
                                                  name,
                                                  symbol,
                                                  image,
                                                  current_price,
                                                  price_change_percentage_7d_in_currency,
                                                  sparkline_in_7d
                                              }) => {

    return (
        <div className={CLASS}>
            <div className={`${CLASS}__header`}>
                <div className={`${CLASS}__header__info`}>
                    <img src={image} alt={symbol}/>
                    <span>{symbol.toUpperCase()}</span>
                    <label>{name?.toUpperCase()}</label>
                </div>
                <a href={`https://www.bybit.com/en/trade/spot/${symbol}/USDT`}>
                    <img src={SeeMore} className={`${CLASS}__header__button`} alt={'more info'}/>
                </a>
            </div>
            <div className={`${CLASS}__price`}>
                <div>
                    <span>{`$${current_price}`}</span>
                    <p style={{color: price_change_percentage_7d_in_currency < 0 ? "#AE0000" : "#0FAE96"}}>{`${(price_change_percentage_7d_in_currency).toFixed(2)}%`}</p>
                </div>
                {sparkline_in_7d && <VictoryLine
                    style={{data: {stroke: price_change_percentage_7d_in_currency < 0 ? '#AE0000' : "#0FAE96", strokeWidth: 5}}}
                    interpolation={"natural"} data={sparkline_in_7d?.price?.map((price, index) => {
                    return {x: index, y: price}
                })}/>}
            </div>
        </div>
    )
}