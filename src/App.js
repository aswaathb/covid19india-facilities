import './App.scss';
import Navbar from './components/navbar';
import ScrollToTop from './utils/ScrollToTop';

import React, {lazy} from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

const Home = lazy(() =>
  import('./components/home' /* webpackChunkName: "Home" */)
);
const FAQ = lazy(() =>
  import('./components/faq' /* webpackChunkName: "About" */)
);
const Demographics = lazy(() =>
  import('./components/demographics' /* webpackChunkName: "Demographics" */)
);
const State = lazy(() =>
  import('./components/state' /* webpackChunkName: "State" */)
);
const Essentials = lazy(() =>
  import('./components/essentials' /* webpackChunkName: "Essentials" */)
);

const schemaMarkup = {
  '@context': 'http://schema.org/',
  '@type': 'NGO',
  name: 'Coronavirus Outbreak in India: Latest Map and Case Count',
  alternateName: 'COVID-19 Tracker',
  url: 'https://www.covid19india.org/',
  image: 'https://www.covid19india.org/thumbnail.png',
};

function App() {
  const {t} = useTranslation();

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
      showInNavbar: true,
    },
    {
      pageLink: '/demographics',
      view: Demographics,
      displayName: t('Demographics'),
      animationDelayForNavbar: 0.3,
      showInNavbar: true,
    },
    {
      pageLink: '/essentials',
      view: Essentials,
      displayName: t('Essentials'),
      animationDelayForNavbar: 0.5,
      showInNavbar: true,
    },
    {
      pageLink: '/about',
      view: FAQ,
      displayName: t('About'),
      animationDelayForNavbar: 0.6,
      showInNavbar: true,
    },
    {
      pageLink: '/state/:stateCode',
      view: State,
      displayName: t('State'),
      animationDelayForNavbar: 0.7,
      showInNavbar: false,
    },
  ];

  const darkMode = useDarkMode(false);

  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Router>
        <ScrollToTop />
        <Route
          render={({location}) => (
            <React.Fragment>
              <Navbar pages={pages} {...{darkMode}} />
              <Switch location={location}>
                {pages.map((page, index) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      render={({match}) => (
                        <page.view key={match.params.stateCode || index} />
                      )}
                      key={index}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
}

export default App;