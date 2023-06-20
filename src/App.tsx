import './App.scss'
import componentsImage from './assets/images/components.png'
import stateImage from './assets/images/state.png'
import eventsImage from './assets/images/events.png'
import Header from './components/Header/Header'

const concepts = [
  {
    id: 0,
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    id: 1,
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    id: 2,
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
]

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        {concepts.map((concept) => (
          <li key={concept.id} className="concept">
            <img src={concept.image} alt={concept.title} />
            <h2>{concept.title}</h2>
            <p>{concept.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
