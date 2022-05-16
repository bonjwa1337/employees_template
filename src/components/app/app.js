import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

function App() {

  const data = [
    {name: 'Ivan P.', salary: 3000, increase: true},
    {name: 'Sergey V.', salary: 8000, increase: false},
    {name: 'Aron G.', salary: 13000, increase: true},
]

  return(
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        
      </div>
      <EmployeesList data={data}/>
      <EmployeesAddForm />
    </div>
  )
}

export default App;