const {constant} = require("../constant");

const errorHandling = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({title : "Validation Error" , message : err.message ,stackTrace : err.stack});
            break;
        case constant.UNAUTHORIZED:
            res.json({title : "UNAUTHORIZED" , message : err.message , stackTrace : err.stack});
            break;
        case constant.FORBIDDEN:
            res.json({title : "FORBIDDEN" , message : err.message,stackTrace : err.stack});
            break;
        case constant.NOT_FFOUND:
            res.json({title : "NOT_FFOUND" , message : err.message , stackTrace : err.stack});
            break;
        case constant.SERVER_ERROR:
            res.json({title: "SERVER_ERROR" , message: err.message , stackTrace : err.stack});
        default:
            console.log("No error all ok !")
            break;
    }
}
module.exports = errorHandling