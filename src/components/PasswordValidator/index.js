import {useState} from 'react'

import {
  MainContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <>
      <MainContainer>
        <PasswordValidatorContainer>
          <Heading>Password Validator</Heading>
          <Text>Check how strong and secure is your password</Text>
          <PasswordInput
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          {password.length < 8 && (
            <ErrorMessage>
              Your password must be at least 8 characters
            </ErrorMessage>
          )}
        </PasswordValidatorContainer>
      </MainContainer>
    </>
  )
}

export default PasswordValidator
