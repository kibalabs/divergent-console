import React from 'react';

import { Box, ColorSettingView, Text } from "@kibalabs/ui-react";

export const NavBar = (): React.ReactElement => {
  return (
    <Box variant='navbar-padded'>
      <ColorSettingView variant='inverse'>
        <Box variant='padded'>
          <Text variant='header2'>homezen</Text>
        </Box>
      </ColorSettingView>
    </Box>
  );
}
