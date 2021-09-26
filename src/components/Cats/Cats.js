import React from 'react';
import './Cats.css';

const Cats = (props) => {
    // console.log(props);
    const { name, img, albums, category, establish, rate, star, starCount } = props.cat
    return (
        <div className="col-md-4 mb-3 mt-3">
            <div className="card h-100 card-background">
                <div className="cat-image">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-title text-success">{name}</h3>
                    <p className="card-text text-primary">Genre: <span className="text-dark">{category}</span></p>
                    <p className="card-text text-primary">Establish: <span className="text-dark">{establish}</span></p>
                    <p className="card-text text-primary">Breed Available: <span className="text-dark">{albums}</span></p>
                    <p className="card-text text-primary">Ratings: <span className="text-dark"><i className="fas fa-star"></i> {star}</span></p>
                    <p className="card-text text-primary">Happy Clients: <span className="text-dark"><i className="fas fa-user-alt"></i> {starCount}</span></p>
                    <h4 className="card-text text-primary">Budget: <strong className="text-warning">{rate}</strong> BDT</h4>

                    <div className="button">
                        {
                            props.cat.isAdded ? (
                                <button className="btn btn-info mt-3"><i className="fas fa-cat"></i> <strong>Already Added</strong></button>
                            ) : (
                                <button onClick={() => props.handleCost(props.cat)} className="btn btn-info mt-3"><i className="fas fa-cat"></i> <strong>Add to Lsit</strong></button>
                            )
                        }
                        <button className="btn btn-danger mt-3"><i className="fas fa-info-circle"></i> Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cats;