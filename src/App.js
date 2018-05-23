import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom'
import PageComponent from './renderings/page.jsx'
class App extends Component {

  constructor(props){
    super(props);
  }
  componentWillUnmount(){
    console.log('unmount')
  }
  componentDidMount(){
    console.log('mount')
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row no-gutters h-100">

              <Switch>

                  <Route  path="/" render={(props) =>(

                    <Switch>

                        <Route exact path="/" render={(props) =>(
                          <PageComponent  {...this.props} {...props} ref1="/team" ref2="/" title="Revolution has your name" description={["The society we have been living in is falling apart",<br/>,"Join the revolution and learn how to gain directly",<br/>,"on your own with latest technologies"]}  BehindText={['T','D','K']}/>
                        )}/>

                      <Route path="/team" render={(props) =>(
                          <PageComponent  {...this.props} {...props} isVertical={true} ref1="/team" ref2="/" title="Tdk heros" BehindText={['T','E','A','M']}/>
                        )}/>

                      <Redirect to="/" />

                    </Switch>

                  )}/>

                <Redirect to="/" />

              </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
