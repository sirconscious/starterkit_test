import { PricingTable } from '@clerk/nextjs'

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Choose your plan</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Start for free, upgrade when you grow.
        </p>
      </div>
      <PricingTable />
    </div>
  )
}
