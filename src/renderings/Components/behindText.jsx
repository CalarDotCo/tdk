import React from 'react';



const BehindText = (props) => (

  <div className={[`${props.isVertical !== true ? "h-100" : "h-50"}`+" row no-gutters behindText d-flex"]}>

    <div className="col-12 align-self-center">

      <div className="row no-gutters d-flex align-items-center justify-content-center">

          {
            props.letters.map(
              (letter,id) => (
                  <h1 className={[`${props.isVertical !== true ? "col-12" : "col-auto"}`+" text-center  bold align-self-center  animated  fadeIn" +`${(id % 2) !== 1 ? 'Left' : 'Right'}`]}  style={{display: props.isAnimatable?'block':'none'}} key={id}>{letter}</h1>
              )
            )
          }

        </div>
      </div>
    </div>
  )

export default BehindText;
