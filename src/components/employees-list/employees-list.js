import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
       return item.increase ? <EmployeesListItem {...item}/> :  <EmployeesListItem {...item}/>
    })
    console.log(elements)
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default EmployeesList;