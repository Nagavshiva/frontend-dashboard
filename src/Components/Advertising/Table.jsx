import { PlayCircleOutlined } from "@ant-design/icons";
import { RiEditCircleLine } from "react-icons/ri";

const Table = () => {
  // Dummy data for table columns
  const tableColumns = [
    "Status",
    "Campaign Name",
    "Info",
    "Automation",
    "Dayparting",
    "Budget",
    "Bidding Strategy",
    "Spend",
    "Revenue",
    "Current Bid",
    "ACOS",
    "Orders",
    "Impression",
    "CTR",
    "Conv Rate",
  ];

  // Dummy data for table rows
  // Dummy data for table rows
  const tableRows = [
    {
      id: 1,
      status: <PlayCircleOutlined />,
      campaignName: "Campaign A",
      info: "Info A",
      automation: "",
      dayparting: "Yes",
      budget: "$1000",
      biddingStrategy: "Strategy A",
      spend: "$500",
      revenue: "$1000",
      currentBid: "$0.50",
      acos: "10%",
      orders: "50",
      impression: "1000",
      ctr: "5%",
      convRate: "2%",
    },
    {
      id: 2,
      status: <PlayCircleOutlined />,
      campaignName: "Campaign B",
      info: "Info B",
      automation: "",
      dayparting: "No",
      budget: "$2000",
      biddingStrategy: "Strategy B",
      spend: "$1000",
      revenue: "$2000",
      currentBid: "$0.75",
      acos: "8%",
      orders: "80",
      impression: "1500",
      ctr: "6%",
      convRate: "4%",
    },
    {
      id: 3,
      status: <PlayCircleOutlined />,
      campaignName: "Campaign C",
      info: "Info C",
      automation: "",
      dayparting: "Yes",
      budget: "$1500",
      biddingStrategy: "Strategy C",
      spend: "$750",
      revenue: "$1200",
      currentBid: "$0.65",
      acos: "9%",
      orders: "60",
      impression: "1200",
      ctr: "7%",
      convRate: "3%",
    },
    {
      id: 4,
      status: <PlayCircleOutlined />,
      campaignName: "Campaign D",
      info: "Info D",
      automation: "",
      dayparting: "No",
      budget: "$1800",
      biddingStrategy: "Strategy D",
      spend: "$900",
      revenue: "$1800",
      currentBid: "$0.80",
      acos: "7%",
      orders: "90",
      impression: "1800",
      ctr: "8%",
      convRate: "5%",
    },
  ];

  return (
    <>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
            <th>
              <input type="checkbox" className="check-box" />
            </th>
              {tableColumns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id}>
                 <td>
                 <input type="checkbox" className="check-box" /> 
                 </td>
                <td>{row.status}</td>
                <td>
                  {row.campaignName}
                  <RiEditCircleLine className="edit-icon" />
                </td>
                <td>{row.info}</td>
                <td>{row.automation}</td>
                <td>{row.dayparting}</td>
                <td>{row.budget}</td>
                <td>{row.biddingStrategy}</td>
                <td>{row.spend}</td>
                <td>{row.revenue}</td>
                <td>{row.currentBid}</td>
                <td>{row.acos}</td>
                <td>{row.orders}</td>
                <td>{row.impression}</td>
                <td>{row.ctr}</td>
                <td>{row.convRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
