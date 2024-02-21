import {FC} from 'react';
import './MarketTable.scss';
import {Cryptocurrency} from "@/types/responses.ts";
import {tableHeaders} from "@/constants/market.ts";
import {VictoryLine} from "victory";
import {Button} from "@/components/Button/Button.tsx";

const CLASS = 'market-table';

interface MarketTableProps {
    data: Cryptocurrency[]
}

export const MarketTable: FC<MarketTableProps> = ({data}) => {
    return (
        <div className={CLASS}>
            <div className={`${CLASS}__header`}>
                {tableHeaders?.map((column, index) => <div key={index}>{column.toUpperCase()}</div>)}
            </div>
            {data?.map((row, index) =>
                <div className={`${CLASS}__row`} key={index}>
                    <div>{index + 1}</div>
                    <div className={`${CLASS}__row__cell-name`}>
                        <img src={row?.image} alt={row?.name}/>
                        <span>{`${row?.name} | ${row?.symbol?.toUpperCase()}`}</span>
                    </div>
                    <div>{`$${row?.current_price}`}</div>
                    <div style={{color: row?.price_change_percentage_7d_in_currency < 0 ? "#AE0000" : "#0FAE96"}}>{`${row?.price_change_percentage_7d_in_currency.toFixed(2)}%`}</div>
                    <div className={`${CLASS}__row__cell-chart`}>
                        {row?.sparkline_in_7d && <VictoryLine
                            style={{data: {stroke: row?.price_change_percentage_7d_in_currency < 0 ? "#AE0000" : "#0FAE96", strokeWidth: 5}}}
                            interpolation={"natural"} data={row?.sparkline_in_7d?.price?.map((price, index) => {
                            return {x: index, y: price}
                        })}/>}
                    </div>
                    <Button label={'Trade'} link={`https://www.bybit.com/en/trade/spot/${row?.symbol}/USDT`}/>

                </div>
            )}

        </div>
    )
}