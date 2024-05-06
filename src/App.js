import './App.css';
import { Routes, Route } from "react-router-dom";
import { Entry } from './pages/entry/Entry.page';
import {Dashboard} from "./pages/dashboard/Dashboard.page";
import {AddRecord} from "./pages/new-record/AddRecord.page";
import {RecordLists } from "./pages/record-list/RecordLists.page";
import {Record } from "./pages/record/Record.page";
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';

function App() {
  return (
    
    <div className="App">
     
      
       
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-record" element={<AddRecord />} />
            <Route path="/record-list" element={<RecordLists />} />
            <Route path="/record/:rId" element={<Record />} /> 
          </Route>
          <Route exact path="/" element={<Entry />} />
       </Routes>
         
    </div>
  );
}

export default App;
