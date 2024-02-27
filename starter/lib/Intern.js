// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Call the parent constructor with super
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // Override getRole method
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;