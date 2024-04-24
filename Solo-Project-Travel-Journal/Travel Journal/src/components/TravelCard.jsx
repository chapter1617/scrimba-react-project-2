export default function TravelCard(props){

   
    return (
        <div className="card-tile">
           <img src={props.imageUrl} className="tile-image" />
           <div className="travel-place">
                <div className="loc-wrapper">
                    <img src="./Images/marker.png" />
                    <p className="location">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Map</a>
                </div>
                <h2 className="loc-title">{props.title}</h2>
                <div className="bold"><span className="start-dt">{props.startDate}</span>-<span className="end-dt">{props.endDate}</span></div>
            <div className="loc-desc">{props.description}</div>
           </div>
        </div>
    )
}