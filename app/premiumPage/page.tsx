import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function page() {
  const { has } = await auth()

  const hasPremium = has({ plan: 'primium' }) 

  if (!hasPremium) redirect('/pricing')

  return <div>you are now a premium user</div>
}