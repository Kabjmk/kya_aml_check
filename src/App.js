import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Entry } from './pages/entry/Entry.page';
import {Registration} from "./pages/registration/Registration.page";
import {Dashboard} from "./pages/dashboard/Dashboard.page";
import {AddRecord} from "./pages/new-record/AddRecord.page";
import {RecordLists } from "./pages/record-list/RecordLists.page";
import {Record } from "./pages/record/Record.page";
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';
import { Home } from './pages/home/Home.page';
import {UserVerification} from "./pages/user-verification/userVerification.page"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-record" element={<AddRecord />} />
            <Route path="/record-list" element={<RecordLists />} />
            <Route path="/record/:rId" element={<Record />} /> 
          </Route>
          <Route exact path="/" element={<Entry />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/verification/:_id/:email" element={<UserVerification/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
