import React from 'react';
import 'animate.css/animate.min.css';

import {HashRouter as Router, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import {I18n} from 'react-polyglot';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {Home} from './pages/home';
import LocaleContext from './contexts/locale'

const App: React.FC = () => {
  const [locale, setLocale] = React.useState('en');
  // In a real app, you should consider preloading default country
  // or load it from the server.
  const [messages, setMessages] = React.useState({});

  React.useEffect(
    () => {
      async function fetchData() {
        const response = await fetch(`/translations/${locale}.json`);
        const data = await response.json();
        // In a real app, you should consider caching the results in an object.
        // To prevent requests for same locale again.
        return data;
      }

      fetchData()
    },
    [locale]
  );

  return (
    <div className='flex-wrapper'>
      <LocaleContext.Provider value={{locale, setLocale}}>
        <I18n locale={locale} messages={messages}>
          <Router>
            {/*<Header/>*/}
            <AnimatedSwitch
              atEnter={{opacity: 0}}
              atLeave={{opacity: 0}}
              atActive={{opacity: 1}}
            >
              <Route path='/' exact component={Home}/>
            </AnimatedSwitch>
            <Footer/>
          </Router>
        </I18n>
      </LocaleContext.Provider>
    </div>
  );
};

export default App;
