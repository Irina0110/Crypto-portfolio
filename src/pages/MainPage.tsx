import {FC} from 'react';
import {Header} from "@/components/Header/Header.tsx";
import {Home} from "@/components/Home/Home.tsx";
import {Features} from "@/components/Features/Features.tsx";

export const MainPage:FC = () => {
    return(
        <div>
            <Header/>
            <Home/>
            <Features/>
        </div>
    )
}