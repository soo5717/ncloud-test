const { User } = require('../models');

module.exports = {
    signUp: async (req, res) => { 
        try {
            const { email, pwd } = req.body;
            await User.create({
                email: email,
                pwd: pwd
            });
            return res.status(200).send('성공');
        } catch (error) {
            console.error(error);
            return res.status(500).send('실패');
        }
    }
}