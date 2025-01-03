class UserProfile {
    constructor(username, email, birthdate) {
        this.username = username; // Uses the setter for validation
        this.email = email;       // Uses the setter for validation
        this.birthdate = birthdate; // Uses the setter for validation
    }

    // Getter and setter for username
    get username() {
        return this._username;
    }

    set username(name) {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error('Invalid username.');
        }
        this._username = name;
    }

    // Getter and setter for email
    get email() {
        return this._email;
    }

    set email(email) {
        if (typeof email !== 'string' || !email.includes('@')) {
            throw new Error('Invalid email.');
        }
        this._email = email;
    }

    // Getter and setter for birthdate
    get birthdate() {
        return this._birthdate;
    }

    set birthdate(date) {
        const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
        if (typeof date !== 'string' || !regex.test(date)) {
            throw new Error('Invalid birthdate.');
        }
        this._birthdate = date;
    }
}
