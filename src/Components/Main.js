import React from 'react';
import background from '../Images/Main/background.jpg'
import mainStyles from './Main.module.scss'

const Main = () => {
    return (
        <main className={mainStyles.main}>
            <img src={background} alt="" className={mainStyles.main__background}/>
        </main>
    );
};

export default Main;