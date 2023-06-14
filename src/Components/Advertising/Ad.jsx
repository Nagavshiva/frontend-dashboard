import { DatePicker} from 'antd';
const { RangePicker } = DatePicker;

const Ad = () => {
  return (
    <>
      <div className="ad-container">
        {/* left-side */}
      <div className="left-side">
      <div className="ad-header">
          <label className="ad-head">Advertising</label>
        </div>

        <div className="ad-selection">
          <div className="selection-left">
            <label className="ad-label">Market Place</label>
            <select className="ad-select">
              <option value="">
                Amazon 923738
              </option>
            </select>
          </div>

          <div className="selection-right">
            <label className="ad-label">Ad Type</label>
            <select className="ad-select">
              <option value="">
                All
              </option>
            </select>
          </div>
        </div>
      </div>

        {/* right-side */}
        <div className="right-date">
          <h4>date & time</h4>
          <RangePicker />
          <span>PST-TimeZone</span>
        </div>
      </div>
    </>
  );
};

export default Ad;
