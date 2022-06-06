import React from 'react';
import background from '../../Images/Main/background.jpg'
import mainStyles from './Main.module.scss'
import Post from "./Post/Post";

const Main = () => {
    return (
        <main className={mainStyles.main}>
            <img src={background} alt="" className={mainStyles.main__background}/>
            <textarea name="What is now?" id="" cols="30" rows="10">What is now?</textarea>
            <span>Add</span>

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </main>
    );
};

export default Main;