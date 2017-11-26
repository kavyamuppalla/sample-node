exports.handler = (event, context, callback) => {
    var envName = process.env.env;
    console.log("Environment ==== " + envName);
    callback(null, envName);
};