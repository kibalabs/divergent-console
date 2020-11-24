import React from 'react';
import { Direction, Stack, Text, Box, Button, Alignment, KibaIcon } from '@kibalabs/ui-react';

import { HomeDomain, Link } from '../model';

interface ILinkRowProps {
  link: Link;
}

export const LinkRow = (props: ILinkRowProps): React.ReactElement => {
  return (
    <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Start} isFullWidth={false}>
      <Text>{`/${props.link.sourcePath}`}</Text>
      <KibaIcon iconId='mui-arrow-right-alt' />
      <Text>{`${props.link.destination}`}</Text>
    </Stack>
  )
}

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
