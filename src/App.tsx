
import './App.css'
import { AppContainer } from './components/AppContainer/AppContainer';
import BookmarkManager from './components/BookmarkManger'


const isChromeExtension = () => {
  return typeof chrome !== 'undefined' && !!chrome.runtime;
};

function App() {
  return (
    <>
      {!isChromeExtension() ? <>
        <AppContainer />
      </> :
        <BookmarkManager />
      }
    </>
  )
}

export default App
