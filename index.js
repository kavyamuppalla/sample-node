exports.handler = (event, context, callback) => {
    var envName = process.env.env;
    console.log("Environment Name ==== " + envName);
    callback(null, envName);
};
