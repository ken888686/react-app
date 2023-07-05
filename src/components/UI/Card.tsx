import { PropsWithChildren } from 'react'
import classes from './Card.module.scss'

type CardProps = { className?: string }

function Card({ className, children }: PropsWithChildren<CardProps>) {
  return <div className={`${classes.card} ${className}`}>{children}</div>
}

export default Card
