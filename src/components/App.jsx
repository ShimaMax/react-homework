import React from 'react';

import '../styles/App.scss';
import MainPage from './MainPage/MainPage.jsx';
import MoviePage from './MoviePage/MoviePage.jsx';

class App extends React.Component {
    render() {
        // return <MainPage />;
        return <MoviePage />;
    }
}

export default App;
