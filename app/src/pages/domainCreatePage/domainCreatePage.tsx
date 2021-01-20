import React from 'react';

import { useHistory } from '@kibalabs/core-react';
import { Alignment, Box, Button, ContainingView, Direction, Form, InputType, PaddingSize, ResponsiveContainingView, SingleLineInput, Spacing, Stack, Text, TextAlignment } from '@kibalabs/ui-react';

import { asyncSleep } from '../../util';

export interface IDomainCreatePageProps {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DomainCreatePage = (props: IDomainCreatePageProps): React.ReactElement => {
  const history = useHistory();
  const [url, setUrl] = React.useState<string | null>(null);
  const [urlError, setUrlError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onCreateClicked = async (): Promise<void> => {
    let hasErrors = false;
    if (!url) {
      setUrlError('Enter an url address');
      hasErrors = true;
    }
    if (!hasErrors) {
      setIsLoading(true);
      try {
        await asyncSleep(1000);
        history.navigate('/domains');
      } catch (error) {
        // TODO(krishan711): error to be rendered when login fails
        console.error('error', error);
      }
    }
    setIsLoading(false);
  };

  const onUrlChanged = (typedEmail: string): void => {
    if (urlError) {
      setUrlError(null);
    }
    setUrl(typedEmail);
  };

  return (
    <ContainingView>
      <ResponsiveContainingView sizeResponsive={{ base: 12, small: 8, medium: 6, large: 5 }}>
        <Stack direction={Direction.Vertical} paddingVertical={PaddingSize.Wide2} isFullHeight={true}>
          <Stack.Item growthFactor={1} shrinkFactor={1} />
          <Box variant='card' isFullWidth={false}>
            <Form onFormSubmitted={onCreateClicked} isLoading={isLoading}>
              <Stack shouldAddGutters={true} direction={Direction.Vertical} childAlignment={Alignment.Fill}>
                <Text variant='header2' alignment={TextAlignment.Center}>Create a Domain</Text>
                <Spacing variant={PaddingSize.Wide} />
                <SingleLineInput
                  inputWrapperVariant={urlError ? 'error' : undefined}
                  messageText={urlError || undefined}
                  placeholderText="Your domain's base URL"
                  inputType={InputType.Text}
                  value={url}
                  onValueChanged={onUrlChanged}
                />
                <Spacing variant={PaddingSize.Wide} />
                <Button buttonType='submit' variant='primary' text='Create domain' />
              </Stack>
            </Form>
          </Box>
          <Stack.Item growthFactor={1} shrinkFactor={1} />
        </Stack>
      </ResponsiveContainingView>
    </ContainingView>
  );
};
