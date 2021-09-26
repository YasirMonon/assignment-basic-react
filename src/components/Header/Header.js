import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container text-center header">
            <h2 className="text-danger">Cat Mania</h2>
            <h4 className="fs-5 text-primary">When this is about your passion, then let us help you to enrich it</h4>
            <h2 className="text-warning">Collection of Breeds: <span className="text-danger">100 +</span></h2>
        </div>
    );
};

export default Header;