import '../../assests/style/review.css';
import React from 'react';
import { Star, Like, Date } from '../../assests/svg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateReview, getSpot, createReview } from '../../api/SpotApi';
import { EditIcon } from '../../assests/svg';
import { useNavigate } from "react-router-dom";

const Reviews = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [body, setBody] = React.useState('');
  const [reviewId, setReviewId] = React.useState('')
  const handleClose = () => setShow(false);
  function handlePopUp(id, body) {
    setReviewId(id);
    setBody(body);
    setShow(true);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateReview(body, reviewId)
    setShow(false)
    getSpot(props.spotId).then((res) => props.setSpot(res));
  }
  const handleCreate = async (e) => {
    
    e.preventDefault();
    if (!props.loggedin) {
      navigate('/login')
    }
    await createReview(body, props.spotId, setShow, setBody)
    getSpot(props.spotId).then((res) => props.setSpot(res));
    
  }
  return (
    <div>

      {props.reviews?.reviews?.length === 0 ? (
        <p>no reviews available</p>
      ) : (

        <section className="review">
          <div className="comments">
            <div className="rev-header">
              <h2 className="title-review">
                <div>
                  <Star />
                  5.0
                  <span className="count">({props.reviews?.reviews?.length} Reviews)</span>
                </div>
              </h2>
            </div>
            <form onSubmit={handleCreate}>
              <div className="row" style={{ paddingBottom: '10px'}} >
                <div className="col-sm-9">
                  <input className="form-control" type="text" required value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <div className="col-sm-3">
                  <button className="btn btn-primary w-100" type="submit">Add Review</button>
                </div>
              </div>

            </form>
            {props.reviews?.reviews?.map((review) => {
              return (
                <div key={review.id}>
                  {show === true ? (
                    <>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Edit Review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form onSubmit={handleSubmit}>
                            <div className="form-group form w-100 p-3" width="100%">
                              <input className="form-control" type="text" required width="100%" onChange={(e) => setBody(e.target.value)} />
                              <button className="btn btn-primary " type="submit">Submit</button>
                            </div>
                          </form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>
                  ) : (<></>)}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="review-info">
                        <picture>
                          <img className="avatar" src="https://data.sniffspot.com/filters:format(webp)/fit-in/0x240/Users/31227/unnamed.jpg" />
                        </picture>
                        <div className="media-body">
                          <h5 className="user-name">Ali </h5>
                          <div className="date">
                            <Date />
                            <span>13 mar 2033</span>
                            {(props.loggedin === true) && (review.user_id === props.userId) ? (
                              <span style={{ paddingLeft: '10px', cursor: 'pointer' }} onClick={(event) => handlePopUp(review.id, review.body)}><EditIcon /></span>
                            ) : (
                              <></>
                            )}

                          </div>
                        </div>
                        <div className='rating'>
                          <div className='stars'>
                            <Star />
                            <Star />
                            <Star />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 rev-content">
                        <p>{review.body}</p>
                        <div className="comment-action">
                          <p className="vote">
                            <Like />
                            2
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}
export default Reviews
