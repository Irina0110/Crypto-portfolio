import {FC} from 'react';
import './MainPage.scss';
import {Header} from "@/components/Header/Header.tsx";
import {Home} from "@/components/Home/Home.tsx";
import {Features} from "@/components/Features/Features.tsx";
import {Market} from "@/components/Market/Market.tsx";
import {Start} from "@/components/Start/Start.tsx";
import {Learn} from "@/components/Learn/Learn.tsx";
import {Footer} from "@/components/Footer/Footer.tsx";

const CLASS = 'main-page'

export const MainPage:FC = () => {
    return(
        <div className={CLASS}>
            <Header/>
            <Home/>
            <Features/>
            <Market/>
            <Start/>
            <Learn/>
            <Footer/>
        </div>
    )
}