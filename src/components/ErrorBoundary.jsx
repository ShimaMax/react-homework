import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
                    backgroundColor: '#424242', color: '#F65261'}}>
                    <h1>Something went wrong.</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
