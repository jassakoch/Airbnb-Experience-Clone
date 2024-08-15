import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img}
                alt="swimmer"
                className="card-photo" />

            <div className="card--stats">
                <img src="/red-heart.svg"
                    alt="heart icon"
                    className="heart" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p className="price"><span className="bold">From ${props.price} </span> / person</p>

        </div>
    )
}