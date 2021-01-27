import React from 'react';

import { KibaException } from '@kibalabs/core';
import { useNavigator } from '@kibalabs/core-react';
import { Alignment, Box, Button, Direction, Form, InputType, PaddingSize, ResponsiveContainingView, SingleLineInput, Spacing, Stack, Text, TextAlignment } from '@kibalabs/ui-react';

import { Domain, DOMAIN_ID_MAP } from '../../model';
import { asyncSleep, isPathValid, isUrlValid } from '../../util';

export interface ICreateLinkPageProps {
  domainId: string;
}

export const CreateLinkPage = (props: ICreateLinkPageProps): React.ReactElement => {
  const navigator = useNavigator();
  const [domain, setDomain] = React.useState<Domain | null>(null);
  const [path, setPath] = React.useState<string | null>(null);
  const [pathError, setPathError] = React.useState<string | null>(null);
  const [target, setTarget] = React.useState<string | null>(null);
  const [targetError, setTargetError] = React.useState<string | null>(null);
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
      setTargetError('Enter a target');
      hasErrors = true;
    }
    if (target && !isUrlValid(target)) {
      setTargetError('Enter a valid target');
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

  const onTargetTyped = (typedTarget: string): void => {
    if (targetError) {
      setTargetError(null);
    }
    setTarget(typedTarget);
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
                    onValueChanged={onTargetTyped}
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
