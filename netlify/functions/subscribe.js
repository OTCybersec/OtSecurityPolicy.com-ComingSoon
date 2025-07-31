// Netlify Function: /netlify/functions/subscribe.js
// This function receives POST requests from your React app and forwards the email to your Google Apps Script endpoint.

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const { email, token } = JSON.parse(event.body);
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxSOI1y0y530Q4tgEesP4oTETjOKNXj0e4Lht5AhDn95gUdKN6gFMWgtRC3WIalRXLJ/exec';
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, token })
        });
        const text = await response.text();
        console.log('Google Script response:', text);

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
