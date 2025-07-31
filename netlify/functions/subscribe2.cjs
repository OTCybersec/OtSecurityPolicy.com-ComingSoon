// Patch: subscribe2 function to force Netlify to deploy new function (2025-07-31)
// Netlify Function: /netlify/functions/subscribe2.js
// This function receives POST requests from your React app and forwards the email to your Google Apps Script endpoint.

const https = require('https');

function postToGoogleScript(data) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify(data);
        const url = new URL('https://script.google.com/macros/s/AKfycbxSOI1y0y530Q4tgEesP4oTETjOKNXj0e4Lht5AhDn95gUdKN6gFMWgtRC3WIalRXLJ/exec'); // Update this to your new deployment ID if it changes
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                console.log('Google Script HTTP status:', res.statusCode);
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    // Treat 302 as success (Google Apps Script redirect)
                    console.log('Google Script redirect location:', res.headers.location);
                    resolve({ status: res.statusCode, body });
                } else if (res.statusCode < 200 || res.statusCode >= 300) {
                    console.error('Non-200 response from Google Script:', res.statusCode, body);
                    reject(new Error('Google Script returned status ' + res.statusCode + ': ' + body));
                } else {
                    resolve({ status: res.statusCode, body });
                }
            });
        });
        req.on('error', (err) => {
            console.error('HTTPS request error:', err);
            reject(err);
        });
        req.setTimeout(25000, () => {
            console.error('HTTPS request timed out');
            req.destroy(new Error('Request timed out'));
            reject(new Error('Request timed out'));
        });
        req.write(postData);
        req.end();
    });
}

exports.handler = async function (event, context) {
    console.log('Function invoked. Event:', event);

    // Step 1: Check method
    if (event.httpMethod !== 'POST') {
        console.log('Method not allowed:', event.httpMethod);
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    // Step 2: Log and parse body
    try {
        console.log('Parsing body:', event.body);
        if (!event.body) {
            console.error('No body received');
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'No body received' })
            };
        }
        let email, token;
        try {
            const parsed = JSON.parse(event.body);
            email = parsed.email;
            token = parsed.token;
        } catch (parseErr) {
            console.error('JSON parse error:', parseErr);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid JSON', details: parseErr.message })
            };
        }
        console.log('Parsed email:', email, 'token:', token);

        // Step 3: Validate email and token
        if (!email || !token) {
            console.error('Missing email or token');
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing email or token' })
            };
        }

        // Step 4: POST to Google Apps Script using native https
        console.log('Sending POST to Google Script...');
        let result;
        try {
            result = await postToGoogleScript({ email, token });
            console.log('Google Script response:', result.body);
        } catch (fetchErr) {
            console.error('Fetch error:', fetchErr);
            return {
                statusCode: 502,
                body: JSON.stringify({ error: 'Failed to reach Google Script', details: fetchErr.message })
            };
        }

        // Step 5: Return success
        return {
            statusCode: 200,
            body: JSON.stringify({ result: 'success', googleScriptResponse: result.body })
        };
    } catch (err) {
        console.error('Function error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error', details: err.message })
        };
    }
};








