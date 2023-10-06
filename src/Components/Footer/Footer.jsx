import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        
          <div className="footerBox">
            <h3 className="footer">
            © Aaryabrat Chhatkuli
            </h3>
          </div>
       
      </div>
    </>
  );
};
