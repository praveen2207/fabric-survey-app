const authenticateUtil = require('../utils/authenticate');
const apiResponse = require('../utils/apiResponse.js');

module.exports = async (req, res, next) => {
    const accessToken = req.headers['x-access-token'];

    if (!accessToken) {
        return apiResponse.unauthorized(res, 'Required access token');
    }

    try {
        const result = await authenticateUtil.certifyAccessToken(accessToken);
        req.body.id = result.id;
        req.body.name = result.name;
        req.body.departments = result.departments;
        return next();
    } catch (err) {
        return apiResponse.unauthorized(res, err.toString());
    }
};
