import React from 'react';


const BehindText = (props) => (

    <div className="col-12  behindText">

      <div className="row no-gutters d-flex h-100 f-50 ">
          <div className="col-12 align-self-center upcase " >
          {
            props.letters.map(
              (letter,id) => (
                <p className={["col-12 text-center m-0 p-0 byrani bold unselectable animated fadeIn" +`${(id % 2) !== 1 ? 'Left' : 'Right'}`]}  style={{fontSize:'5em', display: props.isAnimatable?'block':'none'}} key={id}>{letter}</p>
              )
            )
          }
          </div>

      </div>
    </div>
  )

export default BehindText;
