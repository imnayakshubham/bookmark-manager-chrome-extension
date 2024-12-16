
import './App.css'
import BookmarkManager from './components/BookmarkManger'


const isChromeExtension = () => {
  return typeof chrome !== 'undefined' && !!chrome.runtime;
};

function App() {
  return (
    <>
      {!isChromeExtension() ? <>Hello World</> :
        <BookmarkManager />
      }
    </>
  )
}

export default App
