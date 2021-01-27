import React from 'react';

import { KibaException } from '@kibalabs/core';
import { useNavigator } from '@kibalabs/core-react';
import { Alignment, Box, Button, Direction, Form, InputType, PaddingSize, ResponsiveContainingView, SingleLineInput, Spacing, Stack, Text, TextAlignment } from '@kibalabs/ui-react';

import { Domain, DOMAIN_ID_MAP } from '../../model';
import { asyncSleep } from '../../util';

export interface ICreateLinkPageProps {
  domainId: string;
}

export const CreateLinkPage = (props: ICreateLinkPageProps): React.ReactElement => {
  const navigator = useNavigator();
  const [domain, setDomain] = React.useState<Domain | null>(null);
  const [path, setPath] = React.useState<string | null>(null);
  const [pathError, setPathError] = React.useState<string | null>(null);
  const [target, setPassword] = React.useState<string | null>(null);
  const [targetError, setPasswordError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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

  const isPathValid = (input: string): boolean => {
    const pattern = new RegExp('^'
      + '(\\/[-a-z\\d%_.~+]*)*',
    'i');
    return !!pattern.test(input);
  };

  const isUrlValid = (input: string): boolean => {
    const pattern = new RegExp('^'
      + '(https?:\\/\\/)?' // protocol
      + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
      + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
      + '(\\:\\d+)?' // port
      + '(\\/[-a-z\\d%_.~+]*)*' // path
      + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
      + '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i');
    return !!pattern.test(input);
  };

  const onCreateLinkClicked = async (): Promise<void> => {
    let hasErrors = false;
    if (!path) {
      setPathError('Enter a path');
      hasErrors = true;
    }
    if (path && !isPathValid(path)) {
      setPathError('Enter a valid path');
      hasErrors = true;
    }
    if (!target) {
      setPasswordError('Enter a target');
      hasErrors = true;
    }
    if (target && !isUrlValid(target)) {
      setPasswordError('Enter a valid target');
      hasErrors = true;
    }
    if (!hasErrors) {
      setIsLoading(true);
      try {
        await asyncSleep(1000);
        navigator.navigateTo(`/domains/${props.domainId}`);
      } catch (error) {
        // TODO(rikhil): error to be rendered when login fails
        console.error('error', error);
      }
    }
    setIsLoading(false);
  };

  const onPathTyped = (typedPath: string): void => {
    if (pathError) {
      setPathError(null);
    }
    setPath(typedPath);
  };

  const onPasswordTyped = (typedPassword: string): void => {
    if (targetError) {
      setPasswordError(null);
    }
    setPassword(typedPassword);
  };

  const onCancelClicked = (): void => {
    navigator.navigateTo(`/domains/${props.domainId}`);
  };

  return (
    <ResponsiveContainingView sizeResponsive={{ base: 12, small: 8, medium: 6, large: 5 }}>
      <Stack direction={Direction.Vertical} paddingVertical={PaddingSize.Wide2} isFullHeight={true}>
        <Stack.Item growthFactor={1} shrinkFactor={1} />
        <Box variant='card' isFullWidth={false}>
          <Form onFormSubmitted={onCreateLinkClicked} isLoading={isLoading}>
            <Stack shouldAddGutters={true} direction={Direction.Vertical} childAlignment={Alignment.Fill}>
              <Text variant='header2' alignment={TextAlignment.Center}>Create Link</Text>
              <Spacing variant={PaddingSize.Wide} />
              {!domain ? (
                <Text variant='light-small'>Loading...</Text>
              ) : (
                <React.Fragment>
                  <Text>
from
                    <Text variant='bold'>{`${domain.url}/`}</Text>
                  </Text>
                  <SingleLineInput
                    inputWrapperVariant={pathError ? 'error' : undefined}
                    messageText={pathError || undefined}
                    placeholderText='Origin path e.g. /page/subpage'
                    inputType={InputType.Text}
                    value={path}
                    onValueChanged={onPathTyped}
                  />
                  <Text>to</Text>
                  <SingleLineInput
                    inputWrapperVariant={targetError ? 'error' : undefined}
                    messageText={targetError || undefined}
                    placeholderText='Target URL e.g. https://www.kibalabs.com/page1'
                    inputType={InputType.Url}
                    value={target}
                    onValueChanged={onPasswordTyped}
                  />
                  <Spacing variant={PaddingSize.Wide} />
                  <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Center}>
                    <Button buttonType='button' variant='secondary' text='Cancel' onClicked={onCancelClicked} />
                    <Button buttonType='submit' variant='primary' text='Create' />
                  </Stack>
                </React.Fragment>
              )}
            </Stack>
          </Form>
        </Box>
        <Stack.Item growthFactor={1} shrinkFactor={1} />
      </Stack>
    </ResponsiveContainingView>
  );
};
