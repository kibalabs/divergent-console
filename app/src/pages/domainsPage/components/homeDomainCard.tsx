import React from 'react';
import { Direction, Stack, Text, Box, Button, Alignment, Pill } from '@kibalabs/ui-react';

import { LinkRow } from './linkRow';
import { HomeDomain, Link } from '../../../model';

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
          <Text variant='note'>{props.homeDomain.domain.isVerified ? 'verified' : 'unverified'}</Text>
          {/* <Pill variant={props.homeDomain.domain.isVerified ? 'success-small' : 'default-small'} text={props.homeDomain.domain.isVerified ? 'verified' : 'unverified'} /> */}
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
}
