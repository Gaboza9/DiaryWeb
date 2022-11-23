import './App.css';
import Sidebar from './components/Sidebar';
import Title from './components/Title';
import MyCalendar from './components/MyCalendar';


function App() {
  return (
    <>
    <Title/>
    <div style={{display:'flex', flexDirection:'row', height:'100%'}}>
    <Sidebar/>
       <MyCalendar/>
    </div>
    </>
  );
}

export default App;
