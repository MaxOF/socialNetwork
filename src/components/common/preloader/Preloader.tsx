import React from 'react';
import preloader from "../../../assets/images/preloader.gif";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} width={80} height={80} alt='preloader'/>
        </div>
    );
};

export default Preloader;