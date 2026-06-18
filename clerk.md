# Clerk Next.js SDK

The Clerk Next.js SDK gives you access to prebuilt components, React hooks, and helpers to make user authentication easier. Refer to the [quickstart guide](https://clerk.com/docs/nextjs/getting-started/quickstart.md) to get started.

## `clerkMiddleware()`

The `clerkMiddleware()` helper integrates Clerk authentication into your Next.js application through middleware. It allows you to integrate authorization into both the client and server of your application. You can learn more [here](https://clerk.com/docs/reference/nextjs/clerk-middleware.md).

## Client-side helpers

Because the Next.js SDK is built on top of the Clerk React SDK, you can use the hooks that the React SDK provides. These hooks include access to the [Clerk](https://clerk.com/docs/reference/objects/clerk.md) object, [User object](https://clerk.com/docs/reference/objects/user.md), [Organization object](https://clerk.com/docs/reference/objects/organization.md), and a set of useful helper methods for signing in and signing up.

- [useUser()](https://clerk.com/docs/reference/hooks/use-user.md)
- [useClerk()](https://clerk.com/docs/reference/hooks/use-clerk.md)
- [useAuth()](https://clerk.com/docs/reference/hooks/use-auth.md)
- [useSignIn()](https://clerk.com/docs/reference/hooks/use-sign-in.md)
- [useSignUp()](https://clerk.com/docs/reference/hooks/use-sign-up.md)
- [useWaitlist()](https://clerk.com/docs/reference/hooks/use-waitlist.md)
- [useSession()](https://clerk.com/docs/reference/hooks/use-session.md)
- [useSessionList()](https://clerk.com/docs/reference/hooks/use-session-list.md)
- [useOrganization()](https://clerk.com/docs/reference/hooks/use-organization.md)
- [useOrganizationList()](https://clerk.com/docs/reference/hooks/use-organization-list.md)
- [useOrganizationCreationDefaults()](https://clerk.com/docs/reference/hooks/use-organization-creation-defaults.md)
- [useReverification()](https://clerk.com/docs/reference/hooks/use-reverification.md)
- [useCheckout()](https://clerk.com/docs/reference/hooks/use-checkout.md)
- [usePaymentElement()](https://clerk.com/docs/reference/hooks/use-payment-element.md)
- [usePaymentMethods()](https://clerk.com/docs/reference/hooks/use-payment-methods.md)
- [usePlans()](https://clerk.com/docs/reference/hooks/use-plans.md)
- [useSubscription()](https://clerk.com/docs/reference/hooks/use-subscription.md)
- [usePaymentAttempts()](https://clerk.com/docs/reference/hooks/use-payment-attempts.md)
- [useStatements()](https://clerk.com/docs/reference/hooks/use-statements.md)
- [useAPIKeys()](https://clerk.com/docs/reference/hooks/use-api-keys.md)

## Server-side helpers

### App router

Clerk provides first-class support for the [Next.js App Router](https://nextjs.org/docs/app). The following references show how to integrate Clerk features into apps using the latest App Router and React Server Components features.

- [auth()](https://clerk.com/docs/reference/nextjs/app-router/auth.md)
- [currentUser()](https://clerk.com/docs/reference/nextjs/app-router/current-user.md)
- [Route Handlers](https://clerk.com/docs/reference/nextjs/app-router/route-handlers.md)
- [Server Actions](https://clerk.com/docs/reference/nextjs/app-router/server-actions.md)

### Pages router

Clerk continues to provide drop-in support for the Next.js Pages Router. In addition to the main Clerk integration, the following references are available for apps using Pages Router.

- [getAuth()](https://clerk.com/docs/reference/nextjs/pages-router/get-auth.md)
- [buildClerkProps()](https://clerk.com/docs/reference/nextjs/pages-router/build-clerk-props.md)

### `Auth` object

Both `auth()` (App Router) and `getAuth()` (Pages Router) return an `Auth` object. This JavaScript object contains important information like the current user's session ID, user ID, and Organization ID. Learn more about the [`Auth` object](https://clerk.com/docs/reference/backend/types/auth-object.md){{ target: '_blank' }}.

## Objects

Learn about the [key Clerk objects](https://clerk.com/docs/reference/objects/overview.md) that power many of Clerk's SDKs.

## Types

See the [reference docs on types](https://clerk.com/docs/reference/types/overview.md) to get more information about the different types available for typing your application.

### `clerkClient`

[`clerkClient`](https://clerk.com/docs/reference/backend/overview.md) is a wrapper around the [Backend API](https://clerk.com/docs/reference/backend-api){{ target: '_blank' }} that makes it easier to interact with the API. For example, to retrieve a list of all users in your application, you can use the `users.getUserList()` method instead of manually making a fetch request to the `https://api.clerk.com/v1/users` endpoint.

To access a resource, you must first instantiate a `clerkClient` instance. See the [reference documentation](https://clerk.com/docs/reference/backend/overview.md) for more information.

## Demo repositories

For examples of Clerk's features, such as user and Organization management, integrated into a single application, see the Next.js demo repositories:

- [Clerk + Next.js App Router Demo](https://github.com/clerk/clerk-nextjs-demo-app-router)
- [Clerk + Next.js Pages Router Demo](https://github.com/clerk/clerk-nextjs-demo-pages-router)
# Component Reference

Clerk offers a comprehensive suite of components designed to seamlessly integrate authentication and multi-tenancy into your application. With Clerk components, you can easily customize the appearance of authentication components and pages, manage the entire authentication flow to suit your specific needs, and even build robust SaaS applications.

## Authentication components

- [<SignIn />](https://clerk.com/docs/nextjs/reference/components/authentication/sign-in.md)
- [<SignUp />](https://clerk.com/docs/nextjs/reference/components/authentication/sign-up.md)
- [<GoogleOneTap />](https://clerk.com/docs/nextjs/reference/components/authentication/google-one-tap.md)
- [<TaskChooseOrganization />](https://clerk.com/docs/nextjs/reference/components/authentication/task-choose-organization.md)
- [<TaskResetPassword />](https://clerk.com/docs/nextjs/reference/components/authentication/task-reset-password.md)
- [<TaskSetupMFA />](https://clerk.com/docs/nextjs/reference/components/authentication/task-setup-mfa.md)
- [<Waitlist />](https://clerk.com/docs/nextjs/reference/components/authentication/waitlist.md)

## User components

- [<UserAvatar />](https://clerk.com/docs/nextjs/reference/components/user/user-avatar.md)
- [<UserButton />](https://clerk.com/docs/nextjs/reference/components/user/user-button.md)
- [<UserProfile />](https://clerk.com/docs/nextjs/reference/components/user/user-profile.md)

## Organization components

- [<CreateOrganization />](https://clerk.com/docs/nextjs/reference/components/organization/create-organization.md)
- [<OrganizationProfile />](https://clerk.com/docs/nextjs/reference/components/organization/organization-profile.md)
- [<OrganizationSwitcher />](https://clerk.com/docs/nextjs/reference/components/organization/organization-switcher.md)
- [<OrganizationList />](https://clerk.com/docs/nextjs/reference/components/organization/organization-list.md)

## Billing components

- [<PricingTable />](https://clerk.com/docs/nextjs/reference/components/billing/pricing-table.md)
- [<CheckoutButton />](https://clerk.com/docs/nextjs/reference/components/billing/checkout-button.md)
- [<PlanDetailsButton />](https://clerk.com/docs/nextjs/reference/components/billing/plan-details-button.md)
- [<SubscriptionDetailsButton />](https://clerk.com/docs/nextjs/reference/components/billing/subscription-details-button.md)

## Control components

Control components manage authentication-related behaviors in your application. They handle tasks such as controlling content visibility based on user authentication status, managing loading states during authentication processes, and redirecting users to appropriate pages. Control components render at `<Loading />` and `<Loaded />` states for assertions on the [Clerk object](https://clerk.com/docs/nextjs/reference/objects/clerk.md). A common example is the [<Show />](https://clerk.com/docs/nextjs/reference/components/control/show.md) component, which allows you to conditionally render content based on authentication and authorization state.

- [<AuthenticateWithRedirectCallback />](https://clerk.com/docs/nextjs/reference/components/control/authenticate-with-redirect-callback.md)
- [<ClerkDegraded />](https://clerk.com/docs/nextjs/reference/components/control/clerk-degraded.md)
- [<ClerkFailed />](https://clerk.com/docs/nextjs/reference/components/control/clerk-failed.md)
- [<ClerkLoaded />](https://clerk.com/docs/nextjs/reference/components/control/clerk-loaded.md)
- [<ClerkLoading />](https://clerk.com/docs/nextjs/reference/components/control/clerk-loading.md)
- [<RedirectToCreateOrganization />](https://clerk.com/docs/nextjs/reference/components/control/redirect-to-create-organization.md)
- [<RedirectToOrganizationProfile />](https://clerk.com/docs/nextjs/reference/components/control/redirect-to-organization-profile.md)
- [<RedirectToSignIn />](https://clerk.com/docs/nextjs/reference/components/control/redirect-to-sign-in.md)
- [<RedirectToSignUp />](https://clerk.com/docs/nextjs/reference/components/control/redirect-to-sign-up.md)
- [<RedirectToTasks />](https://clerk.com/docs/nextjs/reference/components/control/redirect-to-tasks.md)
- [<RedirectToUserProfile />](https://clerk.com/docs/nextjs/reference/components/control/redirect-to-user-profile.md)
- [<Show />](https://clerk.com/docs/nextjs/reference/components/control/show.md)

## Unstyled components

- [<SignInButton />](https://clerk.com/docs/nextjs/reference/components/unstyled/sign-in-button.md)
- [<SignInWithMetamaskButton />](https://clerk.com/docs/nextjs/reference/components/unstyled/sign-in-with-metamask.md)
- [<SignUpButton />](https://clerk.com/docs/nextjs/reference/components/unstyled/sign-up-button.md)
- [<SignOutButton />](https://clerk.com/docs/nextjs/reference/components/unstyled/sign-out-button.md)

## Utilities components

- [<UNSAFE\_PortalProvider />](https://clerk.com/docs/nextjs/reference/components/utilities/portal-provider.md)

## Customization guides

- [Customize components with the appearance prop](https://clerk.com/docs/nextjs/guides/customizing-clerk/appearance-prop/overview.md)
- [Localize components with the `localization` prop (experimental)](https://clerk.com/docs/guides/customizing-clerk/localization.md)
- [Add pages to the <UserProfile /> component](https://clerk.com/docs/nextjs/guides/customizing-clerk/adding-items/user-profile.md)
- [Add pages to the <OrganizationProfile /> component](https://clerk.com/docs/nextjs/guides/customizing-clerk/adding-items/organization-profile.md)

### Secured by Clerk branding

> This feature requires a [paid plan](https://clerk.com/pricing){{ target: '_blank' }} for production use, but all features are free to use in development mode so that you can try out what works for you. See the [pricing](https://clerk.com/pricing){{ target: '_blank' }} page for more information.

By default, Clerk displays a **Secured by Clerk** badge on Clerk components. You can remove this branding by following these steps:

1. In the Clerk Dashboard, navigate to your application's [**Settings**](https://dashboard.clerk.com/~/settings).
2. Under **Branding**, toggle on the **Remove "Secured by Clerk" branding** option.

- [Join the Discord community](https://clerk.com/discord): Join the official Discord community to connect with other developers.
- [Need help?](https://clerk.com/contact/support): Contact the support team to get answers to your questions.
# API Reference

While accessing Clerk functionality via SDK is the easiest path, Clerk offers two different HTTP APIs for you to interact with directly.

[The Clerk Frontend API](https://clerk.com/docs/reference/frontend-api){{ target: '_blank' }} is meant to be accessed from a browser or native clients. This is what the Clerk SDK's utilize. Use this API if you are building client-side functionality.

[The Clerk Backend API](https://clerk.com/docs/reference/backend-api){{ target: '_blank' }} is meant to be accessed by backend servers. Use this API if you need to update data inside of Clerk's systems outside the concept of a session, like coordinating data sync operations with third-parties or fetching and updating configuration settings.

[The Clerk Platform API](https://clerk.com/docs/reference/platform-api){{ target: '_blank' }} is meant to be accessed by backend servers. Use this API if you need to manage resources of a workspace such as your Clerk applications, domains, and application transfers.

For more information about how Clerk works, see the [dedicated guide](https://clerk.com/docs/guides/how-clerk-works/overview.md).


# Clerk Billing

> Billing is currently in Beta and its APIs are experimental and may undergo breaking changes. To mitigate potential disruptions, we recommend [pinning](https://clerk.com/docs/pinning.md) your SDK and `clerk-js` package versions.

Clerk Billing allows your customers to purchase recurring Subscriptions to your application. Clerk Billing only uses Stripe for payment processing. You can see payment and customer information in Stripe. However, Clerk Billing is a separate product from Stripe Billing; Plans and Subscriptions made in Clerk are not synced to Stripe.

**For AI agents:** Enable Clerk Billing on the instance with `npx clerk@latest enable billing` (add `--for orgs` for B2B or `--for users` for B2C) instead of clicking through the Dashboard. Install [Clerk's skills](https://clerk.com/docs/guides/ai/skills.md) with `npx skills add clerk/skills` for correct CLI and SDK usage.

To get started, **choose one or combine both of the following** business models depending on your application's needs.

- [Billing for B2C SaaS](https://clerk.com/docs/guides/billing/for-b2c.md): To charge individual users
- [Billing for B2B SaaS](https://clerk.com/docs/guides/billing/for-b2b.md): To charge companies or organizations
- [Webhooks](https://clerk.com/docs/guides/development/webhooks/billing.md): To track Subscription lifecycles and monitor payment attempts
- [Build a simple checkout page](https://clerk.com/docs/guides/development/custom-flows/billing/checkout-new-payment-method.md): To charge users with a new payment method

## Frequently asked questions (FAQ)

### Can I use an existing Stripe account with Clerk Billing?

Yes, you can use an existing Stripe account, as long as it isn't controlled by another platform.

Disconnect accounts created under a platform's Stripe Connect setup from that platform before linking them to Clerk.

In general, if you created your Stripe account yourself via Stripe, it's independent; if it was created through another service, it may be platform-controlled.

### Can I see Subscriptions in my Stripe account?

No. Clerk Billing is a separate product from Stripe Billing; Plans and Subscriptions made in Clerk are not synced to Stripe.

### Can I use the same Stripe account for both dev and prod environments?

No. Stripe accounts created for development instances are sandbox/test accounts and cannot be used for production. For a production environment, you must create a separate Stripe account.

### How can I test Clerk Billing flows?

You can use test cards to test Clerk Billing flows like creating new Subscriptions, updating Subscriptions, or handling failure scenarios like expired cards or canceled Subscriptions. See [Stripe Testing](https://docs.stripe.com/testing){{ rel: 'noopener noreferrer' }} for a list of test cards and behaviors.

### Does Clerk Billing support refunds?

No, Clerk Billing does not support refunds at this time. You can still issue a refund through your Stripe account. Please note that refunds performed in Stripe will not be reflected in income/MRR calculations.

### Is Clerk a Merchant of Record (MoR) for transactions?

No, Clerk does not provide this service.

### Does Clerk Billing support non-USD currencies?

Clerk Billing currently supports only USD as the billing currency. While you can connect both US and non-US Stripe accounts, all payments will be processed in USD regardless of your Stripe account's local currency. For information about Stripe's supported countries and currencies, see [Stripe Global](https://stripe.com/global){{ rel: 'noopener noreferrer' }}. Support for additional currencies is on our roadmap.

### What third-party tools does Clerk Billing integrate with?

None directly, but since payments are processed through Stripe, you can use any third-party tool that integrates with Stripe for analytics, reporting, invoicing, or tax compliance.

### Can I offer custom pricing Plans to specific customers?

Yes, Clerk Billing supports custom pricing Plans. See [Custom Plans and prices](https://clerk.com/docs/guides/billing/custom-plans.md) for more information.

### Can I let users upgrade or downgrade their Plans mid-cycle?

Yes. Plan upgrades will take effect immediately, while downgrades take effect at the end of the current billing cycle.

### Does Clerk Billing support annual Subscriptions?

Yes, you can offer subscribers the option to pay annually, at a discounted monthly price. Annual pricing for your Plans can be configured from the [**Subscription plans**](https://dashboard.clerk.com/~/billing/plans) page in the Clerk Dashboard. Customers can choose between monthly or annual billing when subscribing.

### How does Clerk handle taxes and VAT for international billing?

Clerk Billing does not currently support tax or VAT, but these are planned for future releases.

### Which countries is Clerk Billing not supported in?

Clerk Billing is not supported in Brazil, India, Malaysia, Mexico, Singapore, and Thailand due to [payment processing restrictions](https://stripe.com/legal/restricted-businesses). Support may be added in the future. For all other regions, availability depends on Stripe - see [Stripe Global](https://stripe.com/global){{ rel: 'noopener noreferrer' }} for the full list.

### Does Clerk Billing support additional factor authentication like 3D Secure?

Clerk Billing does not currently support additional factor authentication. Users will receive an error indicating that the provided payment method requires additional confirmation, which Clerk Billing does not support, and will be asked to use a different payment method.
# Build a custom checkout flow with a new payment method

> This guide is for users who want to build a custom flow. To use a _prebuilt_ UI, use the [Account Portal pages](https://clerk.com/docs/guides/account-portal/overview.md) or [prebuilt components](https://clerk.com/docs/nextjs/reference/components/overview.md).

> Billing is currently in Beta and its APIs are experimental and may undergo breaking changes. To mitigate potential disruptions, we recommend [pinning](https://clerk.com/docs/pinning.md) your SDK and `clerk-js` package versions.

This guide will walk you through how to build a custom user interface for a checkout flow that allows users to **add a new payment method during checkout**.

For the custom flow that allows users to checkout **with an existing payment** method, see the [dedicated guide](https://clerk.com/docs/nextjs/guides/development/custom-flows/billing/checkout-existing-payment-method.md).

For the custom flow that allows users to add a new payment method to their account, **outside of a checkout flow**, see the [dedicated guide](https://clerk.com/docs/nextjs/guides/development/custom-flows/billing/add-new-payment-method.md).

1. ## Enable Billing Features

   To use Billing Features, you first need to ensure they are enabled for your application. Follow the [Billing documentation](https://clerk.com/docs/guides/billing/overview.md) to enable them and setup your Plans.
2. ## Build the custom flow

   To create a checkout session with a new payment card, you must:

   1. Set up the checkout provider with Plan details.
   2. Initialize the checkout session when the user is ready.
   3. Render the payment form for card collection.
   4. Confirm the payment with the collected payment method.
   5. Complete the checkout process and redirect the user.

   The following example:

   1. Uses the [useCheckout()](https://clerk.com/docs/nextjs/reference/hooks/use-checkout.md) hook to initiate and manage the checkout session.
   2. Uses the [usePaymentElement()](https://clerk.com/docs/nextjs/reference/hooks/use-payment-element.md) hook to control the payment element, which is rendered by `<PaymentElement />`.
   3. Assumes that you have already have a valid `planId`, which you can acquire in many ways.

   - [Copy from the Clerk Dashboard](https://dashboard.clerk.com/~/billing/plans).
   - Use the [Clerk Backend API](https://clerk.com/docs/reference/backend-api/tag/billing/GET/billing/plans){{ target: '_blank' }}.
   - Use the new [usePlans()](https://clerk.com/docs/nextjs/reference/hooks/use-plans.md) hook to get the Plan details.

   filename: app/checkout/page.tsx

   ```tsx
   'use client'
   import * as React from 'react'
   import { Show, ClerkLoaded } from '@clerk/nextjs'
   import {
     CheckoutProvider,
     useCheckout,
     PaymentElementProvider,
     PaymentElement,
     usePaymentElement,
   } from '@clerk/nextjs/experimental'
   import { useRouter } from 'next/navigation'

   export default function CheckoutPage() {
     return (
       // Update with your Plan ID and Plan Period
       <CheckoutProvider for="user" planId="cplan_38GgHD9MBVUMcnMrl1PvCptgQUw" planPeriod="month">
         <ClerkLoaded>
           <Show when="signed-in">
             <CustomCheckout />
           </Show>
         </ClerkLoaded>
       </CheckoutProvider>
     )
   }

   function CustomCheckout() {
     const { checkout } = useCheckout()

     if (checkout.status === 'needs_initialization') {
       return <CheckoutInitialization />
     }

     return (
       <div className="checkout-container">
         <CheckoutSummary />

         <PaymentElementProvider checkout={checkout}>
           <PaymentSection />
         </PaymentElementProvider>
       </div>
     )
   }

   function CheckoutInitialization() {
     const { checkout, fetchStatus } = useCheckout()

     if (checkout.status !== 'needs_initialization') {
       return null
     }

     return (
       <button onClick={() => checkout.start()} disabled={fetchStatus === 'fetching'}>
         {fetchStatus === 'fetching' ? 'Initializing...' : 'Start Checkout'}
       </button>
     )
   }

   function PaymentSection() {
     const { checkout, errors, fetchStatus } = useCheckout()

     const { isFormReady, submit } = usePaymentElement()
     const [isProcessing, setIsProcessing] = React.useState(false)

     const router = useRouter()

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
       if (!isFormReady || isProcessing || fetchStatus === 'fetching') return
       setIsProcessing(true)

       try {
         // Submit payment form to get payment method
         const { data, error } = await submit()
         // Usually a validation error from stripe that you can ignore
         if (error) {
           console.error(JSON.stringify(error, null, 2))
           return
         }
         // Confirm checkout with payment method
         const { error: confirmError } = await checkout.confirm(data)
         if (confirmError) {
           console.error(JSON.stringify(confirmError, null, 2))
           return
         }
         // Complete checkout and redirect
         await checkout.finalize({
           navigate: ({ decorateUrl }) => {
             const url = decorateUrl('/')
             if (url.startsWith('http')) {
               window.location.href = url
             } else {
               router.push(url)
             }
           },
         })
       } catch (error) {
         console.error('Payment failed:', error)
       } finally {
         setIsProcessing(false)
       }
     }

     const isSubmitting = isProcessing || fetchStatus === 'fetching'

     return (
       <form onSubmit={handleSubmit}>
         <PaymentElement fallback={<div>Loading payment element...</div>} />

         {errors.global && (
           <ul>
             {errors.global.map((error, index) => (
               <li key={index}>{error.longMessage || error.message}</li>
             ))}
           </ul>
         )}

         <button type="submit" disabled={!isFormReady || isSubmitting}>
           {isSubmitting ? 'Processing...' : 'Complete Purchase'}
         </button>
       </form>
     )
   }

   function CheckoutSummary() {
     const { checkout } = useCheckout()

     if (!checkout.plan) {
       return null
     }

     return (
       <div>
         <h2>Order Summary</h2>
         <span>{checkout.plan.name}</span>
         <span>
           {checkout.totals.totalDueNow.currencySymbol} {checkout.totals.totalDueNow.amountFormatted}
         </span>
       </div>
     )
   }
   ```
