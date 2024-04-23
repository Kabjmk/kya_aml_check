import './App.css';
// import { Entry } from './pages/entry/Entry.page';
// import {Dashboard} from "./pages/dashboard/Dashboard.page";
//import {AddRecord} from "./pages/new-record/AddRecord.page";
import { DefaultLayout } from "./layout/DefaultLayout"; 
import {RecordLists } from "./pages/record-list/RecordLists.page";

function App() {
  return (
    <div className="App">
      {/* <Entry />     */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddRecord /> */}
        <RecordLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
