import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getServerSession } from 'next-auth/next'
import { BuiltInProviderType } from 'next-auth/providers'
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from 'next-auth/react'

import { authOptions } from '../api/auth/[...nextauth]'

const SignInPage = ({
  providers,
}: {
  providers:
    | Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
    | never[]
}) => {
  console.log(providers)
  console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET)

  return (
    <div className="grid h-screen place-items-center bg-gradient-to-br from-cyan-100 to-blue-300">
      <div className="grid gap-8">
        <h4 className="text-center text-2xl text-gray-800">
          로그인이 필요합니다.
        </h4>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="w-full rounded-lg border border-gray-300  py-2 text-xl font-bold"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: '/', permanent: false } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}

export default SignInPage
