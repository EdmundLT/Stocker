const {googleProfile} = require('../../app')

function httpGetGoogleProfile(req,res) {
    res.json({googleProfile})
}

module.exports = {
    httpGetGoogleProfile
}
