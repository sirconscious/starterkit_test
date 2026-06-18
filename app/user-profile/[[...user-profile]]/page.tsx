import { UserProfile } from '@clerk/nextjs'

export default function UserProfilePage() {
  return (
    <div className="flex justify-center py-16">
      <UserProfile />
    </div>
  )
}
