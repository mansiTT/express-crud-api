const Joi = require('joi'); 
const func = require('../utils/util.common');

const middleware = (schema, property) => { 
  return (req, res, next) => { 
  const { error } = Joi.validate(req.body, schema); 
  const valid = error == null; 

  if (valid) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
    func.logger.info("Bad request Error message ",message)
    res.status(400).json(func.responseGenerator(400,message)) } 
  } 
} 
module.exports = middleware;