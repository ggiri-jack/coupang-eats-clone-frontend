import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import dotenv from 'dotenv'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import mongoClient from '@/lib/mongoClient'

dotenv.config()

export const authOptions: NextAuthOptions = {
  providers: [GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? '',
  })],
  adapter: MongoDBAdapter(mongoClient),
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET ?? 'secret',
  debug: true,
}

export default NextAuth(authOptions)