
import Accordian from './components/accordian'
import ChangeTheme from './components/change-theme'
import FeatureFlags from './components/feature-flags'
import FeatureFlagsGlobalState from './components/feature-flags/FeatureFlagsContext'
import GithubProfileFinder from './components/GithubProfileFinder'
import ImageSlider from './components/ImageSlider'
import LoadMoreData from './components/load-more-data'
import ModalPopover from './components/ModalPopover'
import TabContents from './components/Multiple-tabs/TabContents'
import QrCodeGenerator from './components/QrCodeGenerator'
import RandomGenerator from './components/random-color-generator'
import ScrollbarProgress from './components/ScrollbarProgress'
import SearchAutocomplete from './components/search-autocomplete'
import StarRating from './components/StarRating'
import TicTacToe from './components/tic-tac-toe'
import TreeView from './components/tree-view'
function App() {

  return (
    <div className=''>
      {/* <Accordian/> */}

      {/* <RandomGenerator/> */}

      {/* <StarRating numOfStars={5}/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/> */}

      {/* <LoadMoreData/> */}

      {/* <TreeView/> */}

      {/* <QrCodeGenerator/> */}

      {/* <ChangeTheme/> */}


      {/* <ScrollbarProgress/> */}

      {/* <TabContents/> */}

      {/* <ModalPopover/> */}

      {/* <GithubProfileFinder/> */}

      {/* <SearchAutocomplete/> */}


      {/* <TicTacToe/> */}


      <FeatureFlagsGlobalState >
        <FeatureFlags />
      </FeatureFlagsGlobalState>
    </div>
  )
}

export default App
