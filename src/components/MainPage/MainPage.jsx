import React from 'react';

import '../../styles/MainPage.scss';
import MainPageHeader from './MainPageHeader.jsx';
import MainPageContent from './MainPageContent.jsx';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: {type: 0, string: ''}
        };
    }

    onSearch(filter) {
        this.setState({
           filter
        });
    }

    render() {
        return (
            <div className="main-page">
                <MainPageHeader onSearch={this.onSearch.bind(this)} />
                <MainPageContent filter={this.state.filter} />
            </div>
        );
    }
}

export default MainPage;
