import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

function LayoutSite() {
    return ( 
      <>
        <div >
      <div className="overlay" data-overlay></div>
      <Header />
      <Outlet/>
      
      <Footer />
    </div>
    </>
     );
}
export default LayoutSite;
