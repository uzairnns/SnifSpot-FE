import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../spinner/loading";
import { createSpot } from "../../api/SpotApi";

const CreatePost =  () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  async function handleSubmit (e) {
    e.preventDefault();
    setIsLoading(true);
    await createSpot(title, description, price, images)
    navigate('/')
    
  }
  useEffect(() => {
    if (!token) { navigate('/login') }
  },[])
  return (
    <div>
      {isLoading ? <Loading /> :
        <div className="container">
          <h1 className="font-bold text-2xl">Create Spot</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group form w-100 p-3" width="100%">
              <label className="w-100 p-3">
                Title:
                <input className="form-control" type="text" required width="100%" value={title} onChange={handleTitleChange} />
              </label>
              <br></br>
              <label className="w-100 p-3 h-25">
                Description:
                <textarea className="form-control " required value={description} onChange={handleDescriptionChange} />
              </label>
              <br></br>
              <label className="w-100 p-3">
                Price:
                <input className="form-control" type="number" required value={price} onChange={handlePriceChange} />
              </label>
              <br />
              <label className="w-25 p-3">
                Images:
                <input className="form-control" type="file" required multiple accept="image/png, image/jpeg" onChange={(event) => setImages(event.target.files)} />
              </label>
              <br />
              <button className="btn btn-primary " type="submit">Create Post</button>
            </div>

          </form>
        </div>
      }
    </div>
  );
};
export default CreatePost;
