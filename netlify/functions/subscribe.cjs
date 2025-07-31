// Netlify Function: /netlify/functions/subscribe.js
// This function receives POST requests from your React app and forwards the email to your Google Apps Script endpoint.

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

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

        // Step 4: POST to Google Apps Script
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxSOI1y0y530Q4tgEesP4oTETjOKNXj0e4Lht5AhDn95gUdKN6gFMWgtRC3WIalRXLJ/exec';
        console.log('Sending fetch to Google Script...');
        let response, text;
        try {
            response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token })
            });
            console.log('Fetch complete. Status:', response.status);
            text = await response.text();
            console.log('Google Script response:', text);
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
            body: JSON.stringify({ result: 'success', googleScriptResponse: text })
        };
    } catch (err) {
        console.error('Function error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error', details: err.message })
        };
    }
};
