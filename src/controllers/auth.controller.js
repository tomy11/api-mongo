const authService = require('../services/auth.service')

const singin = async (req, res) => {
    try {
        const result = authService.register(req.body);
        return result
    } catch (error) {
        console.log('error ', error);
    }
}

module.exports = { singin }