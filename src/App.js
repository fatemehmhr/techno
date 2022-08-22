import './App.css';
import Header from './components/Header/Header';
import HeaderSliderContainer from './components/HeaderSliderContainer/HeaderSliderContainer';
import SidebarSearchPage from './components/SidebarSearchPage/SidebarSearchPage';
import ContentSearchPage from './components/ContentSearchPage/ContentSearchPage';
import ContentContainer from './components/ContentContainer/ContentContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSliderContainer >
      </HeaderSliderContainer>
      <ContentContainer>
        <ContentSearchPage />
        <SidebarSearchPage />
      </ContentContainer>
    </div>
  );
}

export default App;
