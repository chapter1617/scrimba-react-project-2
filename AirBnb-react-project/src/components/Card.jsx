export default function Card(props){
    return(
        <div className="card">
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