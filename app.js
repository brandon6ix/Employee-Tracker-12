const inquirer = require('inquirer');
const {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./libs/queries');

const init = async () => {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ],
  });

  switch (action) {
    case 'View all departments':
      const departments = await getDepartments();
      console.table(departments);
      init();
      break;
      
    case 'View all roles':
      const roles = await getRoles();
      console.table(roles);
      init();
      break;
      
    case 'View all employees':
      const employees = await getEmployees();
      console.table(employees);
      init();
      break;
      
    case 'Add a department':
      const { departmentName } = await inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Enter the department name:',
      });
      await addDepartment(departmentName);
      console.log(`Added ${departmentName} to the database.`);
      init();
      break;
      
    case 'Add a role':
      const { roleTitle, roleSalary, roleDepartmentId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'roleTitle',
          message: 'Enter the role title:',
        },
        {
          type: 'input',
          name: 'roleSalary',
          message: 'Enter the role salary:',
        },
        {
          type: 'input',
          name: 'roleDepartmentId',
          message: 'Enter the department ID for this role:',
        },
      ]);
      await addRole(roleTitle, roleSalary, roleDepartmentId);
      console.log(`Added ${roleTitle} to the database.`);
      init();
      break;

    case 'Add an employee':
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'Enter the employee\'s first name:',
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'Enter the employee\'s last name:',
        },
        {
          type: 'input',
          name: 'roleId',
          message: 'Enter the role ID for this employee:',
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'Enter the manager ID for this employee (or leave blank if none):',
        },
      ]);
      await addEmployee(firstName, lastName, roleId, managerId);
      console.log(`Added ${firstName} ${lastName} to the database.`);
      init();
      break;

    case 'Update an employee role':
      const { employeeId, newRoleId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'employeeId',
          message: 'Enter the employee ID you want to update:',
        },
        {
          type: 'input',
          name: 'newRoleId',
          message: 'Enter the new role ID for this employee:',
        },
      ]);
      await updateEmployeeRole(employeeId, newRoleId);
      console.log(`Updated employee ID ${employeeId} to new role ID ${newRoleId}.`);
      init();
      break;

    case 'Exit':
      process.exit();
  }
};

init();


