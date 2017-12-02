exports.handler = (event, context, callback) => {
    var envName = process.env.env;
    console.log("Environments ==== " + envName);
    callback(null, envName);
};
