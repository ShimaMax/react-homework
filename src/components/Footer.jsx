import React from 'react';

import '../styles/Footer.scss';

class Footer extends React.PureComponent {
    render() {
        return <div className="footer">
            <div className="delimiter-2"></div>
            <div>
                <span className="logotype">
                    <span className="bold">netflix</span>roulette
                </span>
            </div>
            <div className="delimiter-2"></div>
        </div>;
    }
}

export default Footer;
