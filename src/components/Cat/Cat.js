import React, { useEffect, useState } from 'react';
import Cats from '../Cats/Cats';
import Cost from '../Cost/Cost';
import './Cat.css'

const Cat = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        fetch('./cats.JSON')
            .then(res => res.json())
            .then(data => setCats(data))
    }, [])

    // 
    const [cost, setCost] = useState([]);

    const handleCost = (cat) => {
        cat.isAdded = true;
        const newCat = [...cost, cat]
        setCost(newCat)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            cats.map(cat => <Cats
                                key={cat.key}
                                cat={cat}
                                handleCost={handleCost}
                            ></Cats>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <Cost
                        cost={cost}
                    ></Cost>
                </div>
            </div>
        </div>
    );
};

export default Cat;