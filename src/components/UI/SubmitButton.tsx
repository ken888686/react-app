import { PropsWithChildren } from 'react'
import classes from './Button.module.scss'

type ButtonProps = {
  onClick: (event: React.FormEvent<HTMLFormElement>) => void
}

function SubmitButton({ onClick, children }: PropsWithChildren<ButtonProps>) {
  return (
    <button type="submit" className={classes.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default SubmitButton
