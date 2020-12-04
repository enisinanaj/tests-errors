

function authorize(username) {
    if (username === "admin") {
        return true;
    }

    throw new Error("User not authorized!");
}

function authenticate(username, password) {
    if ((username == 'admin' && password == 'admin1234')
        || (username == 'genericuser' && password == 'genericuser1234') ) {
        return true;
    }

    throw new Error("Authentication error!");
}

module.exports = {authenticate, authorize};