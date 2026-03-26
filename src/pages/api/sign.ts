import type { APIRoute } from 'astro';

interface PetitionData {
  name: string;
  email: string;
  state: string;
  zip?: string;
  message?: string;
  wantsUpdates: boolean;
}

interface SubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
  signatureId?: string;
  totalSignatures?: number;
  timestamp?: string;
}

// In-memory storage for demo (replace with DynamoDB later)
const signatures = new Map<string, { data: PetitionData; timestamp: number }>();

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
    );
  }

  try {
    const body = (await request.json()) as PetitionData;

    // Validation
    if (!body.name?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (!body.email?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (!validateEmail(body.email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (!body.state) {
      return new Response(
        JSON.stringify({ success: false, error: 'State is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    // Input length validation
    if (body.name.length > 100) {
      return new Response(
        JSON.stringify({ success: false, error: 'Field name exceeds maximum length' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (body.email.length > 254) {
      return new Response(
        JSON.stringify({ success: false, error: 'Field email exceeds maximum length' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (body.zip && body.zip.length > 10) {
      return new Response(
        JSON.stringify({ success: false, error: 'Field zip exceeds maximum length' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (body.message && body.message.length > 1000) {
      return new Response(
        JSON.stringify({ success: false, error: 'Field message exceeds maximum length' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    if (body.state.length > 50) {
      return new Response(
        JSON.stringify({ success: false, error: 'Field state exceeds maximum length' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
      );
    }

    // Check for duplicate (within 24 hours)
    const existingSignature = signatures.get(body.email);
    if (existingSignature) {
      const hoursSinceSign = (Date.now() - existingSignature.timestamp) / (1000 * 60 * 60);
      if (hoursSinceSign < 24) {
        return new Response(
          JSON.stringify({
            success: false,
            error: 'You have already signed this petition',
          }),
          { status: 409, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' } }
        );
      }
    }

    // Store signature (demo - in production, this goes to DynamoDB)
    const signatureId = `sig_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    signatures.set(body.email, {
      data: body,
      timestamp: Date.now(),
    });

    // Log for debugging
    console.log(`[Petition] New signature: ${body.email} from ${body.state}`);

    // Return success with fake total count (in production, query DynamoDB)
    const totalSignatures = signatures.size;

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for signing the petition!',
        signatureId,
        totalSignatures,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://publiccode.us',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
        }
      }
    );
  } catch (error) {
    console.error('[Petition API Error]', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Server error. Please try again later.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://publiccode.us' },
      }
    );
  }
};

// Handle OPTIONS for CORS preflight
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
