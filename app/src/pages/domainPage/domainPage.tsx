import React from 'react';

import { KibaException } from '@kibalabs/core';
import { Alignment, ContainingView, Direction, PaddingSize, Pill, Spacing, Stack, Text } from '@kibalabs/ui-react';

import { Domain, DOMAIN_ID_MAP } from '../../model';
import { asyncSleep } from '../../util';

export interface IDomainPageProps {
  domainId: string;
}

export const DomainPage = (props: IDomainPageProps): React.ReactElement => {
  const [domain, setDomain] = React.useState<Domain | null>(null);

  React.useEffect((): void => {
    loadDomain(props.domainId);
  }, [props.domainId]);

  const loadDomain = (domainId: string): void => {
    asyncSleep(300).then((): void => {
      setDomain(DOMAIN_ID_MAP[domainId]);
    }).catch((error: KibaException): void => {
      console.error('error', error);
      setDomain(null);
    });
  };

  return (
    <ContainingView>
      <Stack direction={Direction.Vertical} shouldAddGutters={true} paddingHorizontal={PaddingSize.Default}>
        <Spacing variant={PaddingSize.Wide} />
        { !domain ? (
          <Text>Loading...</Text>
        ) : (
          <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Start} isFullWidth={false}>
            <Text variant='header3'>{domain.url}</Text>
            <Pill variant={domain.isVerified ? 'success' : 'default'} text={domain.isVerified ? 'verified' : 'unverified'} />
          </Stack>
        )}
        <Spacing variant={PaddingSize.Wide} />
        {/* { domains.map((homeDomain: HomeDomain, index: number): React.ReactElement => (
          <HomeDomainCard
          key={index}
          homeDomain={homeDomain}
          onManageClicked={(): void => onManageClicked(homeDomain.domain.domainId)}
          />
        ))} */}
        <Spacing variant={PaddingSize.Wide} />
      </Stack>
    </ContainingView>
  );
};
