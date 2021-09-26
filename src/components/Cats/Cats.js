import React from 'react';
import './Cats.css';

const Cats = (props) => {
    // console.log(props);
    const { name, img, breeds, category, origin, rate, star, starCount } = props.cat
    return (
        <div className="col-md-4 mb-3 mt-3">
            <div className="card h-100 card-background">
                <div className="cat-image">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-title"><span style={{ color: "#337ab7" }}>{name}</span></h3>
                    <p className="card-text"><strong><span style={{ color: "#828488" }}>Genre:</span> <span>{category}</span></strong></p>
                    <p className="card-text"><strong><span style={{ color: "#828488" }}>Origin: </span> <span>{origin}</span></strong></p>
                    <p className="card-text"><strong><span style={{ color: "#828488" }}>Breed Available: </span><span>{breeds}</span></strong></p>
                    <p className="card-text"><strong><span style={{ color: "#828488" }}>Ratings: </span><span><i className="fas fa-star" style={{ color: "#337ab7" }}></i> {star}</span></strong></p>
                    <p className="card-text"><strong><span style={{ color: "#828488" }}>Happy Clients: </span><span><i className="fas fa-user-alt" style={{ color: "#337ab7" }}></i> {starCount}</span></strong></p>
                    <h4 className="card-text"><strong><span style={{ color: "#828488" }}>Price: </span></strong><strong style={{ color: "#337ab7" }}>{rate}</strong> <strong><span style={{ color: "#828488" }}>USD</span></strong></h4>

                    <div className="button">
                        {
                            props.cat.isAdded ? (
                                <button className="btn mt-3 order-btn" style={{ color: "#828488" }} ><i className="fas fa-cat"></i> <strong>Added</strong></button>
                            ) : (
                                <button onClick={() => props.handleCost(props.cat)} className="btn mt-3" style={{ color: "#337ab7" }}><i className="fas fa-cat"></i> <strong>Add to List</strong></button>
                            )
                        }
                        <button className="btn mt-3 detail-btn"><i className="fas fa-info-circle"></i> <strong>Details</strong> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cats;