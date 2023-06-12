import React, {Suspense} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/sidebar";
import {useTranslation} from "react-i18next";





const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}  >
            <Suspense fallback={''}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>іфвіфвфі
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
