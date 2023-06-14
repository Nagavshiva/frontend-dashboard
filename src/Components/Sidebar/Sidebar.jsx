import { HiMenuAlt2 } from "react-icons/hi";
import { SideContent } from "./Nav";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav className="sidebar-nav">
        <div className="sidebar-header">
          <HiMenuAlt2 className="sidebar-icon" />
        </div>
        <ul className="sidebar-ul">
          {SideContent.map((item) => (
            <li key={item.name} className="sidebar-item">
              <h1 className="sidebar-logo">{item.logo}</h1>
              <h6 className="sidebar-name">{item.name}</h6>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
