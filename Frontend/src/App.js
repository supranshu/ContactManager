import {BrowserRouter,Route,Routes} from "react-router-dom"
import {AddContact } from './AddContact'
import { ViewContact } from "./ViewContact";
import { RemoveContact } from "./RemoveContact";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <AddContact />}/>
      <Route  path="/contacts" element={ <ViewContact />}/>
      <Route path="/delete-contacts" element={<RemoveContact/>}/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
