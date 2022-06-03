import './Styles/App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

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
