import React from 'react';

import '../styles/App.scss';
import MainPage from './MainPage/MainPage.jsx';
import MoviePage from './MoviePage/MoviePage.jsx';
import ErrorBoundary from "./ErrorBoundary.jsx";

class App extends React.Component {
    render() {
        return <ErrorBoundary>
            <MainPage />
            {/*<MoviePage />*/}
        </ErrorBoundary>;
    }
}

export default App;
