const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const passSchema = zod.string().min(6);
const userSchema = zod.string().email();

function signJwt(username, password) {
  const userCheck = userSchema.safeParse(username);
  const passCheck = passSchema.safeParse(password);

  if (!userCheck.success || !passCheck.success) {
    return null;
  }
  const token = jwt.sign({ username }, password);
  return token;
}

function verifyJwt(token) {
  try {
    const v = jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {
    return false;
  }
}

function decodeJwt(token) {
  if (jwt.decode(token, jwtPassword)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
