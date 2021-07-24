import styled from 'styled-components'
import common from 'styles/common.module.scss'

// Icon is an image with the appropriate padding
const Icon = styled.img.attrs(props => {
  const size = {
    lg: common.lg,
    md: common.md,
    sm: common.sm
  }[props.size]
  const padding = {
    lg: common.lgpad,
    md: common.mdpad,
    sm: common.smpad
  }[props.size]
  return {
    width: `${size}px`,
    height: `${size}px`,
    padding: `${padding}px`,
    id: props.id,
    'data-testid': props.id
  }
})`
  padding: ${props => props.padding};
`

export default Icon
