import { NextResponse } from 'next/server'

export function middleware(req) {
  const basicAuth = (req.headers.get('authorization') || '').split(' ')[1] || ''

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
    return NextResponse.next()
    if (user === 'tomoe' && pwd === 'tomoegozennft2022') {
    }
  } else {
    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Restricted Area"'
      }
    })
  }
}
