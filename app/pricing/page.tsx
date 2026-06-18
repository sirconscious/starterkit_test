import { PricingTable } from '@clerk/nextjs'

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-medium text-center mb-10">Choose your plan</h1>
      <PricingTable />
    </div>
  )
}