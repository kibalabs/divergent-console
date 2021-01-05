import React from 'react';

import { useHistory } from '@kibalabs/core-react';
import { Alignment, Box, Button, ContainingView, Direction, Form, InputType, Link, PaddingSize, PaddingView, SingleLineInput, Spacing, Stack, Text } from '@kibalabs/ui-react';

import { asyncSleep, isEmailValid } from '../../util';

export interface ILoginPageProps {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LoginPage = (props: ILoginPageProps): React.ReactElement => {
  const history = useHistory();
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
      setPasswordError('Use 8 or more characters');
      hasErrors = true;
    }
    if (!hasErrors) {
      setIsLoading(true);
      try {
        await asyncSleep(1000);
        // eslint-disable-next-line no-console
        console.log('email', email && email.toLowerCase(), 'password', password);
      } catch (error) {
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
    history.navigate('/register');
  };

  return (
    <ContainingView>
      <PaddingView paddingTop={PaddingSize.Wide}>
        <Box variant='card' isFullWidth={false}>
          <Form onFormSubmitted={onLoginClicked} isLoading={isLoading}>
            <Stack isFullHeight={true} isFullWidth={true} shouldAddGutters={true} direction={Direction.Vertical} childAlignment={Alignment.Center}>
              <Text variant='header3'>Welcome Back :)</Text>
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
              <SingleLineInput
                inputWrapperVariant={passwordError ? 'error' : undefined}
                messageText={passwordError || undefined}
                placeholderText='Password'
                inputType={InputType.Password}
                value={password}
                onValueChanged={onPasswordTyped}
              />
              <Spacing variant={PaddingSize.Narrow} />
              <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center}>
                <Stack.Item growthFactor={1} shrinkFactor={1} />
                <Link shouldOpenSameTab={true} text='Forgot Password?' target='/forgot-password' />
              </Stack>
              <Spacing variant={PaddingSize.Wide} />
              <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center}>
                <Stack.Item growthFactor={1} shrinkFactor={1} />
                <Button buttonType='button' variant='secondary' text='Create account' onClicked={onCreateAccountClicked}/>
                <Button buttonType='submit' variant='primary' text='Sign in'/>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </PaddingView>
    </ContainingView>
  );
};
