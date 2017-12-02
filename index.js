exports.handler = (event, context, callback) => {
    var envName = process.env.env;
    console.log("Environmentt ==== " + envName);
    callback(null, envName);
};
