type ConceptProps = {
  image: string
  title: string
  description: string
}

function Concept(props: ConceptProps) {
  const { image, title, description } = props

  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  )
}

export default Concept
