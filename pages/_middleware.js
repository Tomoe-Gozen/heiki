import { NextResponse } from 'next/server'

export function middleware(req) {
  if (!process.env.NEXT_PUBLIC_IS_PRODUCTION) {
    return NextResponse.next()
  }
  return NextResponse.next()
}
