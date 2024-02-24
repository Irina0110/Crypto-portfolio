import {FC} from 'react';
import Logo from '../../../public/Logo.png';
import './Header.scss';
import {Button} from "@/components/Button/Button.tsx";
import { Link } from "react-scroll";

const CLASS = 'header';

const links: string[] = ['Home', 'Features', 'Market', 'Start', 'Learn']

export const Header: FC = () => {
    return (
        <div className={CLASS}>
            <img src={Logo} alt={'logo'}/>
            <div className={`${CLASS}__links`}>
                {links?.map((link, index) =>
                    <Link
                        activeClass={`${CLASS}__links__link--active`}
                        spy={true}
                        smooth={true}
                        offset={-300}
                        duration={500}
                        to={`#${link?.toLowerCase()}`}
                        key={index}
                        className={`${CLASS}__links__link`}>{link}</Link>)}
            </div>
            <Button label={'Login'}/>
        </div>
    )
}