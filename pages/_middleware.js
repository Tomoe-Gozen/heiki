import { NextResponse } from 'next/server'

export function middleware(req) {
  if (
    !process.env.NEXT_PUBLIC_IS_PRODUCTION &&
    !req.headers.get('host').includes('localhost') &&
    !req.headers.get('host').includes('127.0.0.1')
  ) {
    if (req.query?.password === 'tomoegozennft2022') {
      return NextResponse.next()
    }

    return new Response('Auth required', {
      status: 401
    })
  }
  return NextResponse.next()
}
