import './App.css'
import { CounterControls  } from './components/counterControls';
import { CounterDisplay } from './components/counterDisplay';
// import { CounterDisplay2 } from './components/counterDisplay2';
import { AddUserForm } from './components/user/AddUserForm';


function App() {

  return (
    <div>
        <CounterDisplay/>
        <CounterControls/>
        <AddUserForm/>
    </div>
  )
}

export default App
