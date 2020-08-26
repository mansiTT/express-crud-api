/* Service Layer - Managing Business logic if any
*  Communicates with in memory cache
*/

const Cache = require('../cache/role.cache.js');
const func = require('../utils/util.common');


// AddRole - User roles perisitence in cache
exports.addRole = async (body) => {
    func.logger.info(" Enter :: service addRole() ");
    const cacheResponse = await Cache.setCache(body.email, body);
    func.logger.info(" Exit :: service addRole() ");
    return cacheResponse;

}

// GetRole - Get user role using unique user key  
exports.getRole = async (key) => {
    func.logger.info(" Enter :: service getRole() ");
    const response = await Cache.getCache(key);
    func.logger.info(" Exit :: service getRole() ");
    return response;
}

// DeleteRole - Delete user role using unique user key  
exports.deleteRole = async (key) => {
    func.logger.info(" Enter :: service deleteRole() ");
    const response = await Cache.deleteCache(key);
    func.logger.info(" Exit :: service deleteRole() ");
    return response;
}

// UpdateRole - Update user role using unique user key  
exports.updateRole = async (body) => {
    func.logger.info(" Enter :: service updateRole() ");
    func.logger.debug(" Service updateRole() for ",body.email);
    const response = await Cache.setCache(body.email, body);
    func.logger.info(" Exit :: service updateRole() ");
    return response;
}

// Get all the users from cache
exports.getAllUsers = async () => {
    func.logger.info(" Enter :: service getAllUsers() ");
    const response = await Cache.getAllData();
    func.logger.debug(" Service getAllUsers() ", response);
    func.logger.info(" Exit :: service getAllUsers() ");
    return response;
}