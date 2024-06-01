const { z } = require("zod");

const userValidation = z.object({
  username: z.string().min(1, { msg: "username is required" }).trim(),
  firstname: z.string().min(1, { msg: "first name is required" }).trim(),
  lastname: z.string().min(1).trim(),
  password:z.string().min(6 ,{msg:"atleast 6 character should be present"}).trim()
});

module.exports = userValidation;
