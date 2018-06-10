import React from 'react';
import BehindText from './Components/behindText';
import OpenedMenu from './Components/openedMenu';
import Reusable from './Helpers/func';
import Extra from './Components/extra';
import Form from './Components/form'
import { Link } from 'react-router-dom';
import calarco from '../images/fd.png'
import david from '../images/david.png'
import federico from '../images/fede.png'
import argentina from '../images/argentina.png'
import ecuador from '../images/ecuador.png'
import italy from '../images/italy.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import email from '../images/email.png'

const members =
[{ name:'Federico Calarco',
   role:'Fullstack Developer',
   pic: calarco,
   nationality:italy},
  {
    name:'David Jaramillo',
    role:'Blockchain Engineer',
    pic:david,
    nationality:ecuador
  },
  {
  name:'Federico Argentina',
  role:'Economy Advisor',
  pic: federico,
  nationality:argentina
  }]

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
      console.log('props' , this.props , this.state)
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
    const tag = this.props.extra;
    const loop = this.props.loop;

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



              <div className="col-11 col-sm-10 ">
                <div className={["row no-gutters d-flex " + `${this.props.justify}`]}>

                  <div className={[`${this.props.subClasses.join(' ')}`]} style={{display}}>
                    <div className="row no-gutters animated d-flex">
                      <h1 className="col-12  azure bold animated delay1 upcase fadeInUp mb-50 ">{this.props.title}</h1>
                      <div className="w-100"></div>

                        <p className="p col-12 animated fadeInUp delay2 grey mb-50 ">{this.props.description}</p>




                        <div className="col-12 col-sm-8 col-md-6" style={{display:`${!this.props.isVertical ? 'block' : 'none'}`}}>
                            <div className="row no-gutters d-flex">
                              <Link className="button azure bold text-center animated delay3 fadeInUp" style={{display}} to={this.props.ref1} onClick={() => this.props.match.path !== this.props.ref1 ? this.setState({isAnimated:false}) : null }>Text us</Link>
                              <Link className="button ml-auto bgRed bold text-center white animated delay3 fadeInUp" style={{display}} to={this.props.ref2} onClick={() => this.props.match.path !== this.props.ref2 ? this.setState({isAnimated:false}) : null }>{this.props.btn}</Link>
                            </div>
                        </div>

                    </div>
                      <div className="row no-gutters justify-content-center animated delay3 fadeInUp" style={{display:`${ this.props.dbtn === 'none' ? 'flex' : 'none'}`}}>
                      <Form actionRequired={this.props.actionRequired} {...this.props}/>
                      <div className="w-100"></div>
                        <div className="col-12 col-sm-6 " >
                            <div className="row no-gutters  justify-content-center" style={{display:`${this.props.actionRequired  ? "none" : "flex"}`}}>
                              <Link className="button col-10 col-sm-4 azure bold text-center animated delay3 fadeInUp" style={{display}} to={this.props.ref1} onClick={() => this.props.match.path !== this.props.ref1 ? this.setState({isAnimated:false}) : null }>{this.props.btn}</Link>
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


            {
              tag !== undefined ?
                <div className="row no-gutters d-flex justify-content-center">
                  {
                  loop !== undefined ? members.map( (x ,id) => {
                    return <Extra tag={tag} icon={[`${linkedin}`,`${twitter}`,`${email}`]} pic={x.pic} nationality={x.nationality}  key={id} name={x.name} role={x.role}/>
                  }) : null
                  }
                </div>
                  : null
              }

                </div>
              </div>







          </div>
      </header>


    )
  }
}
