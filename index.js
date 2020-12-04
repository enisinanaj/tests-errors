const { authenticate, authorize } = require("./auth");

function login(username, password) {
    return authenticate(username, password) && authorize(username);
}

module.exports = login;