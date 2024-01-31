const apiResponse = require("../helpers/apiResponse");

exports.welcome = [
    (req, res) => {
        try {
            return apiResponse.successResponseWithData(res, "Welcome", "How are you doing?");
        } catch (err) {
            return apiResponse.ErrorResponse(res, err);
        }
    }];

exports.location = [
    (req, res) => {
        try {
            const location = req.body.location;
            return apiResponse.successResponseWithData(res, "Your location", "ToDo");
        } catch (err) {
            return apiResponse.ErrorResponse(res, err);
        }
    }];