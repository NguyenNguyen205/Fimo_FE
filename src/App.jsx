import './App.css'
import VideoPlayer from './components/VideoPlayer'
import Searchbar from './components/Searchbar';

function App() {

  let videoId = "59aa4b41";

  return (
    <>
      <Searchbar />
      <VideoPlayer videoId={videoId} />
    </>
  )
}

export default App
