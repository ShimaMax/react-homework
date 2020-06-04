import React from 'react';

import '../../styles/MoviePage.scss';
import CardsContainer from '../CardsContainer.jsx';
import Footer from '../Footer.jsx';
import {Col, Container, Row} from "react-bootstrap";
import MovieDescription from "./MovieDescription.jsx";

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieInfo: {
                budget: 55000000,
                genres: ["Drama", "Romance"],
                id: 337167,
                overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
                poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
                release_date: "2018-02-07",
                revenue: 136906000,
                runtime: 106,
                tagline: "Don't miss the climax",
                title: "Fifty Shades Freed",
                vote_average: 6.1,
                vote_count: 1195
            }
        }
    }

    render() {
        return (
            <div className="movie-page">
                <MovieDescription movieInfo={this.state.movieInfo} />
                <div className="delimiter-2" />
                <Container>
                    <div className="cards-genre">Films by {this.state.movieInfo.genres[0]} genre</div>
                </Container>
                <div className="delimiter-2" />
                <CardsContainer filter={{type: 1, string: this.state.movieInfo.genres[0]}} sortType={0} />
                <Footer />
            </div>
        );
    }
}

export default MainPage;
