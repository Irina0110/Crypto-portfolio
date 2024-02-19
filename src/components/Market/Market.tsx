import {FC, useState} from 'react';
import './Market.scss';
import classNames from "classnames";
import {categories} from "@/constants/categories.ts";

const CLASS = 'market';

export const Market: FC = () => {
    const [checkedFilter, setCheckedFilter] = useState<string>(categories?.[0]);
    const [isShowMore, setShowMore] = useState<boolean>(false);

    const handleShowMore = () => {
        if (isShowMore && categories?.slice(7, categories?.length)?.includes(checkedFilter)) {
            setCheckedFilter(categories?.[0])
        }
        setShowMore(!isShowMore);
    }
    return (
        <div className={CLASS}>
            <span className={`${CLASS}__title`}>Market</span>
            <p className={`${CLASS}__subtitle`}>Cryptocurrency Categories</p>

            <div className={`${CLASS}__filters`}>
                {categories?.slice(0, 6).map((item) =>
                    <div key={item}
                         onClick={() => setCheckedFilter(item)}
                         className={checkedFilter === item ? classNames(`${CLASS}__filters__item`, `${CLASS}__filters__item--active`) : `${CLASS}__filters__item`}>
                        {item}
                    </div>)
                }
                {isShowMore && categories?.slice(7, categories?.length).map((item) =>
                    <div key={item}
                         onClick={() => setCheckedFilter(item)}
                         className={checkedFilter === item ? classNames(`${CLASS}__filters__item`, `${CLASS}__filters__item--active`) : `${CLASS}__filters__item`}>
                        {item}
                    </div>)
                }
                <div className={`${CLASS}__filters__item`}
                     onClick={handleShowMore}>{isShowMore ? 'Hide' : 'Show all'}</div>
            </div>

        </div>
    )
}