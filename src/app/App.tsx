import React from 'react';
import './styles/index.scss';
import {Link} from 'react-router-dom';
import {useTheme} from "app/provider/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRoute} from "app/provider/route";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const { theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRoute />
        </div>
    );
};

export default App;