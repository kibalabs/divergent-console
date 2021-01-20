import React from 'react';

import { Alignment, Box, Button, ContainingView, Direction, Form, InputType, PaddingSize, SingleLineInput, Spacing, Stack, Text } from '@kibalabs/ui-react';

import { asyncSleep, isEmailValid } from '../../util';

export interface IForgotPasswordPageProps {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ForgotPasswordPage = (props: IForgotPasswordPageProps): React.ReactElement => {
  const [email, setEmail] = React.useState<string | null>(null);
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [hasRecoverPasswordFormBeenSubmitted, setHasRecoverPasswordFormBeenSubmitted] = React.useState<boolean>(false);

  const onRegisterClicked = async (): Promise<void> => {
    let hasErrors = false;
    const hasPasswordError = false;
    if (!email) {
      setEmailError('Enter an email address');
      hasErrors = true;
    }
    if (email && !isEmailValid(email)) {
      setEmailError('Enter a valid email address');
      hasErrors = true;
    }
    if (!hasErrors && !hasPasswordError) {
      setIsLoading(true);
      try {
        asyncSleep(3000);
        // eslint-disable-next-line no-console
        console.log('email', email && email.toLowerCase());
        setHasRecoverPasswordFormBeenSubmitted(true);
      } catch (error) {
        // TODO(rikhil): check that the error is correctly rendered when the email is 'wrong'
        setEmailError(error);
      }
    }
    setIsLoading(false);
  };

  const onEmailTyped = (typedEmail: string): void => {
    if (emailError) {
      setEmailError(null);
    }
    setEmail(typedEmail);
  };

  const renderRecoverPasswordForm = (): React.ReactElement => {
    return (
      <Box variant='card' isFullWidth={false}>
        <Form onFormSubmitted={onRegisterClicked} isLoading={isLoading}>
          <Text variant='header3'>Recover Password</Text>
          <Spacing variant={PaddingSize.Wide} />
          <SingleLineInput
            inputWrapperVariant={emailError ? 'error' : undefined}
            messageText={emailError || undefined}
            placeholderText='Email Address'
            inputType={InputType.Email}
            value={email}
            onValueChanged={onEmailTyped}
          />
          <Spacing variant={PaddingSize.Wide} />
          <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center}>
            <Stack.Item growthFactor={1} shrinkFactor={1} />
            <Button buttonType='submit' variant='primary' text='Email me a recovery link'/>
          </Stack>
        </Form>
      </Box>
    );
  };

  const renderEmailSentForm = (): React.ReactElement => {
    return (
      <Box variant='card' isFullWidth={false}>
        <Text variant='header3'>Recover Password</Text>
        <Spacing variant={PaddingSize.Wide} />
        <Text>An email has been sent. Please click the link when you get it.</Text>
      </Box>
    );
  };

  return (
    <ContainingView>
      <Spacing variant={PaddingSize.Wide} />
      <Stack isFullHeight={true} isFullWidth={true} shouldAddGutters={true} direction={Direction.Vertical} childAlignment={Alignment.Center}>
        {hasRecoverPasswordFormBeenSubmitted ? renderEmailSentForm() : renderRecoverPasswordForm()}
      </Stack>
    </ContainingView>
  );
};
