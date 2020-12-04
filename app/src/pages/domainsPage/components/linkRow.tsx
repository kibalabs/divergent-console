import React from 'react';
import { Direction, Stack, Text, Alignment, KibaIcon } from '@kibalabs/ui-react';

import { Link } from '../../../model';

interface ILinkRowProps {
  link: Link;
}

export const LinkRow = (props: ILinkRowProps): React.ReactElement => {
  return (
    <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Start} isFullWidth={false}>
      <Text>{`/${props.link.sourcePath}`}</Text>
      <KibaIcon iconId='mui-arrow-right-alt' />
      <Text>{props.link.destination}</Text>
    </Stack>
  )
}
