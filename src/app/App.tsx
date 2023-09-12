import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRoute } from 'app/provider/route';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Suspense fallback="">
                    <SideBar />
                    <AppRoute />
                </Suspense>
            </div>
        </div>
    );
};

export default App;
