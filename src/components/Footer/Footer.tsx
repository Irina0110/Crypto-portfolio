import {FC} from 'react';
import './Footer.scss';
import Logo from '../../../public/Logo.png';
import {contacts, links} from "@/constants/contacts.ts";

const CLASS = 'footer';

export const Footer:FC = () => {
    return(
        <div className={CLASS}>
            <div className={`${CLASS}__contacts`}>
                <img className={`${CLASS}__contacts__logo`} src={Logo} alt={'Logo'}/>
                <div className={`${CLASS}__contacts__icons`}>
                    {contacts?.map((item) => <a href={'#'}><img src={item?.icon} alt={item?.name}/></a>)}
                </div>
                <span className={`${CLASS}__text`}>2024 CoinMarketCap. All rights reserved</span>
            </div>
            <div className={`${CLASS}__links`}>
                {links?.map((group, indexGroup) =>
                    <div className={`${CLASS}__links__group`} key={indexGroup}>
                        <span className={`${CLASS}__links__group__title`}>{group?.group}</span>
                        {group?.links?.map((link, index) => <a className={`${CLASS}__text`} href={link?.link} key={index}>{link?.name}</a> )}
                    </div>
                )}
            </div>

        </div>
    )
}