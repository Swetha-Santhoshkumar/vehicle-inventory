import logo from './logo.svg';
import './App.css';
import AddVehicle from './componenets/AddVehicle';
import SearchVehicle from './componenets/SearchVehicle';
import DeleteVehicle from './componenets/DeleteVehicle';
import ViewVehicle from './componenets/ViewVehicle';

function App() {
  return (
    <div >
      
      <AddVehicle/>
      <SearchVehicle/>
      <DeleteVehicle/>
      <ViewVehicle/>
    </div>
  );
}

export default App;
