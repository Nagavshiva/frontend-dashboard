import "./Admain.scss";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = [23,2,4,25,26,27,28,29,30,1,2,3,4];
const data = {
  labels,
  datasets: [
    {
   label:"Revenue-Acos",
      data: [3000, 2000, 4000, 6000, 5000, 2000, 3000, 4000, 5000, 2000, 3000, 4000,],
      backgroundColor: 'blue',
    },
    // Add more datasets as needed
  ],
};



const Chart = () => {
  // Dummy data for cards
  const cardData = [
    {
      title: "Ads Spends & Returns",
      metrics: [
        {
          label: "Ads Spend",
          value: "$54.5k",
          icons: <BsArrowDownRight />,
          percentage: "19.9%",
        },
        {
          label: "Another Metric",
          value: "$10.2k",
          icons: <BsArrowDownRight />,
          percentage: "7.6%",
        },
        {
          label: "Metric",
          value: "$20.8k",
          icons: <BsArrowDownRight />,
          percentage: "11.2%",
        },
        {
          label: "One More Metric",
          value: "$15.3k",
          icons: <BsArrowUpRight />,
          percentage: "8.3%",
        },
      ],
    },
    {
      title: "Click Through Rate & Clicks",
      metrics: [
        {
          label: "CTR",
          value: "1.5%",
          percentage: "6.2%",
        },
        {
          label: "Clicks",
          value: "2.3k",
          percentage: "9.8%",
        },
        {
          label: "Another Metric",
          value: "1.8%",
          percentage: "7.5%",
        },
      ],
    },
    {
      title: "Conversation Rate & Order",
      metrics: [
        {
          label: "Conversion Rate",
          value: "3.2%",
          percentage: "12.6%",
        },
        {
          label: "Orders",
          value: "45",
          percentage: "8.1%",
        },
        {
          label: "Another Metric",
          value: "2.6%",
          percentage: "10.4%",
        },
      ],
    },
  ];


  

  return (
    <>
      <div className="chart-container">
        {cardData.map((section, index) => (
          <div key={index} className="card-section">
            <div className="card-head">
              <h6 className="left-title">{section.title}</h6>
              <select className="right-option">
                <option value="">last 7 days</option>
              </select>
            </div>
            <div className="card-line"></div>

            <div className="card-container">
              <ul className="card-list">
                {section.metrics.map((item, index) => (
                  <li key={index} className="card-item">
                    <span className="card-label">{item.label}</span>
                    <h4 className="card-value">
                      {item.value}
                      <p className="card-icons"> {item.icons}</p>
                      <p className="card-percentage">{item.percentage}</p>
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-line"></div>
            <Bar data={data}/>
          </div>
        ))}
  
       
      </div>
    </>
  );
};

export default Chart;
