import React from 'react';
import BehindText from './Components/behindText';
import OpenedMenu from './Components/openedMenu';
import { Link } from 'react-router-dom';
// var animation = () => {
//
//   const nodelist = document.querySelectorAll('.skill')
//   const divyArray = Array.prototype.slice.call(nodelist)
//   console.log(divyArray);
//   for (var i = 0; i < 4; i++) {
//     console.log(divyArray[i])
//   }
//   setInterval(function(){console.log(animatable[0].classList[2]); }, 3000);
// }
// animation();
const page = window.location.pathname;
const isTeam = page !== "/team";
console.log(isTeam , page);
export default class PageComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isRenderable:false
    }
  }

  componentDidMount(){
    this.setState({isRenderable:true})
    console.log(this.state);
  }
  componentDidUpdate(){
    console.log(this.state);
  }
   render(){
    const ifRendered = this.state.isRenderable ? 'flex' : 'none';
    return(

      <header className="col-12">
      <BehindText letters={this.props.BehindText} onChange={console.log('changed')}/>
      {/* <OpenedMenu/> */}
        <div className="row no-gutters d-flex justify-content-center h-100">

            <nav className="col-10 mt-50">

                <div className="row no-gutters ">
                    <p className="col-11 col-sm-4 text-left upcase byrani bold grey f-50">Tdk-Factory</p>
                    <p className="col-1 col-sm-4 m-0 p-0  text-center">
                    <i className="fas fa-ellipsis-v grey"></i>
                    </p>
                    <div className="col-4 d-none d-sm-block">
                      <div className="row no-gutters d-flex justify-content-end grey">
                      <i className="fab fa-twitter m5"></i>
                      <i className="fab fa-telegram m5"></i>
                      <i className="fab fa-linkedin m5"></i>
                      </div>
                    </div>
                </div>
            </nav>



            <div className="col-10 align-self-center align-items-center ">
              <div className="row no-gutters d-flex align-items-center ">

                <div className="col-10 col-sm-9 col-lg-6">
                  <div className="row no-gutters">
                    <h1 className="col-12 text-left azure bold ">{this.props.title}</h1>
                    <p className="col-12  light grey">The society we have been living in is falling apart.<br/>Join the revolution and learn how to gain directly on your own with latest technologies.</p>
                    <div className="w-100 mb-50"></div>
                      <div className="col-12 col-sm-10 ">
                          <div className="row no-gutters">
                            <Link className="button azure bold text-center" to="/team">Text us</Link>
                            <Link className="button ml-auto bgRed bold text-center white" to="/">Discover</Link>
                          </div>
                      </div>
                  </div>

                </div>

                <div className="d-none d-sm-block col-sm-3 col-lg-6">
                    <div className="row no-gutters d-flex justify-content-end">
                        <div className="col-auto">
                          <div className="row no-gutters text-center" style={{display: ifRendered}}>
                            <p className="col-12 skill s1 animated slideInLeft">Skill</p>
                            <p className="col-12 skill s2 animated slideInRight">Skill</p>
                            <p className="col-12 skill s3 animated slideInLeft">Skill</p>
                            <p className="col-12 skill animated slideInRight">Skill</p>
                            <p className="col-12 skill s3 animated slideInLeft">Skill</p>
                            <p className="col-12 skill s2 animated slideInRight">Skill</p>
                            <p className="col-12 skill s1 animated slideInLeft">Skill</p>

                          </div>
                        </div>


                    </div>
                </div>

              </div>
            </div>

            <div className="col-10 align-self-end mb-50">
              <div className="row no-gutters d-flex justify-content-end">
                <button>Support</button>
              </div>
            </div>




        </div>
      </header>


    )
  }
}
