import React from 'react';

import { useHistory } from '@kibalabs/core-react';
import { Alignment, Box, Button, ContainingView, Direction, Form, InputType, PaddingSize, SingleLineInput, Spacing, Stack, Text } from '@kibalabs/ui-react';

import { asyncSleep } from '../../util';

export interface IRegistrationPageProps {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RegistrationPage = (props: IRegistrationPageProps): React.ReactElement => {
  const history = useHistory();
  const [firstName, setFirstName] = React.useState<string | null>(null);
  const [lastName, setLastName] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);
  const [retypedPassword, setRetypedPassword] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onRegisterClicked = async (): Promise<void> => {
    setIsLoading(true);
    try {
      asyncSleep(1000);
      // eslint-disable-next-line no-console
      console.log('email', email, 'password', password);
    } catch (error) {
      console.error('error', error);
    }
    setIsLoading(false);
    history.navigate('/domains');
  };

  const onLoginClicked = (): void => {
    history.navigate('/domains');
  };

  return (
    <ContainingView>
      <Spacing variant={PaddingSize.Wide} />
      <Stack isFullHeight={true} isFullWidth={true} shouldAddGutters={true} direction={Direction.Vertical} childAlignment={Alignment.Center}>
        <Box variant='card' isFullWidth={false}>
          <Form onFormSubmitted={onRegisterClicked} isLoading={isLoading}>
            <Text variant='header3'>Create account</Text>
            <Spacing variant={PaddingSize.Wide} />
            <Stack isFullHeight={true} isFullWidth={true} shouldAddGutters={true} direction={Direction.Horizontal} childAlignment={Alignment.Center}>
              <SingleLineInput placeholderText='First name' inputType={InputType.Text} value={firstName} onValueChanged={setFirstName}/>
              <SingleLineInput placeholderText='Last name' inputType={InputType.Text} value={lastName} onValueChanged={setLastName}/>
            </Stack>
            <Spacing variant={PaddingSize.Wide} />
            <SingleLineInput placeholderText='Email Address' inputType={InputType.Email} value={email} onValueChanged={setEmail}/>
            <Spacing variant={PaddingSize.Wide} />
            <Stack isFullHeight={true} isFullWidth={true} shouldAddGutters={true} direction={Direction.Horizontal} childAlignment={Alignment.Center}>
              <SingleLineInput placeholderText='Password' inputType={InputType.Password} value={password} onValueChanged={setPassword}/>
              <SingleLineInput placeholderText='Confirm' inputType={InputType.Password} value={retypedPassword} onValueChanged={setRetypedPassword}/>
            </Stack>
            <Spacing variant={PaddingSize.Wide} />
            <Stack direction={Direction.Horizontal} shouldAddGutters={true} childAlignment={Alignment.Center}>
              <Stack.Item growthFactor={1} shrinkFactor={1} />
              <Button buttonType='button' variant='secondary' text='Sign in instead' onClicked={onLoginClicked}/>
              <Button buttonType='submit' variant='primary' text='Sign up'/>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </ContainingView>
  );
};
