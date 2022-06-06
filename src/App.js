import './Styles/App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="user">
                <Nav />
                <Main />
            </div>
        </div>
    )
}

export default App;
