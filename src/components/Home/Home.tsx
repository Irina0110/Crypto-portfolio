import {FC} from 'react';
import './Home.scss'

const CLASS = 'home';

export const Home: FC = () => {
    return(
        <div className={CLASS} id={'#home'}>
            <div className={`${CLASS}__title`}>
                <span>
                   Start and Build Your Crypto Portfolio Here
                </span>
                <p>
                    Only at CryptoCap, you can build a good portfolio and learn
                    best practices about cryptocurrency.
                </p>
                <div className={`${CLASS}__title__button`}>
                    Get start
                </div>
            </div>
        </div>
    )
}