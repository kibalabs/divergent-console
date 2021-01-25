import React from 'react';

import { Alignment, Box, Direction, Image, KibaIcon, Stack, Text, Button } from '@kibalabs/ui-react';

import { Link } from '../model';

interface ILinkRowProps {
  link: Link;
  onViewLinkClicked?: (link: Link) => void;
}

export const LinkRow = (props: ILinkRowProps): React.ReactElement => {
  const destinationUrl = new URL(props.link.destination);

  const onViewClicked = (): void => {
    props.onViewLinkClicked(props.link);
  }

  return (
    <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Start} isFullWidth={false}>
      <Box maxHeight='15px' maxWidth='15px' isFullWidth={false} isFullHeight={false}>
        <Image variant='small' fitType='crop' source={`https://icons.duckduckgo.com/ip3/${destinationUrl.hostname}.ico`} alternativeText={destinationUrl.hostname} />
      </Box>
      <Text>{`/${props.link.sourcePath}`}</Text>
      <KibaIcon iconId='mui-arrow-right-alt' />
      <Text>{props.link.destination}</Text>
      {props.onViewLinkClicked && (
        <Button variant='small' text='View' onClicked={onViewClicked} />
      )}
    </Stack>
  );
};
