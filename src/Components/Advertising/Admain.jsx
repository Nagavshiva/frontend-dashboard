import Ad from "./Ad";
import Table from "./Table";
import Chart from "./Chart";
import {RiDownloadLine} from "react-icons/ri";
import {MdFilterList} from "react-icons/md";
import {GrColumns} from "react-icons/gr";
import "./Admain.scss";

const Admain = () => {
  return (
    <>
      <div className="admain-container">
        <div className="admin">
          <Ad />
          <Chart />
          <div className="bottom-container">
            <div className="brand">
              <label>All Campaign</label>
              <div className="buttons">
                <button>
                  <MdFilterList className="btn-icon"/>
                  Filter
                  </button>
                <button>
                  <GrColumns className="btn-icon"/>
                  Columns
                  </button>
                <button><RiDownloadLine className="btn-icon"/></button>
              </div>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admain;
