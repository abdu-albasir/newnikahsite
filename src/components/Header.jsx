import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const GoToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={GoToHome}>
        <h1 className="text">назад</h1>
      </button>
      
      <header className="flex items-center h-20 border-b justify-left">
        <div className="flex items-center gap-9">
          {/* уменьшение размера изображения и выравнивание с текстом */}
          <img width={30} height={30} src={logo} alt="Nikah Space Logo" className="shrink-0" />

          {/* title */}
          <h1 className="text-base font-medium text-hed leading-5">
            Nikah Space
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;


