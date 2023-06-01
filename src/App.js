import './App.css';
import Wrapper from "./components/layot/wrapper/wrapper";
import MainBoard from "./components/mainBoard/mainBoard";
import Header from "./components/Header/Header";
import CardBlock from "./components/CardBlock/CardBlock";
import Overlay from "./components/Overlay/Overlay";

function App() {
  return (
    <div className="App">
    <Wrapper>
        <Overlay/>
        <Header/>
        <MainBoard>
            <CardBlock/>
        </MainBoard>
    </Wrapper>
    </div>
  );
}

export default App;
