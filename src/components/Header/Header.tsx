import {FC, useState} from 'react';
import Logo from '../../../public/Logo.png';
import './Header.scss';
import classNames from "classnames";

const CLASS = 'header';

const links: string[] = ['Home', 'Businesses', 'Trade', 'Market', 'Learn']

export const Header: FC = () => {
    const [activeLink, setActiveLink] = useState<string>('');

    const handleScrollToLink = (link: string) => {
        setActiveLink(link);
    }

    const isActiveLink = (link: string) => {
        return activeLink === link ?
            classNames(`${CLASS}__links__link`, `${CLASS}__links__link--active`) :
            `${CLASS}__links__link`
    }
    return (
        <div className={CLASS}>
            <img src={Logo} alt={'logo'}/>
            <div className={`${CLASS}__links`}>
                {links?.map((link, index) =>
                    <a href={`#${link?.toLowerCase()}`}
                       key={index}
                       className={isActiveLink(link?.toLowerCase())}
                       onClick={() => handleScrollToLink(link?.toLowerCase())}>{link}</a>)}
            </div>
            <div className={`${CLASS}__button`}>Login</div>
        </div>
    )
}