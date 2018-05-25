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
                          <PageComponent  {...this.props} {...props}
                            ref1="/text" btn="Where" ref2="/area"
                            title="Revolution has your name"
                            description={["The society we have been living in is falling apart",<br/>,"Join the revolution and learn how to gain directly",<br/>,"on your own with latest technologies"]}
                            subClasses={['col-10','col-sm-8','col-md-6','col-lg-4']}
                            BehindText={['T','D','K']}/>
                        )}/>

                      <Route path="/area" render={(props) =>(
                          <PageComponent  {...this.props} {...props}
                            ref1="/text" btn="Discover"  ref2="/team"
                            title="We are worldwide"
                            description={["Our team have been developing for 3 years and a half in blockchain projects",<br/>,"for customer from all over the world.",<br/>,""]}
                            subClasses={['col-10','col-sm-8','col-md-6','col-lg-4']}
                            BehindText={['A','R','E','A']}/>
                        )}/>

                      <Route path="/team" render={(props) =>(
                            <PageComponent
                                {...this.props} {...props}
                                 isVertical={true}
                                 ref1="/sendMessage" btn="" ref2="/"
                                 title="We want to build smart cities"
                                 description={["The decentralisation could change the entire ecosystem of the next ten years.",<br/>,"Economy , Organisation , Healtcare will be totally revolutionised.",<br/>,<br/>,"The TdkFactory team understood that we need being part of this transformation.",<br/>,"it is more than an opportunity."]}
                                 subClasses={['col-12','reTop','text-center']}
                                 BehindText={['V','I','S','I','O','N']}/>
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
