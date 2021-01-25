import React from 'react';

import { KibaException } from '@kibalabs/core';
import { useNavigator } from '@kibalabs/core-react';
import { Alignment, Box, Button, ContainingView, Direction, PaddingSize, Pill, Spacing, Stack, Text } from '@kibalabs/ui-react';

import { LinkRow } from '../../components/linkRow';
import { Domain, DOMAIN_ID_LINKS_MAP, DOMAIN_ID_MAP, Link } from '../../model';
import { asyncSleep } from '../../util';

export interface IDomainPageProps {
  domainId: string;
}

export const DomainPage = (props: IDomainPageProps): React.ReactElement => {
  const navigator = useNavigator();
  const [domain, setDomain] = React.useState<Domain | null>(null);
  const [links, setLinks] = React.useState<Link[] | null>(null);

  React.useEffect((): void => {
    loadDomain(props.domainId);
    loadDomainLinks(props.domainId);
  }, [props.domainId]);

  const loadDomain = (domainId: string): void => {
    asyncSleep(300).then((): void => {
      setDomain(DOMAIN_ID_MAP[domainId]);
    }).catch((error: KibaException): void => {
      console.error('error', error);
      setDomain(null);
    });
  };

  const loadDomainLinks = (domainId: string): void => {
    asyncSleep(300).then((): void => {
      setLinks(DOMAIN_ID_LINKS_MAP[domainId]);
    }).catch((error: KibaException): void => {
      console.error('error', error);
      setDomain(null);
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onCreateLinkClicked = (): void => {
  };

  const onViewLinkClicked = (link: Link): void => {
    navigator.navigateTo(`/domains/${props.domainId}/links/${link.linkId}`);
  };

  return (
    <ContainingView>
      <Stack direction={Direction.Vertical} shouldAddGutters={true} paddingHorizontal={PaddingSize.Default}>
        <Spacing variant={PaddingSize.Wide} />
        { !domain ? (
          <Text>Loading...</Text>
        ) : (
          <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Start} isFullWidth={false}>
            <Text variant='header2'>{domain.url}</Text>
            <Pill variant={domain.isVerified ? 'success' : 'default'} text={domain.isVerified ? 'verified' : 'unverified'} />
            <Stack.Item growthFactor={1} shrinkFactor={1} />
            <Button variant='primary' text='Create Link' onClicked={onCreateLinkClicked} />
          </Stack>
        )}
        <Spacing variant={PaddingSize.Wide} />
        <Box variant='card' isFullWidth={false}>
          <Stack direction={Direction.Vertical} shouldAddGutters={true} defaultGutter={PaddingSize.Wide}>
            {links && links.map((link: Link, index: number): React.ReactElement => (
              <LinkRow
                key={index}
                link={link}
                onViewLinkClicked={onViewLinkClicked}
              />
            ))}
          </Stack>
        </Box>
        <Spacing variant={PaddingSize.Wide} />
      </Stack>
    </ContainingView>
  );
};
