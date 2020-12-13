import React from 'react';

import { KibaException } from '@kibalabs/core';
import { useHistory } from '@kibalabs/core-react';
import { Alignment, Box, Button, ContainingView, Direction, Form, InputType, Link, PaddingSize, SingleLineInput, Spacing, Stack, Text } from '@kibalabs/ui-react';

import { asyncSleep } from '../../util';

export interface ILoginPageProps {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LoginPage = (props: ILoginPageProps): React.ReactElement => {
  const history = useHistory();
  const [email, setEmail] = React.useState<string>(null);
  const [password, setPassword] = React.useState<string>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onLoginClicked = (): void => {
    setIsLoading(true);
    asyncSleep(1000).then((): void => {
      // eslint-disable-next-line no-console
      console.log('email', email, 'password', password);
    }).catch((error: KibaException): void => {
      // eslint-disable-next-line no-console
      console.error('error', error);
    });
    setIsLoading(false);
  };

  const onCreateAccountClicked = (): void => {
    history.navigate('/register');
  };

  return (
    <ContainingView>
      <Spacing variant={PaddingSize.Wide} />
      <Stack isFullHeight={true} isFullWidth={true} shouldAddGutters={true} direction={Direction.Vertical} childAlignment={Alignment.Center}>
        <Box variant='card' isFullWidth={false}>
          <Form onFormSubmitted={onLoginClicked} isLoading={isLoading}>
            <Text variant='header3'>Welcome Back :)</Text>
            <Spacing variant={PaddingSize.Wide} />
            <SingleLineInput placeholderText='Email Address' inputType={InputType.Email} value={email} onValueChanged={setEmail}/>
            <Spacing variant={PaddingSize.Wide} />
            <SingleLineInput placeholderText='Password' inputType={InputType.Password} value={password} onValueChanged={setPassword}/>
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
          </Form>
        </Box>
      </Stack>
    </ContainingView>
  );
};
