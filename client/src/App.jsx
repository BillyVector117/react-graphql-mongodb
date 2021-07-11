import './App.css';
// Dependencies
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Components
import MessageList from './components/MessageList'
import MessageForm from './components/MessageForm'
import Navbar from './components/Navbar'

import 'bootswatch/dist/materia/bootstrap.min.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/newmessage" component={MessageForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
