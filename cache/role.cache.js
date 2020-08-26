/* Node in memory cache logic 
* */

const NodeCache = require("node-cache");
const cache = new NodeCache();
const func = require('../utils/util.common');


module.exports = {
    setCache: setCache,
    getCache: getCache,
    deleteCache: deleteCache,
    getAllData: getAllData
}

// Add records in cache using a unique attributes from user object as key.
function setCache(key, Obj) {
    func.logger.info(" Enter :: Cache setCache() ");
    let flag = cache.set(key, Obj);
    func.logger.info(" Exit :: Cache setCache() ");
    return flag;
}

// Get all records from cache
function getAllData() {
    func.logger.info(" Enter :: Cache getAllData() ");
    let keys = cache.keys();
    let allData = [];
    keys.forEach(function (key) {
        func.logger.info(" Cache getAllData() key = > ", key);
        allData.push(cache.get(key));
    });
    return allData;

}

// Get user data from cache using key
function getCache(key) {
    func.logger.info(" Enter :: Cache getCache() ");
    func.logger.info("Cache getCache() ",key);
    let value = cache.get(key);
    if (value == undefined) {
        return "";
    } else {
        func.logger.debug("Cache getCache() value = > ",value);
        func.logger.info(" Exit :: Cache getCache() ");
        return value;
    }

}

// Delete user records from cache
function deleteCache(key) {
    func.logger.info(" Enter :: Cache deleteCache() ");
    let count = cache.del(key);
    func.logger.info(" Exit:: Cache deleteCache() ");
    return count;
}