import { employees } from '../data/employess';

export class EmployeeService {
    getAll() {
        return employees;
    }

    getById(id) {
        return employees.find(employee => employee.id === id);
    }

    getActive() {
        return employees.filter(employee => employee.active);
    }
}