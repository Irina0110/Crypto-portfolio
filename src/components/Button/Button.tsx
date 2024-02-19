import {FC} from 'react';
import './Button.scss';

const CLASS = 'button';

interface ButtonProps {
    label: string,
    width: string
}

export const Button:FC<ButtonProps> = ({label, width}) => {
    return(
        <div className={CLASS} style={{width: width}}>
            {label}
        </div>
    )
}