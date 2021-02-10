import React from 'react';

import { useNavigator } from '@kibalabs/core-react';

export const HomePage = (): React.ReactElement => {
  const navigator = useNavigator();

  React.useEffect((): void => {
    // NOTE(krishan): move this to App when auth is implemented
    navigator.navigateTo('/domains');
  });

  return <div />;
};
