import React from 'react';
import { Text } from '@kibalabs/ui-react';

export interface IDomainPageProps {
  domainId: string;
}
export const DomainPage = (props: IDomainPageProps): React.ReactElement => {
  return (
    <Text>Domain #{props.domainId}</Text>
  )
}
