const Roles = require('../services/rolemgmt.service.js');
const func = require('../utils/util.common');

/**
 * Add user role
 * @param {req} HTTP request Object
 * @param {res} HTTP response Object
 * @return {res} HTTP response
 */
exports.addRole = async (req, res) => {
    func.logger.info(" Enter :: addRole() ");
    try {
        let data = await Roles.addRole(req.body);
        if (data) {
            func.logger.info(" Exit :: addRole() with success ");
            return res.status(201).send(func.responseGenerator(200, func.msg.SUCCESS));
        } else {
            func.logger.info(" Exit :: addRole() with failure ");
            return res.status(500).send(func.responseGenerator(500, func.msg.ROLE_ERROR_MSG));
        }
    } catch (e) {
        func.logger.error("Error occured while adding Role", e);
        return res.status(500).send(func.responseGenerator(500, func.msg.EXCEPTION_MSG, e));
    }
}

/**
 * Get user role
 * @param {req} HTTP request Object
 * @param {res} HTTP response Object
 * @return {res} HTTP response
 */
exports.getRole = async (req, res) => {
    func.logger.info(" Enter :: getRole() ");
    try {
        let data = await Roles.getRole(req.params.id);
        func.logger.debug(" getRole() for user  ", req.params.id)
        if (data) {
            func.logger.info(" Exit :: getRole() ");
            res.status(200).send(func.responseGenerator(200, func.msg.SUCCESS, data));
        } else {
            func.logger.info(" Exit :: getRole() ");
            res.status(200).send(func.responseGenerator(200, func.msg.NO_RECORD_FOUND));
        }
    } catch (e) {
        func.logger.error("Error occured while fetching Role", e);
        return res.status(500).send(func.responseGenerator(500, func.msg.EXCEPTION_MSG, e));
    }
}

/**
 * Update user role
 * @param {req} HTTP request Object
 * @param {res} HTTP response Object
 * @return {res} HTTP response
 */
exports.updateRole = async (req, res) => {
    func.logger.info(" Enter :: updateRole() ");
    try {
        let resp = await Roles.updateRole(req.body);
        if (resp) {
            func.logger.debug(" updateRole() for user  ", req.body.email);
            func.logger.info(" Exit :: updateRole() with success ");
            return res.status(200).send(func.responseGenerator(200, func.msg.UPDATE_SUCCESS));
        } else {
            func.logger.info(" Exit :: updateRole() with failure ");
            return res.status(500).send(func.responseGenerator(500, func.msg.ROLE_ERROR_MSG));
        }

    } catch (e) {
        func.logger.error("Error occured while updating Role", e);
        return res.status(500).send(func.responseGenerator(500, func.msg.EXCEPTION_MSG, e));
    }
}


/**
 * Delete user role
 * @param {req} HTTP request Object
 * @param {res} HTTP response Object
 * @return {res} HTTP response
 */
exports.deleteRole = async (req, res) => {
    func.logger.info(" Enter :: deleteRole() ");
    try {
        let deleteResp = await Roles.deleteRole(req.params.id);
        if (deleteResp && deleteResp > 0) {
            func.logger.debug(" deleteRole() for user  ", req.params.id);
            func.logger.info(" Exit :: deleteRole() with success ");
            return res.status(200).send(func.responseGenerator(200, func.msg.DELETE_SUCCESS));
        } else {
            func.logger.info(" Exit :: updateRole() with failure ");
            return res.status(200).send(func.responseGenerator(200, func.msg.NO_RECORD_FOUND));
        }

    } catch (e) {
        func.logger.error("Error occured while deleting Role", e);
        return res.status(500).send(func.responseGenerator(500, func.msg.EXCEPTION_MSG, e));

    }
}


/**
 * Get all user role
 * @param {req} HTTP request Object
 * @param {res} HTTP response Object
 * @return {res} HTTP response
 */
exports.allUsers = async (req, res) => {
    func.logger.info(" Enter :: allUsers() ");
    try {
        let resp = await Roles.getAllUsers();
        if (resp && resp.length > 0) {
            func.logger.info(" Exit :: allUsers() with success ");
            res.status(200).send(resp);
        } else {
            func.logger.info(" Exit :: allUsers() with no records");
            res.status(200);
        }
    } catch (e) {
        func.logger.info(" Exit :: allUsers() with error ");
        func.logger.error("Error occured while fetchng all users role", e);
        return res.status(500).send(func.responseGenerator(500, func.msg.EXCEPTION_MSG, e));
    }
}