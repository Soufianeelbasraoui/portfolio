const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message } = await req.json()

    // Validate parameters
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing name, email, or message parameters.' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const dateTime = new Date().toLocaleString('en-US', { timeZone: 'UTC' }) + ' UTC'

    // Call Resend API to send email
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: 'soufianeelbasraoui0@gmail.com',
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
            <h2 style="color: #FF8C00; border-bottom: 2px solid #FF8C00; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
            <p><strong>Website:</strong> Portfolio</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #FF8C00; margin: 15px 0;">
              <strong>Message:</strong><br/>
              ${message.replace(/\n/g, '<br/>')}
            </p>
            <p style="font-size: 0.85em; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
              <strong>Date & Time:</strong> ${dateTime}
            </p>
          </div>
        `,
      }),
    })

    const responseText = await res.text()
    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch {
      responseData = { message: responseText }
    }

    if (!res.ok) {
      throw new Error(responseData.message || `Resend API returned status ${res.status}`)
    }

    return new Response(
      JSON.stringify({ success: true, data: responseData }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
