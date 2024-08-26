import React from "react"

export default function Card(props) {
    
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT" 
    } else if (props.location === "Online") {
        badgeText ="ONLINE" 
    } 
    
    return (
        <div className="card">
            {badgeText && 
            <div className="badge">{badgeText}</div>}
            <img src={props.coverImg}
                alt="swimmer"
                className="card-photo" />

            <div className="card--stats">
                <img src="/red-heart.svg"
                    alt="heart icon"
                    className="heart" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">{props.location}</span>
            </div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-price"><span className="bold">From ${props.price} </span> / person</p>

        </div>
    )
}