const Response = (
    req,
    res,
    status_code = 500,
    message = 'Internal server error',
    data = undefined
) => {
    return res.status(status_code).json({
        status: `${status_code}`[0] === '2' ? true : false,
        message,
        data
    });
};

module.exports = Response;
