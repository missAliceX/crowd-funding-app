import styled from 'styled-components'
import common from 'styles/common.module.scss'
import colors from 'styles/colors.module.scss'
import boxshadow from 'styles/boxshadow.module.scss'
import React, { useRef } from 'react'

// Wrapper is an image with the appropriate padding
const Wrapper = styled.div`
  padding: ${props => props.padding};
  background-color: ${props => {
    return (
      {
        cancel: colors.paper,
        action: colors.mage
      }[props.type] || colors.mage
    )
  }};
  color: ${props => {
    return (
      {
        cancel: colors.ink,
        action: colors.paper
      }[props.type] || colors.paper
    )
  }};
  cursor: pointer;
  text-align: center;
  padding: 0.1em 1em;
  display: inline-block;
  border-radius: ${common.borderradius};
  box-shadow: ${boxshadow.down};

  :hover {
    opacity: 0.9;
  }
`

const SubmitButton = styled.button`
  display: none;
`

// Button is a div with a style
function Button (props) {
  const submitButton = useRef(null)
  return (
    <Wrapper
      id={props.id}
      data-testid={props.id}
      type={props.type}
      onClick={e => {
        submitButton.current.click()
        if (props.onClick) props.onClick(e)
      }}
    >
      {props.children}
      {props.type === 'submit' ? (
        <SubmitButton ref={submitButton} type='submit' />
      ) : (
        ''
      )}
    </Wrapper>
  )
}
export default Button
