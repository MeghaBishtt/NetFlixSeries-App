import SeriesCard from "./SeriesCard";
import seriesData from "../api/seriesData";
import './NetFlix.css';  // Same directory as SeriesCard.jsx

export const NetFlixSeries =()=>{
  const name='Queen of Hills';
    const rating='3.9';
    const summary ='lalallalalla';
    
  return(
    <>

<ul className="grid grid-three-cols">
  {seriesData.map((currElement) => {
    return (
  <SeriesCard key={currElement.id} data ={currElement}></SeriesCard>
    );
  })}
</ul>
</>
  )
};