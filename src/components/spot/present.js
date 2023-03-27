import '../../assests/style/show.css'
import { People, Dog } from '../../assests/svg'
const Present = () => {
  return (
    <div className="fancing">
      <div className="fancing-head">Other audible/visible from the spot</div>
      <div className="fancing-details">
        <div>
          <div className="fancing-height">
            <Dog />
            <div>
              <p className="f-para">Dogs</p>
              <p className="h-para green">No</p>
            </div>
          </div>

          <div className="fancing-height">
            <People />
            <div>
              <p className="f-para">People</p>
              <p className="h-para green">No</p>
            </div>
          </div>
        </div>

        <div>
          <div className="fancing-height icon">
            <Dog />
            <div>
              <p className="f-para">Dogs</p>
              <p className="h-para green">No</p>
            </div>
          </div>

          <div className="fancing-height">
            <People />
            <div>
              <p className="f-para">People</p>
              <p className="h-para green">No</p>
            </div>
          </div>
        </div>

      </div>
      <hr />
    </div>
  )
}
export default Present
