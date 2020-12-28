import React from 'react';

import { KibaException } from '@kibalabs/core';
import { useHistory } from '@kibalabs/core-react';
import { ContainingView, Direction, PaddingSize, Spacing, Stack, Text } from '@kibalabs/ui-react';

import { Domain, DOMAIN_ID_LINK_MAP, DOMAINS, HomeDomain } from '../../model';
import { asyncSleep } from '../../util';
import { HomeDomainCard } from './components';

interface IDomainsPageProps {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DomainsPage = (props: IDomainsPageProps): React.ReactElement => {
  const history = useHistory();
  const [homeDomains, setHomeDomains] = React.useState<HomeDomain[] | null>(null);

  React.useEffect((): void => {
    loadHomeDomains();
  }, []);

  const loadHomeDomains = (): void => {
    asyncSleep(300).then((): void => {
      setHomeDomains(DOMAINS.map((domain: Domain): HomeDomain => {
        return new HomeDomain(domain, DOMAIN_ID_LINK_MAP[domain.domainId].slice(0, 3), DOMAIN_ID_LINK_MAP[domain.domainId].length);
      }));
    }).catch((error: KibaException): void => {
      console.error('error', error);
      setHomeDomains(null);
    });
  };

  const onManageClicked = (domainId: string): void => {
    history.navigate(`/domains/${domainId}`);
  };

  return (
    <ContainingView>
      <Stack direction={Direction.Vertical} shouldAddGutters={true} paddingHorizontal={PaddingSize.Default}>
        <Spacing variant={PaddingSize.Wide} />
        <Text variant='header1'>Your Domains</Text>
        <Spacing variant={PaddingSize.Wide} />
        { !homeDomains ? (
          <Text>Loading...</Text>
        ) : (
          homeDomains.map((homeDomain: HomeDomain, index: number): React.ReactElement => (
            <HomeDomainCard
              key={index}
              homeDomain={homeDomain}
              onManageClicked={(): void => onManageClicked(homeDomain.domain.domainId)}
            />
          ))
        )}
        <Spacing variant={PaddingSize.Wide} />
      </Stack>
    </ContainingView>
  );
};
