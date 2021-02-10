import React from 'react';

import { Box, ColorSettingView, Image } from '@kibalabs/ui-react';

export const NavBar = (): React.ReactElement => {
  return (
    <Box variant='navbar-padded'>
      <ColorSettingView variant='inverse'>
        <Box variant='padded'>
          <Image alternativeText='Divergent logo' source='/assets/wordmark-dark.svg' />
        </Box>
      </ColorSettingView>
    </Box>
  );
};
