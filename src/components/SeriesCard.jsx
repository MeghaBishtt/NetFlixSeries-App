import './NetFlix.css';  // Same directory as SeriesCard.jsx


const SeriesCard =(props)=>{
return (
    <li key={props.data.id} className="card"> {/* Adding a unique 'key' for each list item */}
    <div>
      <img src={props.data.img_url} alt='react-svg' width='100%' height='60%' />
    </div>
    <div className="card-content">
    <h3>Name: {props.data.name}</h3>
    <h4>Rating: <span className={`rating ${props.data.rating >=8.5 ?"success":"avg"}`}>{props.data.rating} </span></h4>
    <p>Summary: {props.data.description}</p>
    <p>Cast: {props.data.cast}</p>
    <p>Genre: {props.data.genre}</p>
    <a href={props.data.watch_url} target="_blank" rel="noopener noreferrer">
      <button style={{backgroundColor:`${props.data.rating >=8.5 ?"#27b083":"#c2c240"}`,padding:"8px 10px",border:'none',color:'white'}}>Watch This Now</button>
    </a>
    </div>
  </li>
)
}
export default SeriesCard;