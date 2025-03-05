import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '@/server';
import superjson from 'superjson';

export const trpc = createTRPCProxyClient<AppRouter>({
    transformer: superjson,
    links: [
        httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/trpc`,
        }),
    ],
});