// netlify/functions/hello.cjs
exports.handler = async function () {
    console.log('Hello function log!');
    return { statusCode: 200, body: 'Hello world' };
};
