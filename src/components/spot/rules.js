import '../../assests/style/show.css'
import { Dog, People } from "../../assests/svg"
const Rules = () => {
  return (
    <div className="fancing">
      <div className="fancing-head">Host Rules</div>
      <div className="fancing-details">
        <div>
          <div className="fancing-height">
            <Dog />
            <div>
              <p className="f-para">Minimum visit length</p>
              <p className="h-para green">30 minutes</p>
            </div>
          </div>

          <div className="fancing-height">
            <People />
            <div>
              <p className="f-para">Additional rules</p>
              <p className="h-para green">No rules, just have fun.</p>
            </div>
          </div>

          <div className="fancing-height">
            <Dog />
            <div>
              <p className="f-para">Maximum dogs allowed</p>
              <p className="h-para green">5</p>
            </div>
          </div>
        </div>

        <div>
          <div className="fancing-height icon">
            <People />
            <div>
              <p className="f-para">Required advanced notice for visits</p>
              <p className="h-para green">2 hours</p>
            </div>
          </div>

          <div className="fancing-height">
            <People />
            <div>
              <p className="f-para">Is the host present?</p>
              <p className="h-para green">I generally do not meet my guests</p>
            </div>
          </div>
        </div>

      </div>
      <hr />
    </div>
  )
}
export default Rules
