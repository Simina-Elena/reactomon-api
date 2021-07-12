import React, {useContext} from "react";
import AppTheme from "./Colors";
import ThemeContext from "./context/ThemeContext";

const Main = () => {
    
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
        }}>
            
        </main>
    );
}

export default Main;
