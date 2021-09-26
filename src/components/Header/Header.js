import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container text-center header">
            <h2><span style={{ color: "#337ab7" }}>Cat Mania</span></h2>
            <h4><span style={{ color: "#828488" }}>When this is about your passion, then let us help you to enrich it</span></h4>
            <h4><span style={{ color: "#337ab7" }}>Collection of Breeds:</span> <span style={{ color: "#828488" }}>100 +</span></h4>
        </div>
    );
};

export default Header;