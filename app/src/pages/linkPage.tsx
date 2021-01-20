import React from 'react';

import { Text } from '@kibalabs/ui-react';

export interface ILinkPageProps {
  domainId: string;
  linkId: string;
}

export const LinkPage = (props: ILinkPageProps): React.ReactElement => {
  return (
    <Text>
Link #
      {props.linkId}
      {' '}
inside Domain #
      {props.domainId}
    </Text>
  );
};
