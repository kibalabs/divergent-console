import React from 'react';
import { Direction, Stack, Text, Box, Button, Alignment } from '@kibalabs/ui-react';

import { Domain } from '../model';

interface IDomainCardProps {
  domain: Domain;
  onManageClicked: () => void;
}

export const DomainCard = (props: IDomainCardProps): React.ReactElement => {
  return (
    <Box variant='card' isFullWidth={false}>
      <Stack direction={Direction.Vertical} shouldAddGutters={true}>
        <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center}>
          <Text variant='header3'>{props.domain.url}</Text>
          <Text variant='note'>{props.domain.isVerified ? 'verified' : 'unverified'}</Text>
          <Stack.Item growthFactor={1} shrinkFactor={1} />
          <Button variant='primary' text='Manage' onClicked={props.onManageClicked} />
        </Stack>
      </Stack>
    </Box>
  );
}
