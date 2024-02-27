// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call the parent constructor with super
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // Override getRole method
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;