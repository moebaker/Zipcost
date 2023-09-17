import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material"


function Sidebar() {
    const recentItem = (topic) => (
        <div className ="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className="sidebar">

        <div className="sidebar__top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcrFeTovYpISIXKPTtp_fiuFJb34avYyowA&usqp=CAU" alt=""/>
            <h2></h2>
            <h2> ZipCost </h2>
            <h4> Financial Service </h4>
            <h4>This is Financial App helps underreprestented minority families attain finacial security by finding communities with a cost of living. 
            This is Financial App helps underreprestented minority families attain finacial security by finding communities with a cost of living. 
         
            This is Financial App helps underreprestented minority families attain finacial security by finding communities with a cost of living</h4>
            
            <p> ZipCost inspired by Vanguard </p>
            
        

           

           
            </div>

    </div>
  );
}

export default Sidebar