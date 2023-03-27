import '../../assests/style/show.css'
import { Chairs, Jug, Restroom, Trash, Treats, Woods } from '../../assests/svg'
const Amenties = () => {
  return (
    <div className="fancing">
      <div className="fancing-head">Amenities</div>
      <div className="fancing-details">
        <div>
          <div className="percentage">
            <Jug />
            Dog drinking water
          </div>
          <div>
            <Treats />
            Dog treats
          </div>
          <div>
            <Woods />
            woods
          </div>
        </div>

        <div>
          <div className="percentage">
            <Chairs />
            Chairs
          </div>
          <div>
            <Restroom />
            Indoor restroom available
          </div>
          <div>
            <Trash />
            Trash can
          </div>
        </div>

      </div>
      <hr />
    </div>
  )
}
export default Amenties
