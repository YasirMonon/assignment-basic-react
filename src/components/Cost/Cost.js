import React from 'react';
import './Cost.css'

const Cost = (props) => {
    const { cost } = props;
    const total = cost.reduce((previous, cat) => previous + cat.rate, 0)
    return (
        <div>
            <div className="total-cat mt-3">
                <h4 className="text-center" style={{ color: "#828488" }}><span style={{ color: "#337ab7" }}>Selected <i className="fas fa-cat"></i> :</span> {props.cost.length} Cats</h4>
                <h4 className="text-center" style={{ color: "#828488" }}><span style={{ color: "#337ab7" }}>Value <i className="fas fa-tags"></i>:</span> {total} $ </h4>
            </div>

            {
                cost.map(pd =>
                    <div className="card h-25 card-background d-flex flex-row mb-2">
                        <div>
                            <img src={pd.img} className="cost-card-img" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "#337ab7" }}>{pd.name}</h5>
                            <h6 className="card-title" style={{ color: "#337ab7" }}>$ {pd.rate}</h6>
                        </div>
                    </div>)
            }

        </div>
    );
};

export default Cost;