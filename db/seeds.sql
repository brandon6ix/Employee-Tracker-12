-- Insert sample departments
INSERT INTO department (name) VALUES
('Sales'),
('Engineering'),
('Marketing'),
('Human Resources'),
('Finance');

-- Insert sample roles
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 70000, 1),
('Sales Associate', 50000, 1),
('Software Engineer', 90000, 2),
('DevOps Engineer', 95000, 2),
('Marketing Manager', 80000, 3),
('Recruiter', 60000, 4),
('Accountant', 65000, 5);

-- Insert sample employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Alice', 'Johnson', 3, NULL),
('Bob', 'Brown', 4, 3),
('Chris', 'Davis', 5, NULL),
('Diana', 'Garcia', 6, 5),
('Ethan', 'Wilson', 7, NULL);

