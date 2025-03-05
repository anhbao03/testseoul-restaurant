import { initTRPC } from '@trpc/server';
import superjson from 'superjson';


// Initialize tRPC
const t = initTRPC.create({
    transformer: superjson,
});

// Export tRPC router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;