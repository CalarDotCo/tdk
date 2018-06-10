import React from 'react';
import {Link} from 'react-router-dom';
import { database } from '../../func/firebase';

export default class Form extends React.Component {

  constructor () {
    super();
    this.state = {
      name: '',
      surname: '',
      email:'',
      message:'',
      countable:4,
      error:''
    }

  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  componentDidMount(){
    database.ref('/Messages').on('value', (snapshot) => {
      console.log('The data' , snapshot.val())
    })
  }

  submitForm = () => {
    const countable = []
    const state = this.state;
    const array = [];
    Object.values(state).map( a => array.push(a));
    array.pop();
    array.map( (a ,id) => {
      if(a.length === 0){
        countable.push(id);
        this.setState({ countable: countable.length})
      }
      // else{
      //   this.setState({error:'Sending . . .'})
      //   database.ref('/Contacts').push({
      //     Name: this.state.name + ' ' +
      //      this.state.surname ,
      //      Email: this.state.email ,
      //      Text: this.state.message
      //   })
      // }
    });

   if(Number(this.state.countable) > 0) {
     this.setState({error:'All input must be filled'})
     console.log(this.state.countable)
   } else {
     this.setState({error:'Sending'})
   }
   console.log(this.state.countable)

  }

  render () {
    return (

  <div className="col-12">

    <div className="row no-gutters justify-content-center">

      <div className="col-12 col-sm-10 col-md-8 col-lg-5 label mb-50 " style={{display:`${this.props.actionRequired ? "flex" : "none"}`}}>

            <label className="col-12 text-center">

              <span className="row no-gutters d-flex align-items-center justify-content-center text-left ">
                  <input type="text" className="col-5 input" name="name" placeholder="Name" onChange={this.handleChange}/>
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
                  <p className="col-12 text-center black">{[this.state.error , this.state.countable]}</p>
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
