import React from 'react';
import BehindText from './Components/behindText';
import OpenedMenu from './Components/openedMenu';
import Reusable from './Helpers/func.js';
import { Link } from 'react-router-dom';
import background from '../images/long.png'

export default class PageComponent extends React.Component {

  constructor(props){
    super(props);

    this.state={
      isRenderable:false,
      isAnimated:true,
      isOpenedMenu:false,
      isWhatPage:undefined
    }
  }

  componentWillMount(){
    this.setState({isAnimated:true});
    console.log('will mount' , this.props)
    let node = document.getElementsByClassName('animated');
  }

  componentWillUnmount(){
    console.log('unmount')
    const ifHomePage = this.props.match.url === '/team' ? 'block' : 'none';
    console.log(ifHomePage);
  }

    componentWillReceiveProps(){
      console.log('props' , this.props)
      let _this = this;
      setInterval(function(){
        _this.setState({isAnimated:true})
      } ,  1000)
    }





  toggleMenu = () => {
    this.setState({ isOpenedMenu: !this.state.isOpenedMenu})
  }
  toggleWindow = () => {
    this.setState({ isOpenedMenu: !this.state.isOpenedMenu , isAnimated:false})
  }
   render(){
    const ifHomePage = this.props.match.url === '/' ? 'block' : 'none';
    const {isAnimated} = this.state;
    const animateable = Reusable(this.state.isAnimated, 'In' , 'Out');
    const display = Reusable(this.state.isAnimated,'block','none');
    const back = `${background}`;
    return(

      <header className="col-12">
        <BehindText letters={this.props.BehindText} isVertical={this.props.isVertical} isAnimatable={this.state.isAnimated} />
          <OpenedMenu isOpened={this.state.isOpenedMenu}  toggle={this.toggleWindow} />
            <div className="row no-gutters d-flex justify-content-center h-100">

                <nav className="col-10 mt-50">

                    <div className="row no-gutters ">
                        <p className="col-11 col-sm-4 text-Up upcase byrani bold grey f-50">Tdk-Factory</p>
                        <p className="col-1 col-sm-4 m-0 p-0  text-center">
                        <i className="fas fa-ellipsis-v grey" onClick={this.toggleMenu.bind(this)}></i>
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



              <div className="col-10 align-self-centerh h-50  align-items-center ">
                <div className="row no-gutters d-flex align-self-center  h-100 align-items-center ">

                  <div className={[`${this.props.subClasses.join(' ')}`]}>
                    <div className="row no-gutters animated d-flex justify-content-center">
                      <h1 className="col-12 text-Up azure bold animated delay1  fadeInUp mb-50" style={{display}} >{this.props.title}</h1>
                      <p className="col-12  light grey animated delay2 fadeInUp" style={{display}}>{this.props.description}</p>
                      <div className="w-100 mb-50"></div>

                      <div className="col-12 col-sm-4 col-md-3 h-100 animated fadeInUp delay4" id="member">
                          <div className="row no-gutters d-flex justify-content-center h-100 ">

                            <div className="col-2">

                              <div className="row no-gutters text-center d-flex sideShadow justify-content-center m-0 p-0 align-items-center h-100 ">

                              <div className="col-10">
                                <img src={back} alt="" className="img-fluid" style={{minHeight:15, minWidth:15}}/>
                              </div>

                              <div className="col-10">
                                <img src={back} alt="" className="img-fluid" style={{minHeight:15, minWidth:15}}/>
                              </div>

                                <div className="col-10">
                                  <img src={back} alt="" className="img-fluid" style={{minHeight:15, minWidth:15}}/>
                                </div>

                              </div>

                            </div>

                            <div className="col-10">
                                <img src={back} alt="" className="col-12 col-sm-12" style={{minHeight:150, minWidth:150}}/>
                            </div>

                            <div className="col-2">

                              <div className="row no-gutters text-center d-flex sideShadow justify-content-center align-items-center h-100 ">

                              <div className="col-10">
                                <img src={back} alt="" className="img-fluid" style={{minHeight:15,   minWidth:15 ,  margin:'10px 0'}}/>
                              </div>

                              </div>

                            </div>

                            <div className="col-10 h-100">
                              <div className="row no-gutters d-flex justify-content-center align-items-center h-100 sideShadow">
                                  <div className="col-12 p-0 h-100 ">
                                    <p className="col-12 text-left m-0 p-0">Federico Calarco</p>
                                    <p className="col-12 text-left m-0 p-0">Fullstack blockchain developer</p>
                                  </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="col-12 col-sm-10 ">
                            <div className="row no-gutters" style={{display:`${!this.props.isVertical ? 'flex' : 'none'}`}}>
                              <Link className="button azure bold text-center animated delay3 fadeInUp" style={{display}} to={this.props.ref1} onClick={() => this.props.match.path !== this.props.ref1 ? this.setState({isAnimated:false}) : null } >Text us</Link>
                              <Link className="button ml-auto bgRed bold text-center white animated delay3 fadeInUp" style={{display}} to={this.props.ref2} onClick={() => this.props.match.path !== this.props.ref2 ? this.setState({isAnimated:false}) : null }>{this.props.btn}</Link>
                            </div>
                        </div>
                    </div>

                  </div>

                  <div className="d-none d-sm-block col-sm-2 col-lg-6 ml-auto">
                      <div className="row no-gutters d-flex justify-content-end">
                          <div className="col-12 col-sm-10 col-md-8 col-lg-6 ml-auto">
                            <div className="row no-gutters text-center">
                              <p className={["col-12 skill s1 animated delay4 fadeInRight"]} style={{display:ifHomePage}}>{this.state.isAnimated.toString()}</p>
                            </div>
                          </div>
                      </div>
                  </div>

                </div>
              </div>





          </div>
      </header>


    )
  }
}
