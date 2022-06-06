import React from 'react';
import background from '../../Images/Main/background.jpg'
import mainStyles from './Main.module.scss'
import Post from "./Post/Post";

const Main = () => {
    return (
        <main className={mainStyles.main}>
            <img src={background} alt="" className={mainStyles.main__background}/>
            <textarea name="What is now?" id="" cols="30" rows="10">What is now?</textarea>
            <span className={mainStyles.add}>Add</span>

            <Post message="hello" liked="100"/>
            <Post message="how are u?"  liked="58"/>
            <Post message="its my two post"  liked="10000"/>
            <Post message="its my three post"  liked="887"/>
            <Post message="its my four post" liked="15"/>
            <Post message="its my five post" liked="349"/>
            
        </main>
    );
};

export default Main;