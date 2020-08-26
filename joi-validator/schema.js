// schemas.js 
const Joi = require('joi')
const schemas = {
    rolePost: Joi.object().keys({
        id : Joi.number().optional(),
        firstname: Joi.string().required(),
        lastname: Joi.string().optional(),
        email: Joi.string().required(),
        role: Joi.string().required()
    })
    // define all the other schemas below 
};
module.exports = schemas;
