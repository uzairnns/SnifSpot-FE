import React, { useEffect } from "react";
import { getSpot } from "../../api/SpotApi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../../assests/style/show.css'
import Fancing from './fancing'
import Present from "./present";
import Amenties from "./amenities";
import Map from "./map";
import { Carousel } from 'react-bootstrap';
import Pricing from "./pricing";
import Description from "./description";
import Rules from "./rules";
import Safty from "./safety";
import Reviews from "./reviews";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { EditIcon } from "../../assests/svg";
import NavBar from "./NavBar";


const Show = () => {
  const [spot, setSpot] = React.useState([])
  const { id } = useParams();
  const [isOpen, setIsOpen] = React.useState(false);
  const [loggedin, setLoggedin] = React.useState(false);
  const navigate = useNavigate();
  const [decodedToken,setDecodedToken] = React.useState(''); 

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const setLoginState = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      
    }
    else {
      setLoggedin(true)
      setDecodedToken(jwtDecode(token));
      
    }
  }

  const handleBookSpot = () => {
    if (!loggedin) {
      navigate('/login')
    }
  }

  useEffect(() => {
    getSpot(id).then((res) => setSpot(res));
    setLoginState()
  }, [id, loggedin]);
  return (
    <div>
      <NavBar loggedin={loggedin} setLoggedin={setLoggedin}/>
      <div className="book" onClick={handleCloseClick}>
        <div className="b-content">
          <div>
            <p className="text">Book this spot!</p>
            <div className="price text">
              ${spot.spot?.price}
              <span> per dog per hour</span>
            </div>
            <button className="btan" onClick={handleBookSpot}>Book Now</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main">
          {isOpen ? (
            <div >
              <Modal size="xl" show={isOpen} >
                <Modal.Header >
                  <Modal.Title>Images Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Carousel>
                    {spot.spot?.image_url.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img className='crosel' src={image} alt="carousel" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseClick}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ) : (
            <div>
              <div className="show-title">
                <h1>{spot.spot?.title}</h1>
                {(spot.spot?.user_id === decodedToken['user_id']) && (loggedin) ? <Link to={`/edit/${spot.spot?.id}`} ><EditIcon /></Link> : null }
                
              </div>
              <div className="photos-block">
                <div className="img-big">
                  <img className="show-img" src={spot.spot?.image_url[0]} alt="new" />
                </div>
                <div className="img-small">
                  <div className="photo">
                    <img className="img-item" src={spot.spot?.image_url[0]} alt="new" />
                  </div>
                  <div className="photo">
                    <img className="img-item" src={spot.spot?.image_url[0]} alt="new" />
                  </div>
                  <button className="bton" onClick={handleOpenClick}>Show all photos</button>
                </div>
              </div>
            </div>
          )}
          <div onClick={handleCloseClick}>
            <hr></hr>
            <Fancing />
            <Present />
            <Amenties />
            <Pricing price={spot.spot?.price} />
            <Map />
            <Description description={spot.spot?.description} />
            <Rules />
            <Safty />
            <Reviews reviews={spot} setSpot={setSpot} spotId={id} loggedin={loggedin} userId={decodedToken['user_id']} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
