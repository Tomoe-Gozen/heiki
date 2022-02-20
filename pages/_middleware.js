import { NextRequest, NextResponse } from 'next/server'
import requestIp from 'request-ip'

const ips = ['176.150.154.1', '185.205.108.171', '51.154.162.73', undefined]

export function middleware(req) {
  const ip = req.headers.get('x-forwarded-for') || req.connection?.remoteAddress

  if (ips.includes(ip)) {
    return NextResponse.next()
  }

  return new Response('IP not authorized', {
    status: 401
  })
}
