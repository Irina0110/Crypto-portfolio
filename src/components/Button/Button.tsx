import {FC} from 'react';
import './Button.scss';

const CLASS = 'button';

interface ButtonProps {
    label: string,
    width?: string,
    link?: string
}

export const Button: FC<ButtonProps> = ({label, width = 'max-content', link}) => {
    return (
        <a href={link} className={CLASS} style={{width: width}}>
            {label}
        </a>
    )
}