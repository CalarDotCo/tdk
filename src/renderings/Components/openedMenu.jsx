import React from 'react';
const OpenedMenu = (props) => (
  <div className={["row no-gutters openedMenu animated fade" + `${props.isOpened ? 'In' : 'Out'}` + "Left"]}>
    <p className="col-auto text-center align-self-center" onClick={props.toggle}>Close</p>
  </div>
)

export default OpenedMenu;
