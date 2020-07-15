import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import GlobalStyles from './index.css';

import theme from 'utils/theme';

import { Navigation, Wrapper, LoadingSpinner } from 'components';

function App() {
  const { i18n } = useTranslation();

  return (
    <Fragment>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget' },
          ]}
          RightElement={
            <div>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
              <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path='/'>
              Homepage
            </Route>
            <Route path='/budget'>Budget</Route>
          </Switch>
        </Wrapper>
      </Router>
    </Fragment>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingSpinner />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
