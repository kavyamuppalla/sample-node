exports.handler = (event, context, callback) => {
    var envName = process.env.env;
    console.log("Environment Namee ==== " + envName);
    callback(null, envName);
};
