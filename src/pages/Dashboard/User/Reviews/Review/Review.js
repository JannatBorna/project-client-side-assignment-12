import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css'



const Review = ({ review }) => {
    const { name, img, description, rating } = review;
    return (
        <div className="review">


            <Container>
                <Image className="w-25" src={img} roundedCircle />
                <h4 className="name-text my-2">{name}</h4>
                <small className="description-text">{description}</small>
                <br />
                <Rating
                className="text-danger"
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>

              </Container>

        </div>
    );
};

export default Review; 

                

            