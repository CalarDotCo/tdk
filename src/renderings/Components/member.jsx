import React from 'react';

const Member = (props) => {
  return(

      <div className="col-8 col-sm-7 col-md-5 col-lg-3 animated fadeInUp delay4 mb-50" id="member">
          <div className="row no-gutters d-flex justify-content-center s100 ">
            <div className="col-10">
              <div className="row no-gutters d-flex justify-content-center">
                <div className="col-12 col-sm-2" style={{marginBottom:5}}>

                  <div className="row no-gutters text-center d-flex sideShadow justify-content-center m-0 p-0 align-items-center h-100 ">

                      <div className="col-4 col-sm-10  animated fadeInLeft delay5">
                        <img src={props.icon[0]} alt="" className="img-fluid p5 opaceable" style={{minHeight:15, minWidth:15}}/>
                      </div>

                      <div className=" col-4 col-sm-10  animated fadeInLeft delay5">
                        <img src={props.icon[1]} alt="" className="img-fluid p5 opaceable" style={{minHeight:15, minWidth:15}}/>
                      </div>

                        <div className="col-4 col-sm-10  animated fadeInLeft delay5">
                          <img src={props.icon[2]} alt="" className="img-fluid p5 opaceable" style={{minHeight:15, minWidth:15}}/>
                        </div>

                      </div>

                    </div>

                    <div className="col-12 col-sm-10" style={{marginBottom:5}}>
                      <div className="row no-gutters d-flex justify-content-center justify-content-sm-end">
                        <div className="col-12 col-sm-11 " style={{background:`url(${props.pic})` , height:'auto', minHeight:150,  backgroundSize:'cover' , backgroundPosition:'center center'}} >
                        </div>
                      </div>
                    </div>


                    <div className="col-12 h-100">
                      <div className="row no-gutters d-flex justify-content-center align-items-center h-100 ">
                          <div className="col-12  sideShadow">
                            <div className="row no-gutters d-flex justify-content-center align-items-center h-100">
                              <div className="col-2  animated fadeInRight delay5" style={{padding:10}}>
                                <img src={props.nationality} alt="" className="img-fluid" style={{minHeight:15, minWidth:15}}/>
                              </div>
                              <div className="col-1">
                              </div>
                              <div className="col-9">
                                <div className="row no-gutters d-flex justify-content-start align-self-center h-100 m-0 p-0">
                                  <p className="col-12 text-left bold upcase f-12 m-0 p-0 animated fadeInLeft delay5" >{props.name}</p>
                                    <div className="w-100"></div>
                                  <p className="col-12 text-left light f-12 m-0 p-0  animated fadeInLeft delay5">{props.role}</p>
                                </div>
                              </div>

                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Member;
