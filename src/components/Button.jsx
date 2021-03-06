import styled, { css } from 'styled-components'
import { space, color, typography, layout, flexbox, border, shadow, variant } from 'styled-system'

const Button = styled.button`
  outline: 0;
  cursor: pointer;
  user-select: none;
  transition: all .15s ease;
  ${({ theme: { space }}) => css`
    padding: ${space[2]} ${space[3]};
    margin: ${space[2]} ${space[0]};
  `}
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${border}
  ${shadow}
  ${variant({
    prop: 'type',
    variants: {
      default: {
        bg: 'grey3',
        color: 'grey',
      },
      primary: {
        bg: 'primary',
        color: 'white',
      },
      accent: {
        bg: 'accent',
        color: 'black',
      },
      success: {
        bg: 'success',
        color: 'white',
      },
      error: {
        bg: 'error',
        color: 'white',
      },
      warning: {
        bg: 'warning',
        color: 'black',
      },
      info: {
        bg: 'info',
        color: 'white',
      }
    }
  })}

  &:hover {
    transform: translateY(-2px);
  }
`

Button.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'CircularStd',
  fontSize: 2,
  border: 'none',
  borderRadius: 'button',
  type: 'default'
}

export default Button