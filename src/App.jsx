import './App.css'
import BotaoComIf from './components/BotaoComIf'

function App() {

  return (
    <>
      <BotaoComIf teste={true}/>
      <BotaoComIf teste={false}/>
    </>
  )
}

export default App
