const Joi = require('joi');

// Define the validation schema for sign-up
const signupSchema = Joi.object({
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Export the validation middleware
module.exports = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
