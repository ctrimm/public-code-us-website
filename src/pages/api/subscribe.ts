import type { APIRoute } from 'astro';

interface SubscribeData {
  email: string;
  name?: string;
  source?: string;
}

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
    );
  }

  try {
    const body = (await request.json()) as SubscribeData;

    // Validate
    if (!body.email?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    // Input length validation
    if (body.email.length > 254) {
      return new Response(
        JSON.stringify({ success: false, error: 'Field email exceeds maximum length' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (body.name && body.name.length > 100) {
      return new Response(
        JSON.stringify({ success: false, error: 'Field name exceeds maximum length' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (body.source && body.source.length > 50) {
      return new Response(
        JSON.stringify({ success: false, error: 'Field source exceeds maximum length' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY not configured. Demo mode.');
      // Demo mode - just return success without actually subscribing
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Successfully subscribed to updates!'
        }),
        { status: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    // Add contact to Resend
    const contactResponse = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: body.email,
        first_name: body.name?.split(' ')[0] || '',
        last_name: body.name?.split(' ').slice(1).join(' ') || '',
        unsubscribed: false,
        custom_attributes: {
          source: body.source || 'website',
          subscribed_at: new Date().toISOString()
        }
      })
    });

    if (!contactResponse.ok && contactResponse.status !== 409) {
      const errorText = await contactResponse.text();
      console.error('Resend error:', errorText);
      throw new Error('Failed to subscribe');
    }

    // Send welcome email
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Public Code US <hello@publiccode.us>',
          to: body.email,
          subject: 'Welcome to Public Code US!',
          html: `
            <h1>Welcome to the Movement!</h1>
            <p>Thank you for subscribing to Public Code US.</p>
            <p>We'll keep you updated on:</p>
            <ul>
              <li>Ballot initiative progress in your state</li>
              <li>How to get involved</li>
              <li>Campaign milestones and victories</li>
              <li>Organizing tips and resources</li>
            </ul>
            <p><a href="https://publiccode.us">Visit our website</a></p>
            <p>Together, we'll demand publicly funded software be publicly owned.</p>
            <p>— The Public Code US Team</p>
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px;">You received this email because you subscribed at publiccode.us. <a href="https://publiccode.us/unsubscribe">Unsubscribe</a></p>
          `
        })
      });
    } catch (emailError) {
      console.error('Welcome email error:', emailError);
      // Don't fail if welcome email doesn't send
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Successfully subscribed to updates!'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to subscribe. Please try again.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
    );
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://publiccode.us',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
