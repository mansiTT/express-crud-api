module.exports = {
    logger : require('./constants/log.constant'),
    msg : require('./constants/msg.constant'),

    responseGenerator : (code, msg, data) => {
        let response = {};
        if (data) {
            response['code'] = code;
            response['message'] = msg;
            response['data'] = data;
        } else {
            response['code'] = code;
            response['message'] = msg;
        }
        return response;
    }
}