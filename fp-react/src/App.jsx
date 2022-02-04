import './App.css'
import Button from './elements/buttons/button'
import Contain from './components/container/container'
import Details, { Summary } from './elements/details-summary/details-summary'

/**
 * This function returns a div element with a header and a link.
 * @returns A div with a class of App.
 */

const App = () => {
  return (
    <>
      <Contain tag='main' styles={{ padding: '2rem' }}>
        <h1>Hello World</h1>
        <p>lorem</p>
        <Details>
          <Summary>Summary title</Summary>
          <p>This is the content for the details summary, a native accordion component</p>

        </Details>
      </Contain>

      <Contain className='App'>
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
      </Contain>
    </>
  )
}

export default App
