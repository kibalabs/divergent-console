import React from 'react';
import { ContainingView, Direction, Stack, Text, Box, Spacing, PaddingSize, Button, Alignment } from '@kibalabs/ui-react';

import { Domain } from '../model';
import { DomainCard } from '../components';
import { useHistory } from '@kibalabs/core-react';

interface IDomainsPageProps {
}

export const DomainsPage = (props: IDomainsPageProps): React.ReactElement => {
  const history = useHistory();

  const domains = [
    new Domain('1', 'johnsmith.com', true),
    new Domain('2', 'links.johnsmith.com', true),
    new Domain('3', 'cool.johnsmith.com', false),
  ];

  const onManageClicked = (domainId: string): void => {
    history.navigate(`/domains/${domainId}`);
  }

  return (
    <ContainingView>
      <Stack direction={Direction.Vertical} shouldAddGutters={true}>
        <Text variant={'header1'}>Your Domains</Text>
        <Spacing variant={PaddingSize.Wide} />
        { domains.map((domain: Domain): React.ReactElement => (
          <DomainCard domain={domain} onManageClicked={(): void => onManageClicked(domain.domainId)} />
        ))}
      </Stack>
    </ContainingView>
  );
}
