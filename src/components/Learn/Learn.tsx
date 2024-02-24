import {FC} from 'react';
import './Learn.scss';
import {articles} from "@/constants/articles.ts";

const CLASS = 'learn';

export const Learn: FC = () => {
    return (
        <div className={CLASS} id={'#learn'}>
            <div className={`${CLASS}__title`}>
                <h1>Learn About Cryptocurrency</h1>
                <p>
                    Learn all about cryptocurrency to start investing
                </p>
            </div>
            <div className={`${CLASS}__content`}>
                <div className={`${CLASS}__content__title`}>
                    <span>All about Investing in NFTs and related risks</span>
                    <p className={`${CLASS}__content__label`}>CRYPTO BASIC</p>
                </div>
                {articles?.map((card, index) =>
                    <div className={`${CLASS}__content__card`} key={index}>
                        <img src={card?.image} alt={'article'}/>
                        <div className={`${CLASS}__content__card__text`}>
                            <p className={`${CLASS}__content__label`}>{card?.area}</p>
                            <span>{card?.title}</span>
                            <p>{card?.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}