import {
  useSession, signIn, signOut
} from 'next-auth/client'

export default function Component() {
  // return <h1> Home Page </h1>
  const [ session, loading ] = useSession()

  if (loading) {
    return null
  }

  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}