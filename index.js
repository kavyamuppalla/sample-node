exports.handler = (event, context, callback) => {
    var envName = process.env.env;
    console.log("Environments Namee ==== " + envName);
    callback(null, envName);
};
