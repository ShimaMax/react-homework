import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/CardsContainer.scss';
import CardItem from './CardItem.jsx';

class CardsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.allMovies = [];
        this.releaseTimestampSymbol = Symbol('release timestamp');
        this.combinedGenreSymbol = Symbol('combined genre');

        this.state = {
            allMovies: []
        };
    }

    async componentDidMount() {
        try {
            const allMovies = (await fetch('https://reactjs-cdp.herokuapp.com/movies')
                .then(res => res.json())).data;

            allMovies.forEach(movie => {
               movie[this.releaseTimestampSymbol] = +new Date(movie.release_date);
               movie[this.combinedGenreSymbol] = movie.genres.join(' ');
            });

            // console.log(allMovies);

            this.setState({
                allMovies
            });
        } catch (e) {
            console.error(e);
        }
    }

    getFilteredMovies() {
        const filterField = ['title', this.combinedGenreSymbol][this.props.filter.type];
        const sortField = [this.releaseTimestampSymbol, 'vote_count'][this.props.sortType];

        return this.state.allMovies
            .filter(movie => movie[filterField].toLowerCase().includes(this.props.filter.string.toLowerCase()))
            .sort((a, b) => b[sortField] - a[sortField]);
    }

    render() {
        const movies = this.getFilteredMovies();

        return <div className="main-page-content">
            <Container>
                <Row className="cards-container">
                    {movies.map((value, index) => {
                        return <Col key={value.id} xs="12" md="6" lg="4" className="card-item-wrapper">
                            <CardItem
                                posterUrl={value.poster_path}
                                title={value.title}
                                ganre={value.genres.join(' & ')}
                                year={value.release_date.split('-')[0]}
                            />
                        </Col>;
                    })}
                    {!movies.length ?
                        (<div className="empty-movies">
                            <div>No Films Found</div>
                        </div>)
                        : null}
                </Row>
            </Container>
        </div>;
    }
}

export default CardsContainer;
