import React from 'react';
import s from "./loader.module.scss"

const Loader = () => {
    return (
        <div className={s.loaderWrapper}>
            <img src="/spin.svg" alt="" className={s.img}/>
        </div>
    );
};

export default Loader;