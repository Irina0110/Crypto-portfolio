import {FC} from 'react';
import './Start.scss';
import {Button} from "@/components/Button/Button.tsx";
import {startCards} from "@/constants/start.ts";

const CLASS = 'start';

export const Start: FC = () => {
    return(
        <div className={CLASS} id={'#start'}>
            <div className={`${CLASS}__block`}>
                <h1>
                    How To Get Started
                </h1>
                <p className={`${CLASS}__block__subtitle`}>
                    Simple and easy way to start your investment
                    in cryptocurrency
                </p>
                <Button label={'Get started'}/>
            </div>
            <div className={`${CLASS}__block`}>
                {startCards?.map((card, index) =>
                    <div className={`${CLASS}__block__card`} key={index}>
                        <img src={card?.icon} alt={card?.title}/>
                        <div className={`${CLASS}__block__card__text`}>
                            <span>{card?.title}</span>
                            <p>{card?.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}