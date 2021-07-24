import styled from 'styled-components'
import common from 'styles/common.module.scss'
import colors from 'styles/colors.module.scss'
import boxshadow from 'styles/boxshadow.module.scss'
import closeURL from 'assets/icons/close.svg'
import Icon from 'components/icon'
import React, { useState, useEffect } from 'react'

const Wrapper = styled.div`
  /* Stretches the input field to container if not inline */
  width: ${props => (props.inline ? 'fit-content' : `calc(100% - 0.5em)`)};
  /* this helps the delete icon's top, left, bottom, right CSS style adjust relative to the Wrapper element */
  position: relative;
`

const InputField = styled.input.attrs(props => {
  // autofocus allows the latest added input field to be in focus except for the special "add another" input field
  return props.autoFocus !== undefined ? { autoFocus: true } : {}
})`
  /* sets it to either block or inline-block */
  display: ${props => props.display};
  /* removes default highlight and border */
  border: none;
  border-left: ${common.accentwidth} solid
    ${props => (props.filled ? colors.flower : colors.wind)};
  :focus {
    border-left: ${common.accentwidth} solid ${colors.flower};
  }
  /* styling it a little bit */
  background-color: ${colors.paper};
  box-shadow: ${boxshadow.down};
  padding: 0.1em 0.5em;
  width: calc(100% - 1em);
  /* inputs will show  */
  text-overflow: ellipsis;
`

const DeleteIcon = styled(Icon)`
  /* positions the delete icon relative to the Wrapper parent element  */
  position: absolute;
  /* aligns the icon to the right and center of the input field */
  right: calc(-${common.sm}px + 1.25em);
  top: ${common.sm / 2}px;
  /* hides it when there is no text */
  visibility: ${props => props.visibility};
`

// Input is an input field with a style and extra features
function Input (props) {
  // value: the text entered into the input field
  const [value, setValue] = useState(props.value || '')

  // useEffect() is invoked after the component finished rendering
  // value is updated here when InputList changes its item values
  // this only happens after the input is finished renderiing
  useEffect(() => {
    if (props.value) setValue(props.value)
  }, [props.value])

  return (
    <Wrapper inline={props.inline}>
      <InputField
        id={props.id}
        data-testid={props.id}
        name={props.id}
        // value is the text entered in the input field
        value={value}
        // placeholder is the greyed out text in the input field
        placeholder={props.placeholder}
        // stylinig it a little bit
        display={props.inline ? 'inline-block' : 'block'}
        className='md'
        filled={value !== ''}
        // onChange is triggered when the text value of the input field is changed
        onChange={e => {
          // updates the input field
          if (!props.preventEdit) setValue(e.target.value)
          // uses the custom onChange event handler if provided
          if (props.onChange) props.onChange(e)
        }}
        // onKeyPress is triggered when you hit a key while the input field is selected
        onKeyPress={props.onKeyPress}
        // onBlur is triggered when you click outside of the input field
        onBlur={props.onBlur}
        autoFocus={props.autoFocus}
      />
      <DeleteIcon
        id={`${props.id}-delete`}
        // show the delete icon only when there is text in the input field
        visibility={value !== '' ? 'visible' : 'hidden'}
        // styling it a little bit
        className='sm clickable'
        // src is the URL for the delete (close) icon
        src={closeURL}
        // onClick is tiggered when you click on the delete icon
        // it use the custom onDelete event handler if provided
        // by default otherwise, it clears the input field.
        onClick={props.onDelete || (() => setValue(''))}
      />
    </Wrapper>
  )
}

export default Input
