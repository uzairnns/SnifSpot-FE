import { Enclouser, Scale } from '../../assests/svg'
import '../../assests/style/show.css'
const Fancing = () => {
  return (
    <div className="fancing">
      <div className="fancing-head">Fancing</div>
      <div className="fancing-details">
        <div>
          <div className="fancing-height">
            <Enclouser />
            <div>
              <p className="f-para">Enclouser</p>
              <p className="h-para">Fully Fanced</p>
            </div>
          </div>

          <div className="fancing-height">
            <Scale />
            <div>
              <p className="f-para">Fancing Height (at lowest point)</p>
              <p className="h-para">4 ft</p>
            </div>
          </div>
        </div>

        <div>
          <div className="percentage">
            <span className="f-para">100% of guest </span>
            said fencing at this spot was secure enough to contain their dogs
          </div>
          <div>
            <span className="f-para">Gaps or holes in fence:  </span>
            no gaps
          </div>
          <div>
            <span className="f-para">Fencing type(s): </span>
            Chain link - non-privacy
          </div>
          <div>
            <span className="f-para">Fencing details:  </span>
            Goes all the way around the house.
          </div>
        </div>

      </div>
      <hr></hr>
    </div>

  )
}
export default Fancing
