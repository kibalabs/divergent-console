import React from 'react';
import { ContainingView, Direction, Stack, Text, Spacing, PaddingSize } from '@kibalabs/ui-react';

import { HomeDomain, Domain, Link } from '../model';
import { HomeDomainCard } from '../components';
import { useHistory } from '@kibalabs/core-react';

interface IDomainsPageProps {
}

export const DomainsPage = (props: IDomainsPageProps): React.ReactElement => {
  const history = useHistory();

  const domains: HomeDomain[] = [
    new HomeDomain(
      new Domain('1', 'johnsmith.com', true),
      [
        new Link('1', '1', '*', 'www.johnsmith.com', true),
      ],
      1
    ),
    new HomeDomain(
      new Domain('2', 'links.johnsmith.com', true),
      [
        new Link('2', '2', 'twitter', 'www.twitter.com/johnsmith', true),
        new Link('3', '2', 'facebook', 'www.facebook.com/johnsmith', false),
        new Link('4', '2', 'instagram', 'www.instagram.com/johnsmith', true),
      ],
      13
    ),
    new HomeDomain(
      new Domain('3', 'cool.johnsmith.com', false),
      [
        new Link('5', '2', 'cool', 'www.google.com', true),
        new Link('6', '3', 'lame', 'www.facebook.com', false),
      ],
      2
    ),
  ];

  const onManageClicked = (domainId: string): void => {
    history.navigate(`/domains/${domainId}`);
  }

  return (
    <ContainingView>
      <Stack direction={Direction.Vertical} shouldAddGutters={true}>
        <Text variant={'header1'}>Your Domains</Text>
        <Spacing variant={PaddingSize.Wide} />
        { domains.map((homeDomain: HomeDomain, index: number): React.ReactElement => (
          <HomeDomainCard
            key={index}
            homeDomain={homeDomain}
            onManageClicked={(): void => onManageClicked(homeDomain.domain.domainId)}
          />
        ))}
      </Stack>
    </ContainingView>
  );
}
