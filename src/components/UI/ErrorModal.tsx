import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.scss'

type ErrorModalProps = {
  title: string
  message: string
}

function ErrorModal({ title, message }: ErrorModalProps) {
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button
            onClick={() => {
              console.log('Close')
            }}
          >
            Okay
          </Button>
        </footer>
      </Card>
    </>
  )
}

export default ErrorModal
