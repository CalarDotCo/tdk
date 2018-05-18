import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom'
import PageComponent from './renderings/page.jsx'
class App extends Component {

  constructor(props){
    super(props);
  }
  componentWillUnmount(){
    console.log('ciao')
  }
  componentDidMount(){
    console.log('ciao')
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row no-gutters h-100">

          <Switch>
              <Route  path="/" render={() =>(
                <Switch>
                    <Route exact path="/" render={() =>(
                      <PageComponent title="This revolution has your name"  BehindText={['T','D','K']}/>

                    )}/>
                    <Route exact path="/team" render={() =>(
                      <PageComponent title="Tdk heros" BehindText={['T','E','A','M']}/>
                    )}/>
                </Switch>

              )}/>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
