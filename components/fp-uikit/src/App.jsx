import './App.css'
import logo from './logo.svg'


/**
 * This function returns a div element with a header and a link.
 * @returns A div with a class of App.
 */

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' />
        <a
          className='App-link'
          href='https://beta.reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React....
        </a>
      </header>
    </div>
  )
}

export default App
