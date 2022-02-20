import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  const basicAuth = req.ip()

  if (basicAuth) {
    return NextResponse.next()
  }

  return new Response('IP not authorized', {
    status: 401
  })
}
