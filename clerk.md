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
