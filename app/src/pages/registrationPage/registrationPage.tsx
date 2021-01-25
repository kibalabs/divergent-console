import React from 'react';

import { useNavigator } from '@kibalabs/core-react';
import { Alignment, Box, Button, ContainingView, Direction, Form, InputType, PaddingSize, ResponsiveContainingView, SingleLineInput, Spacing, Stack, Text, TextAlignment } from '@kibalabs/ui-react';

import { asyncSleep, isEmailValid } from '../../util';

export interface IRegistrationPageProps {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RegistrationPage = (props: IRegistrationPageProps): React.ReactElement => {
  const navigator = useNavigator();
  const [firstName, setFirstName] = React.useState<string | null>(null);
  const [firstNameError, setFirstNameError] = React.useState<string | null>(null);
  const [lastName, setLastName] = React.useState<string | null>(null);
  const [lastNameError, setLastNameError] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [confirmedPassword, setConfirmedPassword] = React.useState<string | null>(null);
  const [confirmedPasswordError, setConfirmedPasswordError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onRegisterClicked = async (): Promise<void> => {
    let hasNonPasswordError = false;
    let hasPasswordError = false;
    if (!firstName) {
      setFirstNameError('Enter first name');
      hasNonPasswordError = true;
    }
    if (!lastName) {
      setLastNameError('Enter first name');
      hasNonPasswordError = true;
    }
    if (!email) {
      setEmailError('Enter an email address');
      hasNonPasswordError = true;
    }
    if (email && !isEmailValid(email)) {
      setEmailError('Enter a valid email address');
      hasNonPasswordError = true;
    }
    if (!hasPasswordError && !password) {
      setPasswordError('Enter a password');
      hasPasswordError = true;
    }
    if (!hasPasswordError && password && password.length < 8) {
      setPasswordError('Use 8 or more characters');
      hasPasswordError = true;
    }
    if (!hasPasswordError && password && !confirmedPassword) {
      setConfirmedPasswordError('Confirm your password');
      hasPasswordError = true;
    }
    if (!hasPasswordError && password && confirmedPassword && (password !== confirmedPassword)) {
      setPasswordError('Passwords didn\'t match. Try again');
      hasPasswordError = true;
    }
    if (!hasNonPasswordError && !hasPasswordError) {
      setIsLoading(true);
      try {
        asyncSleep(3000);
        // eslint-disable-next-line no-console
        console.log('email', email && email.toLowerCase(), 'password', password);
        navigator.navigateTo('/domains');
      } catch (error) {
        // TODO(rikhil): error to be rendered when registration fails
        console.error('error', error);
      }
    }
    setIsLoading(false);
  };

  const onFirstNameTyped = (typedFirstName: string): void => {
    if (firstNameError) {
      setFirstNameError(null);
    }
    setFirstName(typedFirstName);
  };

  const onLastNameTyped = (typedLastName: string): void => {
    if (lastNameError) {
      setLastNameError(null);
    }
    setLastName(typedLastName);
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

  const onConfirmedPasswordTyped = (typedConfirmedPassword: string): void => {
    if (passwordError) {
      setConfirmedPasswordError(null);
    }
    setConfirmedPassword(typedConfirmedPassword);
  };

  const onNavigateToLoginClicked = (): void => {
    navigator.navigateTo('/login');
  };

  return (
    <ContainingView>
      <ResponsiveContainingView sizeResponsive={{ base: 12, small: 8, medium: 6, large: 5 }}>
        <Stack direction={Direction.Vertical} paddingVertical={PaddingSize.Wide2} isFullHeight={true}>
          <Stack.Item growthFactor={1} shrinkFactor={1} />
          <Box variant='card' isFullWidth={false}>
            <Form onFormSubmitted={onRegisterClicked} isLoading={isLoading}>
              <Stack shouldAddGutters={true} direction={Direction.Vertical} childAlignment={Alignment.Fill}>
                <Text variant='header2' alignment={TextAlignment.Center}>Create account</Text>
                <Spacing variant={PaddingSize.Wide} />
                <Stack isFullHeight={true} isFullWidth={true} shouldAddGutters={true} direction={Direction.Horizontal} childAlignment={Alignment.Center}>
                  <SingleLineInput
                    inputWrapperVariant={firstNameError ? 'error' : undefined}
                    messageText={firstNameError || undefined}
                    placeholderText='First name'
                    inputType={InputType.Text}
                    value={firstName}
                    onValueChanged={onFirstNameTyped}
                  />
                  <SingleLineInput
                    inputWrapperVariant={lastNameError ? 'error' : undefined}
                    messageText={lastNameError || undefined}
                    placeholderText='Last name'
                    inputType={InputType.Text}
                    value={lastName}
                    onValueChanged={onLastNameTyped}
                  />
                </Stack>
                <SingleLineInput
                  inputWrapperVariant={emailError ? 'error' : undefined}
                  messageText={emailError || undefined}
                  placeholderText='Email Address'
                  inputType={InputType.Email}
                  value={email}
                  onValueChanged={onEmailTyped}
                />
                <Stack isFullHeight={true} isFullWidth={true} shouldAddGutters={true} direction={Direction.Horizontal} childAlignment={Alignment.Center}>
                  <SingleLineInput
                    inputWrapperVariant={passwordError ? 'error' : undefined}
                    messageText={passwordError || undefined}
                    placeholderText='Password'
                    inputType={InputType.Password}
                    value={password}
                    onValueChanged={onPasswordTyped}
                  />
                  <SingleLineInput
                    inputWrapperVariant={confirmedPasswordError ? 'error' : undefined}
                    messageText={confirmedPasswordError || undefined}
                    placeholderText='Confirm'
                    inputType={InputType.Password}
                    value={confirmedPassword}
                    onValueChanged={onConfirmedPasswordTyped}
                  />
                </Stack>
                <Spacing variant={PaddingSize.Wide} />
                <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center}>
                  <Stack.Item growthFactor={1} shrinkFactor={1} />
                  <Button variant='secondary' text='Sign in instead' onClicked={onNavigateToLoginClicked} />
                  <Button buttonType='submit' variant='primary' text='Sign up' />
                  <Stack.Item growthFactor={1} shrinkFactor={1} />
                </Stack>
              </Stack>
            </Form>
          </Box>
          <Stack.Item growthFactor={1} shrinkFactor={1} />
        </Stack>
      </ResponsiveContainingView>
    </ContainingView>
  );
};
