 import { Link } from "react-router-dom";
 import './Navigation.css';
 
 function Navigation(){

    return(

        <div className="nav">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contactus">Contact US</Link>
                <Link to="/makina">Makina</Link>
                <Link to="/mbledhja">Mbledhja</Link>
                <Link to="/futboll">Futboll</Link>
                <Link to="/camera">Camera</Link>
                <Link to="/goal">Goal</Link>
                <Link to="/lista">Lista</Link>
                <Link to="/form">Forma</Link>
                <Link to="/hook">Hook</Link>
                <Link to="/timer">Timer</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/useRef">useRef</Link>
                <Link to="/score">Score</Link>
                <Link to="/useCallback">UseCallBack</Link>
                <Link to="/useMemo">UseMimo</Link>
            </ul>
        </div>
    )

 }

 export default Navigation;