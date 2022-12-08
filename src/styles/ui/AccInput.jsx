import React, { forwardRef, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'


const InputWrapper = styled.div`
  display: flex;
  flex-direction:column;
  position: relative;
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.common.black}
  position: absolute;
  top: 0;
`

const InputContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== prop.error
})`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  backgorund: ${({ theme }) => theme.colors.background.dark};
  border: 1px solid ${({ theme }) => theme.colors.error.light};
  height: 20px;
  padding: 8px 16px;
  margin: 20px 10px
`

// border: 1px solid ${({ theme }, prop) => prop.error ? theme.colors.error.light : theme.colors.success.light};

const InputStyled = styled.input`
  color: ${({ theme }) => theme.colors.common.black}
  box-sizing: border-box;
  outline: none;
  border: none;
  with: 100%;
  background: transparent;
  background-clip: content-box;
  caret-color: ${({ theme }) => theme.colors.background.dark};
`


const HelpText = styled('small', {
  shouldForwardProp: (prop) => prop !== prop.error
})`
  font-style: 'italic';
  position: absolute;
  bottom: 8px;
  color: ${({ theme }) => theme.colors.success.light};
`

// color: ${({ theme }, prop) => prop.error ? theme.colors.error.light : theme.colors.success.light};

const AccInput = forwardRef((props, ref) => {
  const { label, helperText, error = false, ...rest } = props

  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputContainer error={error}>
        <InputStyled autoComplete='off' ref={ref} {...rest} />
        {
          error && (
            "Warning!!!!"
          )
        }
      </InputContainer>
      {helperText && <HelpText error={error}>{helperText}</HelpText>}
    </InputWrapper>
  )
})

export default AccInput