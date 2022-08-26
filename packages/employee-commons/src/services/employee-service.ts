import Employee from '../models/employees';

const getEmployeeList = async (): Promise<Employee[] | null> => {
  try {
    const employees = await Employee.findAll();
    return employees;
  } catch (error) {
    console.error('Failed to get employee list', error);
    return null;
  }
};

export { getEmployeeList };
