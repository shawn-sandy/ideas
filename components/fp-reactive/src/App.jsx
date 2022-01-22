import './App.css'
import Button from './components/buttons/button'

/**
 * This function returns a div element with a header and a link.
 * @returns A div with a class of App.
 */

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://beta.reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React....
        </a>
        <p>
          <Button />
        </p>
      </header>

    </div>
  )
}

export default App
