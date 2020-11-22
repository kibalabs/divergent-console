import React from 'react';
import { Helmet } from 'react-helmet';
import { useFavicon, Router, Route } from '@kibalabs/core-react';
import { buildTheme, KibaApp, Text } from '@kibalabs/ui-react';
import { EmptyPage } from './pages/emptyPage';
import { DomainsPage } from './pages/domainsPage';
import { DomainPage } from './pages/domainPage';
import { NotFoundPage } from './pages/notFoundPage';
import { CreateDomainPage } from './pages/createDomainPage';
import { CreateLinkPage } from './pages/createLinkPage';
import { LinkPage } from './pages/linkPage';

const theme = buildTheme();

export const App = (): React.ReactElement => {
  useFavicon('/assets/favicon.svg');

  return (
    <KibaApp theme={theme}>
      <React.Fragment>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Divergent Console</title>
        </Helmet>
        <Router>
          <Route path='/' page={EmptyPage} />
          <Route path='/domains' page={DomainsPage}/>
          <Route path='/domains/create' page={CreateDomainPage}/>
          <Route path='/domains/:domainId' page={DomainPage} />
          <Route path='/domains/:domainId/links/:linkId' page={LinkPage} />
          <Route path='/domains/:domainId/links/create' page={CreateLinkPage} />
          <Route default={true} page={NotFoundPage} />
        </Router>
      </React.Fragment>
    </KibaApp>
  );
}
