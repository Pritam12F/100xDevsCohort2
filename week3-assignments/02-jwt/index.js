const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

function signJwt(username, password) {
  const userSchema = zod.string().email();
  const passSchema = zod.string().min(6);

  const userResponse = userSchema.safeParse(username);
  const passResponse = passSchema.safeParse(password);

  if (!userResponse.success || !passResponse.success) {
    return null;
  }
  const token = jwt.sign(
    {
      username,
    },
    password
  );
  return token;
}

function verifyJwt(token) {
  let ans = true;
  try {
    jwt.verify(token, jwtPassword);
  } catch (err) {
    ans = false;
  }
  return ans;
}

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  }
  return false;
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
