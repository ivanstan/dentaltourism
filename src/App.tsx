import React from 'react';
import 'animate.css/animate.min.css';

import {HashRouter as Router, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

import {Header} from './components/header';
import {Footer} from './components/footer';
import {Home} from './pages/home';

const App: React.FC = () => {
  return (
    <div className='flex-wrapper'>
      <Router>
        <Header />
        <AnimatedSwitch
          atEnter={{opacity: 0}}
          atLeave={{opacity: 0}}
          atActive={{opacity: 1}}
        >
          <Route path='/' exact component={Home} />
        </AnimatedSwitch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
