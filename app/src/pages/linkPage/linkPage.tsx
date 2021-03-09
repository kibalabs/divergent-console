import React from 'react';

import { KibaException } from '@kibalabs/core';
import { Alignment, ContainingView, Direction, PaddingSize, Spacing, Stack, Text } from '@kibalabs/ui-react';

import { Domain, DOMAIN_ID_MAP, Link, LINK_ID_MAP } from '../../model';
import { asyncSleep } from '../../util';

export interface ILinkPageProps {
  domainId: string;
  linkId: string;
}

export const LinkPage = (props: ILinkPageProps): React.ReactElement => {
  const [domain, setDomain] = React.useState<Domain | null>(null);
  const [link, setLink] = React.useState<Link | null>(null);

  React.useEffect((): void => {
    loadLink(props.domainId, props.linkId);
  }, [props.domainId, props.linkId]);

  const loadLink = (domainId: string, linkId: string): void => {
    asyncSleep(300).then((): void => {
      setDomain(DOMAIN_ID_MAP[domainId]);
      setLink(LINK_ID_MAP[linkId]);
    }).catch((error: KibaException): void => {
      console.error('error', error);
      setDomain(null);
      setLink(null);
    });
  };

  return (
    <ContainingView>
      <Stack direction={Direction.Vertical} shouldAddGutters={true} paddingHorizontal={PaddingSize.Default} isFullWidth={true}>
        <Spacing variant={PaddingSize.Wide} />
        { !domain || !link ? (
          <Text>Loading...</Text>
        ) : (
          <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Start} isFullWidth={false}>
            <Text variant='header2-light'>{`${domain.url}/`}</Text>
            <Text variant='header2'>{link.sourcePath}</Text>
          </Stack>
        )}
        <Spacing variant={PaddingSize.Wide} />
      </Stack>
    </ContainingView>
  );
};
