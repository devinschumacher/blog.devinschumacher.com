---
title: "How to add username/password authentication to a page in Nuxt"
datePublished: 2025-05-29T04:35:49.586Z
cuid: cmb8vsn2q000709l71r7bbsyy
slug: how-to-add-usernamepassword-authentication-to-a-page-in-nuxt
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1748492895064/c66418f7-9c17-42fc-a021-e0d7987ca464.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1748493344791/935a9143-192c-4f4f-b0d9-0650086b30b5.png
tags: nuxt, nuxtjs

---

%[https://youtu.be/E5fou1hbApE] 

nuxt-security provides middleware to easily add login/pass authentication to any route in Nuxt via [Basic Auth](https://nuxt-security.vercel.app/middleware/basic-auth).

Only users with correct credentials passed to the browser prompt will be able to see the application. Others will be automatically rejected.

This middleware is disabled by default. You can enable it globally like following:

1. Install [nuxt-security](https://nuxt-security.vercel.app/)
    
2. Enable basic auth in nuxt.config.ts
    

```ts
export default defineNuxtConfig({
  security: {
    basicAuth: {
      // options
    }
  }
})
```

Basic Auth accepts following configuration options:

```ts
type BasicAuth = {
  exclude?: string[];
  include?: string[]; // Paths to include in Basic Auth functionality.
  name: string; // User name that is required for user/pass flow
  pass: string; // User password that is required for user/pass flow
  enabled: boolean; // Boolean value to indicate whether a BasicAuth is enabled or not.
  message: string;
}
```

## Example

Let's say you want to password protect a page on your website [`site.com/clients-i-hate`](http://site.com/clients-i-hate)

```ts
export default defineNuxtConfig({
  security: {
    basicAuth: {
      include: '/clients-i-hate',
      name: 'youLoginUsername',
      pass: 'thePasswordYouChose',
      enabled: 'true',
    }
  }
})
```

And when a visitor tries to reach the page, they will get this:

![image](https://github.com/user-attachments/assets/b1442ee8-408f-475a-8558-f170824c70ec align="left")

## Using Environment Variables (Recommended)

For better security, you should use environment variables instead of hardcoding credentials:

```typescript
export default defineNuxtConfig({
  modules: ['nuxt-security'],
  
  security: {
    basicAuth: {
      enabled: process.env.BASIC_AUTH_ENABLED === 'true',
      name: process.env.BASIC_AUTH_USER,
      pass: process.env.BASIC_AUTH_PASS,
      message: 'Authentication required'
    }
  }
})
```

Then in your `.env` file:

```bash
BASIC_AUTH_ENABLED=true
BASIC_AUTH_USER=admin
BASIC_AUTH_PASS=your-secure-password
```

If you later need to exclude specific routes (like a public API endpoint), you can add the `exclude` array:

```typescript
security: {
  basicAuth: {
    enabled: true,
    name: process.env.BASIC_AUTH_USER,
    pass: process.env.BASIC_AUTH_PASS,
    exclude: ['/api/public/**'] // Only these routes will be public
  }
}
```