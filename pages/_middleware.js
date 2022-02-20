import { NextRequest, NextResponse } from 'next/server'

const ips = ['176.150.154.1', '185.205.108.171', '51.154.162.73']

export function middleware(req) {
  const ip = req.ip

  if (ips.includes(ip)) {
    return NextResponse.next()
  }

  return new Response('IP not authorized', {
    status: 401
  })
}
