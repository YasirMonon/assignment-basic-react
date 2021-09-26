import React from 'react';
import './Cost.css'

const Cost = (props) => {
    const { cost } = props;
    const total = cost.reduce((previous, cat) => previous + cat.rate, 0)
    return (
        <div>
            <div className="total-cat mt-3">
                <h3 className="text-warning text-center"><span className="text-danger">Total Cats:</span> {props.cost.length}</h3>
                <h3 className="text-warning text-center"><span className="text-danger">Value:</span> {total}</h3>
            </div>

            {
                cost.map(pd =>
                    <div className="card h-25 card-background d-flex flex-row mb-2">
                        <div>
                            <img src={pd.img} className="cost-card-img" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title text-warning">{pd.name}</h3>
                        </div>
                    </div>)
            }

        </div>
    );
};

export default Cost;