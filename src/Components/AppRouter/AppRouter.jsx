import React from 'react';
import {Routes,Route} from "react-router-dom";
import {AllRouters} from "../../routers";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {AllRouters.map(({path, Component}) =>
                    <Route key={path} path={path} element = {Component} exact />
                )}
            </Routes>
        </div>
    );
};

export default AppRouter;