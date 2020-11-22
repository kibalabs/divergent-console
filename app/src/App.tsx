import React from 'react';
import { Helmet } from 'react-helmet';
import { useFavicon } from '@kibalabs/core-react';
import { buildTheme, KibaApp, Text } from '@kibalabs/ui-react';

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
        <Text>Welcome to Divergent</Text>
      </React.Fragment>
    </KibaApp>
  );
}
