import { PropsWithChildren } from 'react'
import classes from './Button.module.scss'
import { ButtonTypes } from '../../common/Enums'

type ButtonProps = {
  type?: ButtonTypes
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({ type, onClick, children }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      data-type={type?.toString() || 'button'}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
