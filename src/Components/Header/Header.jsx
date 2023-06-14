import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1 className="logo-title">ANARIX</h1>
      </div>
      <div className="header-avatar">
        <img
          src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
          className="avatar-image"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Header;




