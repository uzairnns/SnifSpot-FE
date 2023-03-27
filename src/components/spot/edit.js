import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpot, editSport } from "../../api/SpotApi";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    await editSport(id,title,description,price)
    navigate(`/show/${id}`);
    
  }
  useEffect(() => {
    getSpot(id).then(
      (res) => (setTitle(res.spot.title),
        setDescription(res.spot.description),
        setPrice(res.spot.price))
        
    );
  }, []);
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl">Create Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group form w-100 p-3" width="100%">
            <label className="w-100 p-3">
              Title:
              <input className="form-control" type="text" required width="100%" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br></br>
            <label className="w-100 p-3 h-25">
              Description:
              <textarea className="form-control " required value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br></br>
            <label className="w-100 p-3">
              Price:
              <input className="form-control" type="number" required value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br />
            <button className="btn btn-primary " type="submit">Update Spot</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Edit
