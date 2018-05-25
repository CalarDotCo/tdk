import React from 'react';
import { Link } from 'react-router-dom';

const OpenedMenu = (props) => (
    <div className={["row no-gutters openedMenu justify-content-center d-flex animated fade" + `${props.isOpened ? 'In' : 'Out'}` + "Left"]}>

      <div className="col-6 h-100">
        <div className="row no-gutters justify-content-center menu h-100 align-items-center" style={{ display:`${props.isOpened ? "flex" : "none"}`}}>

            <Link to="/" onClick={()=> props.toggle()}  className="col text-center animated fadeInUp delay1">Home</Link>
            <Link to="/area" onClick={()=> props.toggle()}   className="col text-center animated fadeInUp delay2">About</Link>
            <Link to="/team"  onClick={()=> props.toggle()}  className="col text-center animated fadeInUp delay3">Contact</Link>

        </div>
      </div>
    </div>
)

export default OpenedMenu;
