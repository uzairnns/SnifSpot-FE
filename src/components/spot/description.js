import '../../assests/style/show.css';
import { Verified } from '../../assests/svg'
const Description = (props) => {
  return (
    <div>
      <div className="fancing">
        <div className="fancing-head">Description</div>
        <div className="fancing-details">
          <div>
            <div className="fancing-height icon">
              <span>{props.description}</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="fancing">
        <div className="fancing-head">Cleanliness</div>
        <div className="percentage">
          <span className="f-para">100% of guest </span>
          said fencing at this spot was secure enough to contain
        </div>
        <hr />
      </div>
      <div className="fancing">
        <div className="fancing-head">Hazards</div>
        <div className="percentage">
          The deck can be slippery so please be careful.
        </div>
        <hr />
      </div>
      <div className="fancing">
        <div className="fancing-head">Extras</div>
        <div className="fancing-height">
          <Verified />
          <div>
            <p className="f-para">West Seattle Dog Spot</p>
            <p >Completely fenced in with water, hose, dog bags, parking, and if I’m here the humans can have have chocolate</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}
export default Description
