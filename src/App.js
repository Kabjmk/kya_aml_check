import './App.css';
import { Entry } from './pages/entry/Entry.page';
import { DefaultLayout } from "./layout/DefaultLayout"; 

function App() {
  return (
    <div className="App">
      {/* <Entry />     */}
      <DefaultLayout>Send page content</DefaultLayout>
    </div>
  );
}

export default App;
