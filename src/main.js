import './styles/main.css';
import { EmployeeService } from './services/employee.service.js';

const employeeService = new EmployeeService();
const employees = employeeService.getAll();

console.log('All employees: ', employees);
console.log('Active employess: ', employeeService.getActive());
console.log('Employee by Id: ', employeeService.getById(6));