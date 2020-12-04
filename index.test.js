const login = require("./index")

test('given username admin and password admin1234, when login is called, then result is true', () => {
    expect(login("admin", "admin1234")).toBe(true);
})

test('given username admin and password 1234, when login is called, then result is error', () => {
    expect(() => login("admin", "1234")).toThrow(new Error("Authentication error!"));
})

test('given username genericuser and password genericuser1234, when login is called, then result is error', () => {
    expect(() => login("genericuser", "genericuser1234")).toThrow(new Error("User not authorized!"));
})