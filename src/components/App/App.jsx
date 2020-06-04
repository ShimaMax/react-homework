import React from 'react';

import './style.scss';
import MainPage from '../../pages/MainPage/MainPage.jsx';
import MoviePage from '../../pages/MoviePage/MoviePage.jsx';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.jsx";

export default function App() {
    return (
        <ErrorBoundary>
            <MainPage />
            {/*<MoviePage />*/}
        </ErrorBoundary>
    );
};
