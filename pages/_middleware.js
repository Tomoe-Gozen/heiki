import { NextResponse } from 'next/server'

export function middleware(req) {
  if (!process.env.NEXT_PUBLIC_IS_PRODUCTION) {
    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
      const auth = basicAuth.split(' ')[1]
      const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

      if (user === 'tomoe' && pwd === 'tomoegozennft2022') {
        return NextResponse.next()
      }
    }

    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"'
      }
    })
  } else {
    return NextResponse.next()
  }
}
