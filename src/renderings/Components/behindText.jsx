import React from 'react';

const BehindText = (props) => (

    <div className="col-12  behindText">
    {console.log(props.letters)}
      <div className="row no-gutters d-flex h-100 f-50 ">
          <div className="col-12 align-self-center upcase ">
          {
            props.letters.map(
              (letter,id) => (
                <p className="col-12 text-center m-0 p-0 byrani bold unselectable animated fadeInRight"  style={{fontSize:'5em'}} key={id}>{letter}</p>
              )
            )
          }
          </div>

      </div>
    </div>
  )

export default BehindText;
