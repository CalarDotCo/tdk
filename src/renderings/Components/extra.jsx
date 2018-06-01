import React, { Component } from 'react';
import Member from './member';

class Extra extends Component {
  constructor(props){
    super(props)
  }
    components = {
        team: Member
    };

    render() {
       const TagName = this.components[this.props.tag];
       return <TagName {...this.props}/>
    }
}

export default Extra;
