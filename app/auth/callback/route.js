import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  } else {
    return NextResponse.redirect(new URL('/link-expired', req.url));
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('clients')
    .select('email')
    .eq('email', user.email);
  if (data.length == 0) {
    console.log('🖕');
    return NextResponse.redirect(new URL('/create-account', req.url));
  } else {
    console.log('profile created')
    return NextResponse.redirect(new URL('/client/dashboard', req.url));
  }
}

// {
//   id: '5d3e4295-bcca-4fd6-95ed-3b80e72afbe9',
//   aud: 'authenticated',
//   role: 'authenticated',
//   email: 'jessicalyngallagher@me.com',
//   email_confirmed_at: '2024-05-14T16:14:47.443814Z',
//   phone: '',
//   confirmation_sent_at: '2024-05-14T16:14:31.295616Z',
//   confirmed_at: '2024-05-14T16:14:47.443814Z',
//   recovery_sent_at: '2024-05-14T19:17:52.799312Z',
//   last_sign_in_at: '2024-05-14T19:18:02.137964Z',
//   app_metadata: { provider: 'email', providers: [ 'email' ] },
//   user_metadata: {
//     email: 'jessicalyngallagher@me.com',
//     email_verified: false,
//     phone_verified: false,
//     sub: '5d3e4295-bcca-4fd6-95ed-3b80e72afbe9'
//   },
//   identities: [
//     {
//       identity_id: '4c94d5e3-9fae-4f58-bfba-76470665a531',
//       id: '5d3e4295-bcca-4fd6-95ed-3b80e72afbe9',
//       user_id: '5d3e4295-bcca-4fd6-95ed-3b80e72afbe9',
//       identity_data: [Object],
//       provider: 'email',
//       last_sign_in_at: '2024-05-14T16:14:31.274651Z',
//       created_at: '2024-05-14T16:14:31.27471Z',
//       updated_at: '2024-05-14T16:14:31.27471Z',
//       email: 'jessicalyngallagher@me.com'
//     }
//   ],
//   created_at: '2024-05-14T16:14:31.26301Z',
//   updated_at: '2024-05-14T19:18:02.139769Z',
//   is_anonymous: false
// }
