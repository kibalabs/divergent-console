import React from 'react';

import { Alignment, Box, Button, Direction, Pill, Stack, Text } from '@kibalabs/ui-react';

import { HomeDomain, Link } from '../../../model';
import { LinkRow } from './linkRow';

interface IHomeDomainCardProps {
  homeDomain: HomeDomain;
  onManageClicked: () => void;
}

export const HomeDomainCard = (props: IHomeDomainCardProps): React.ReactElement => {
  const leftoverLinkCount = props.homeDomain.totalLinkCount - props.homeDomain.topLinks.length;
  return (
    <Box variant='card' isFullWidth={false}>
      <Stack direction={Direction.Vertical} shouldAddGutters={true}>
        <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center}>
          <Text variant='header3'>{props.homeDomain.domain.url}</Text>
          <Pill variant={props.homeDomain.domain.isVerified ? 'success' : 'default'} text={props.homeDomain.domain.isVerified ? 'verified' : 'unverified'} />
          <Stack.Item growthFactor={1} shrinkFactor={1} />
          <Button variant='primary' text='Manage' onClicked={props.onManageClicked} />
        </Stack>
        { props.homeDomain.topLinks.map((link: Link, index: number): React.ReactElement => (
          <LinkRow
            key={index}
            link={link}
          />
        ))}
        { leftoverLinkCount > 0 && (
          <Text>{`+ ${leftoverLinkCount} more links`}</Text>
        )}
      </Stack>
    </Box>
  );
};
