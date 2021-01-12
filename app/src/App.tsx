import React from 'react';

import { Route, Router, useFavicon } from '@kibalabs/core-react';
import { buildTheme, KibaApp } from '@kibalabs/ui-react';
import { Helmet } from 'react-helmet';

import { CreateDomainPage } from './pages/createDomainPage';
import { CreateLinkPage } from './pages/createLinkPage';
import { DomainPage } from './pages/domainPage';
import { DomainsPage } from './pages/domainsPage';
import { EmptyPage } from './pages/emptyPage';
import { ForgotPasswordPage } from './pages/forgotPasswordPage';
import { LinkPage } from './pages/linkPage';
import { LoginPage } from './pages/loginPage';
import { NotFoundPage } from './pages/notFoundPage';
import { RegistrationPage } from './pages/registrationPage';

const baseTheme = buildTheme();
const theme = buildTheme({
  colors: {
    brandPrimary: '#178A80',
  },
  pills: {
    default: {
      normal: {
        default: {
          background: {
            padding: `${baseTheme.dimensions.paddingNarrow4} ${baseTheme.dimensions.padding}`,
            'background-color': '$colors.brandPrimaryClear90',
            'border-width': '1px',
          },
          text: {
            'font-weight': 'normal',
            'font-size': 'smaller',
          },
        },
      },
    },
    success: {
      normal: {
        default: {
          background: {
            'background-color': '$colors.successClear90',
          },
        },
      },
    },
  },
  images: {
    small: {
      background: {
        'border-radius': '0.1em',
      },
    },
  },
});

export const App = (): React.ReactElement => {
  useFavicon('/assets/favicon.svg');

  return (
    <KibaApp theme={theme}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Divergent Console</title>
      </Helmet>
      <Router>
        <Route path='/' page={EmptyPage} />
        <Route path='/login' page={LoginPage} />
        <Route path='/register' page={RegistrationPage} />
        <Route path='/forgot-password' page={ForgotPasswordPage} />
        <Route path='/domains' page={DomainsPage} />
        <Route path='/domains/create' page={CreateDomainPage} />
        <Route path='/domains/:domainId' page={DomainPage} />
        <Route path='/domains/:domainId/links/:linkId' page={LinkPage} />
        <Route path='/domains/:domainId/links/create' page={CreateLinkPage} />
        <Route default={true} page={NotFoundPage} />
      </Router>
    </KibaApp>
  );
};
