import React from 'react';

import { Route, Router, useFavicon } from '@kibalabs/core-react';
import { buildTheme, Direction, KibaApp, Stack } from '@kibalabs/ui-react';
import { Helmet } from 'react-helmet';

import { NavBar } from './components/navBar';
import { CreateLinkPage } from './pages/createLinkPage';
import { DomainCreatePage } from './pages/domainCreatePage';
import { DomainPage } from './pages/domainPage';
import { DomainsPage } from './pages/domainsPage';
import { HomePage } from './pages/homePage';
import { ForgotPasswordPage } from './pages/forgotPasswordPage';
import { LinkPage } from './pages/linkPage/linkPage';
import { LoginPage } from './pages/loginPage';
import { NotFoundPage } from './pages/notFoundPage';
import { RegistrationPage } from './pages/registrationPage';

const baseTheme = buildTheme();
const theme = buildTheme({
  colors: {
    brandPrimary: '#178A80',
  },
  boxes: {
    navbar: {
      'background-color': '$colors.brandPrimary',
      'border-radius': '0',
      'box-shadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
      'z-index': '10',
    },
  },
  pills: {
    default: {
      normal: {
        default: {
          background: {
            padding: `${baseTheme.dimensions.paddingNarrow2} ${baseTheme.dimensions.paddingWide}`,
            'background-color': '$colors.brandPrimaryClear90',
            'border-width': '0px',
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
  texts: {
    light: {
      color: '$colors.textLight50',
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
      <Stack direction={Direction.Vertical} isFullWidth={true}>
        <NavBar />
        <Router>
          <Route path='/' page={HomePage} />
          <Route path='/login' page={LoginPage} />
          <Route path='/register' page={RegistrationPage} />
          <Route path='/forgot-password' page={ForgotPasswordPage} />
          <Route path='/domains' page={DomainsPage} />
          <Route path='/domains/create' page={DomainCreatePage} />
          <Route path='/domains/:domainId' page={DomainPage} />
          <Route path='/domains/:domainId/links/:linkId' page={LinkPage} />
          <Route path='/domains/:domainId/links/create' page={CreateLinkPage} />
          <Route default={true} page={NotFoundPage} />
        </Router>
      </Stack>
    </KibaApp>
  );
};
