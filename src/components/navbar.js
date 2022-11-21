import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    // const [showNavText, setShowNavText] = useState(false);
    const [navBg, setNavBg] = useState("#9FCECE");
    const [showNavSecond, setShowNavSecond] = useState(false);
    const [showBasic, setShowBasic] = useState(false);
    const location = useLocation();
    useEffect(() => {
    //   if (location.pathname == "/services") {
    //     // Change background color
    //     setNavBg("#9FCECE");
    //   }
    //   if (location.pathname == "/") {
    //     setNavBg("#9FCECE");
    //   }
    //   if (location.pathname == "/contactMe") {
    //     setNavBg("#809bce");
    //   }
    });
    return (
      <>
        <h1>navbar</h1>
        <ul>
            <Link to="/articles"><li>Articles</li></Link>
        </ul>
      </>
    );
  };