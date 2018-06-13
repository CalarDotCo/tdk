import React from 'react';
import {Link} from 'react-router-dom';
import { database } from '../../func/firebase';


export default class Form extends React.Component {

  constructor () {
    super();
    this.state = {
      form:{
        name:'',
        surname:'',
        email:'',
        message:'',
      },
      submitable:true,
      countable:4
    }

  }

  handleChange = (evt) => {
    this.setState({ form:{
      ...this.state.form,
      [evt.target.name]:evt.target.value
    }})
  }

  componentDidMount(){
    database.ref('/Messages').on('value', (snapshot) => {
      console.log('The data' , snapshot.val())
    })
  }

  componentWillReceiveProps(){
    console.log('propsssss');
  }

  checkForm = () => {

    const formArray = new Array();

      Object.values(this.state.form).map( (a,id)=> {

          if(a.length === 0){
            formArray.push(a)
          }else{
            formArray.slice(id)
          }
        });

        this.setState({countable: formArray.length})
        return true;
  }


        submitForm = () => {

          let condition = (this.state.submitable === true && this.state.countable === 0);
            if(condition){
              this.setState({flash: 'Sending'})
            }else{
              this.setState({flash: 'An error Occured'})
            }
        }

  render () {
    return (

  <div className="col-12">

    <div className="row no-gutters justify-content-center">

      <div className="col-12 col-sm-10 col-md-8 col-lg-5 label mb-50 " style={{display:`${this.props.actionRequired ? "flex" : "none"}`}}>

            <label className="col-12 text-center">

              <span className="row no-gutters d-flex align-items-center justify-content-center text-left ">
                  <input type="text" className="col-5 input" input="form" name="name" placeholder="Name" onChange={this.handleChange}/>
                <span className="col-5"></span>
                  <input type="text" className="col-5 input" name="surname" placeholder="Surname" onChange={this.handleChange}/>
                <span className="col-5"></span>
                  <input type="text" className="col-5 input" name="email" placeholder="Email" onChange={this.handleChange}/>
                <span className="col-5"></span>
              </span>

              <span className="col-12">

                <span className="row no-gutters d-flex  justify-content-center align-items-center  ">
                  <p className="col-10 text-left">Message</p>
                    <textarea name="message" onChange={this.handleChange} cols="" rows="" className="col-10"/>
                  <p className="col-12 text-center black">{[this.state.flash , this.state.countable]}</p>
                </span>

              </span>

            </label>

      </div>

      <div className="w-100"></div>
        <Link className="button col-4 col-sm-3 col-md-2 azure bold text-center animated delay3 fadeInUp"  to={`${this.props.match.params.url}#text`} onClick={(e) => {
          e.preventDefault();
          this.submitForm();
        }}>Send</Link>


    </div>

  </div>


    )}
}
