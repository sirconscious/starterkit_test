import { PricingTable } from '@clerk/nextjs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckIcon } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Up to 10 posts", "Basic analytics", "Community support"],
  },
  {
    name: "Pro",
    price: "$9",
    description: "For professionals and teams",
    features: ["Unlimited posts", "Advanced analytics", "Priority support", "Custom domain"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$29",
    description: "For large organizations",
    features: ["Everything in Pro", "SSO & SAML", "Dedicated support", "Custom integrations"],
  },
]

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Choose your plan</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
          Start for free, upgrade when you grow. All plans include a 14-day trial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.popular ? "ring-2 ring-primary" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                {plan.popular && <Badge>Popular</Badge>}
              </div>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckIcon className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-8">
        <h2 className="text-xl font-semibold tracking-tight mb-6">Compare plans in detail</h2>
        <PricingTable />
      </div>
    </div>
  )
}
