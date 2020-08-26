const schemas = require('../joi-validator/schema');
const middleware = require('../joi-validator/middleware');

module.exports = (app) => {
    const roles = require('../controllers/rolemgmt.controller.js');

    // Create a new user/role
    app.post('/user/role', middleware(schemas.rolePost), roles.addRole);

    // Get USER role
    app.get('/user/role/:id', roles.getRole);

    // Update user details including role
    app.put('/user/role/:id', middleware(schemas.rolePost), roles.updateRole);

    // Delete user role
    app.delete('/user/role/:id', roles.deleteRole);

    // Get all user list
    app.get('/users', roles.allUsers);

}