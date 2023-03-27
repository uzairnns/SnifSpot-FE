import '../../assests/style/show.css'
import { Verified, Sun } from '../../assests/svg'
const Pricing = (props) => {
  return (
    <div className="fancing">
      <div className="fancing-head">pricing</div>
      <div className="fancing-details">
        <div>
          <div className='price-box'>
            <span className="f-para"> ${props.price} </span>
            per dog per hour

          </div>
          <div className="fancing-height">
            <Verified />
            <div>
              <p className="f-para">50% off all dogs after the 1st dog</p>
            </div>
          </div>

          <div className="fancing-height">
            <Verified />
            <div>
              <p className="f-para">25% off hourly price for 30 min visit</p>
            </div>
          </div>

          <div className="fancing-height">
            <Sun />
            <div>
              <p className="f-para">25% off hourly price for 30 min visit</p>
            </div>
          </div>
        </div>


      </div>
      <hr />
    </div>
  )
}
export default Pricing
