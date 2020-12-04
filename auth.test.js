const { authenticate, authorize } = require("./auth");

test('given username admin and password admin1234, when login is called, then result is error', () => {
    expect(authenticate("admin", "admin1234")).toBe(true);
})

test('given username genericuser and password genericuser1234, when authentication is called, then result is ok', () => {
    expect(authenticate("genericuser", "genericuser1234")).toBe(true);
})

test('given username genericuser and password empty, when authentication is called, then result is ok', () => {
    expect(() => authenticate("genericuser", "")).toThrow(new Error("Authentication error!"));
})

test('given username genericuser and password genericuser1234, when authorization is called, then result is error is thrown', () => {
    expect(() => authorize("genericuser", "genericuser1234")).toThrow(new Error("User not authorized!"));
})