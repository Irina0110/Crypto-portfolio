import {FC} from 'react';
import './Features.scss';
import {features} from "@/constants/features.ts";
import {FeatureCard} from "@/components/FeatureCard/FeatureCard.tsx";
import {Button} from "@/components/Button/Button.tsx";

const CLASS = 'features';
export const Features:FC = () => {
    return(
        <div className={CLASS} id={'#features'}>
            <div className={`${CLASS}__title`}>
                <h1>
                    CryptoCap Amazing Features
                </h1>
                <p className={`${CLASS}__secondary`}>
                    Explore sensational features to prepare your best investment in cryptocurrency
                </p>
            </div>
            <div className={`${CLASS}__cards`}>
                {features?.map((feature, index) => <FeatureCard key={index} {...feature}/>)}
            </div>
            <div className={`${CLASS}__new`}>
                <div className={`${CLASS}__new__text`}>
                    <span>New In Cryptocurrency?</span>
                    <p className={`${CLASS}__secondary`}>
                        We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.
                    </p>
                </div>
                <Button label={'Learn & Explore Now'}/>
            </div>
        </div>
    )
}