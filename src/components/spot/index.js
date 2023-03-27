import React, { useEffect } from 'react';
import { getSpots } from '../../api/SpotApi';
import { Link } from "react-router-dom";
import "../../assests/style/list.css";
import ICarousel from '../carousel/carousel';
const Index = () => {
  const [spot, setSpot] = React.useState([])
  useEffect(() => {
    getSpots().then((res) => setSpot(res.spots))
  }, [])
  const order = () => {
    setSpot([...spot].sort((a, b) => a.spot.price - b.spot.price));
  }
  return (
    <div>
      <div className="new">
        <div className="n-content">
          <div>
            <Link className="btan" to={`spot/create`}>Create Spot</Link>
          </div>
          <div>
            <button className="btan" onClick={order}>Sort By Price</button>
          </div>
        </div>
      </div>
      <div className="container main">
        {spot?.length === 0 ? (
          <div className="divStyle">No Spot Available </div>
        ) : (
          <div className='row'>
            {spot?.map((element) => {
              return (
                <div className="col-sm-4 spot" key={element.spot.id} >
                  <div className="image">
                    <ICarousel images={element.spot.image_url} />
                  </div>
                  <div className='title' onClick={event => window.location.href = `show/${element.spot.id}`} >
                    <p>{element.spot.title}</p>
                  </div>
                  <div className='description' onClick={event => window.location.href = `show/${element.spot.id}`}>
                    <p>{element.spot.description}</p>
                  </div>
                  <div className='price'>
                    <span className='price-tag'>${element.spot.price}</span>
                    <span className='price-desc'> dog / hour</span>
                    <span className='reviews'>(5)</span>
                  </div>
                </div>
              );
            })}
          </div>

        )}
      </div>
    </div>
  )
}
export default Index
