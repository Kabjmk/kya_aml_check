import './App.css';
// import { Entry } from './pages/entry/Entry.page';
// import {Dashboard} from "./pages/dashboard/Dashboard.page";
import { DefaultLayout } from "./layout/DefaultLayout"; 
import {AddRecord} from "./pages/new-record/AddRecord.page";

function App() {
  return (
    <div className="App">
      {/* <Entry />     */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddRecord />
      </DefaultLayout>
    </div>
  );
}

export default App;
