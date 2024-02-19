import {FC} from 'react';
import './FeatureCard.scss';
import Arrow from '../../../public/Arrow-right.svg'

const CLASS = 'feature-card';

interface FeatureCardProps {
    icon: string,
    title: string,
    description: string
}

export const FeatureCard: FC<FeatureCardProps> = ({icon, title, description}) => {
    return (
        <div className={CLASS}>
            <img src={icon} alt={'feature'}/>
            <div className={`${CLASS}__text`}>
                <span>{title}</span>
                <p>{description}</p>
            </div>
            <a href={'#'}>See explained <img src={Arrow} alt={'arrow'}/></a>
        </div>
    )
}