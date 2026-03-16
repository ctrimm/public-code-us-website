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

function getClientIP(request: Request): string {
  return request.headers.get('x-forwarded-for') || request.headers.get('client-ip') || 'unknown';
}

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = (await request.json()) as PetitionData;

    // Validation
    if (!body.name?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!body.email?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!validateEmail(body.email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!body.state) {
      return new Response(
        JSON.stringify({ success: false, error: 'State is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
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
          { status: 409, headers: { 'Content-Type': 'application/json' } }
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
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
        }
      }
    );
  } catch (error) {
    console.error('[Petition API Error]', error);

    const errorMessage = error instanceof Error ? error.message : 'Server error';

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Server error. Please try again later.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

// Handle OPTIONS for CORS preflight
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
