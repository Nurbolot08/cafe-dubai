import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import dishes from "../dishes";

const DishDetails = () => {
    const {id} = useParams()
    const [meal, setMeal] = useState({})
    useEffect(() => {
        setMeal(dishes.find(el => el.id === +id))
    },[id])
    return (
        <div className="dish">
            <div className="container">
                <div className="row">
                    <div className="dish-item">
                        <div className="col-md-5">
                            <img src={meal.image} alt={meal.title} className="w-100"/>
                        </div>
                        <div className="col-md-7">
                            <h2>{meal.title}</h2>
                            <p>Description:{meal.description}</p>
                            <div>Price: {meal.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishDetails;