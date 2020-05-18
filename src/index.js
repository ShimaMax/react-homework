import React from 'react';
import ReactDOM from 'react-dom';

const FirstElement = React.createElement('h2', null, 'First Element');

class FirstComponent extends React.Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <h2>
               First Component
            </h2>
        );
    }
}

class FirstPureComponent extends React.PureComponent {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <h2>
               First Pure Component
            </h2>
        );
    }
}

const FirstFunctionalComponent = () => (<h2>First Functional Component</h2>);

ReactDOM.render((
    <React.Fragment>
        { FirstElement }
        <FirstComponent />
        <FirstPureComponent />
        { FirstFunctionalComponent() }
    </React.Fragment>
), document.getElementById('root'));
