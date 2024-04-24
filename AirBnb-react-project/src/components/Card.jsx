export default function Card(props){

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./Images/${props.img}`} className="card--image" alt="Main card image."/>
            <div className="card--stats">
                <img src="./Images/star.png" className="card--star" alt="Star icon."/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})  • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}