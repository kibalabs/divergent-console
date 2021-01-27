import React from 'react';

import { useNavigator } from '@kibalabs/core-react';
import { Alignment, Box, Button, Direction, Form, InputType, Link, PaddingSize, ResponsiveContainingView, SingleLineInput, Spacing, Stack, Text, TextAlignment } from '@kibalabs/ui-react';

import { asyncSleep, isEmailValid } from '../../util';

export interface ILoginPageProps {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LoginPage = (props: ILoginPageProps): React.ReactElement => {
  const navigator = useNavigator();
  const [email, setEmail] = React.useState<string | null>(null);
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onLoginClicked = async (): Promise<void> => {
    let hasErrors = false;
    if (!email) {
      setEmailError('Enter an email address');
      hasErrors = true;
    }
    if (email && !isEmailValid(email)) {
      setEmailError('Enter a valid email address');
      hasErrors = true;
    }
    if (!password) {
      setPasswordError('Enter a password');
      hasErrors = true;
    }
    if (password && password.length < 8) {
      setPasswordError('Wrong password. Try again or click Forgot password to reset it');
      hasErrors = true;
    }
    if (!hasErrors) {
      setIsLoading(true);
      try {
        await asyncSleep(1000);
        navigator.navigateTo('/domains');
      } catch (error) {
        // TODO(rikhil): error to be rendered when login fails
        console.error('error', error);
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

  const onPasswordTyped = (typedPassword: string): void => {
    if (passwordError) {
      setPasswordError(null);
    }
    setPassword(typedPassword);
  };

  const onCreateAccountClicked = (): void => {
    navigator.navigateTo('/register');
  };

  return (
    <ResponsiveContainingView sizeResponsive={{ base: 12, small: 8, medium: 6, large: 5 }}>
      <Stack direction={Direction.Vertical} paddingVertical={PaddingSize.Wide2} isFullHeight={true}>
        <Stack.Item growthFactor={1} shrinkFactor={1} />
        <Box variant='card' isFullWidth={false}>
          <Form onFormSubmitted={onLoginClicked} isLoading={isLoading}>
            <Stack shouldAddGutters={true} direction={Direction.Vertical} childAlignment={Alignment.Fill}>
              <Text variant='header2' alignment={TextAlignment.Center}>Welcome Back :)</Text>
              <Spacing variant={PaddingSize.Wide} />
              <SingleLineInput
                inputWrapperVariant={emailError ? 'error' : undefined}
                messageText={emailError || undefined}
                placeholderText='Email Address'
                inputType={InputType.Email}
                value={email}
                onValueChanged={onEmailTyped}
              />
              <SingleLineInput
                inputWrapperVariant={passwordError ? 'error' : undefined}
                messageText={passwordError || undefined}
                placeholderText='Password'
                inputType={InputType.Password}
                value={password}
                onValueChanged={onPasswordTyped}
              />
              <Stack.Item alignment={Alignment.End}>
                <Link shouldOpenSameTab={true} text='Forgot Password?' target='/forgot-password' />
              </Stack.Item>
              <Spacing variant={PaddingSize.Wide} />
              <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Center}>
                <Button buttonType='button' variant='secondary' text='Create account' onClicked={onCreateAccountClicked} />
                <Button buttonType='submit' variant='primary' text='Sign in' />
              </Stack>
            </Stack>
          </Form>
        </Box>
        <Stack.Item growthFactor={1} shrinkFactor={1} />
      </Stack>
    </ResponsiveContainingView>
  );
};
