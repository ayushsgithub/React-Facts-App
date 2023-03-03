import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App2 () {
    const[dark , setDark] = React.useState(true)

    function toggleDarkMode(){
        setDark(prevDark => !prevDark)
    }

    return(
        <div className="container">
        <Navbar darkMode={dark} toggleDarkMode={toggleDarkMode} />
        <Main darkMode={dark} />
        </div>

    )
}
