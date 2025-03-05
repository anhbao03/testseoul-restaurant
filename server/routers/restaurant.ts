import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import db from '@/lib/db/db';

export const restaurantRouter = router({
    // Get all restaurants
    getRestaurants: publicProcedure
        .query(async () => {
            const restaurants = await db.restaurant.findMany();
            debugger
            return restaurants;
        }),

    // Add restaurant to favorites
    addFavorite: publicProcedure
        .input(z.object({
            id: z.string(),
            isFavorite: z.boolean()
        }))
        .mutation(async ({ input }) => {
            const { id, isFavorite } = input;
            //TODO call prisma user method
            const updatedRestaurant = await db.restaurant.update({
                where: { id },
                data: { isFavorite }
            });

            return updatedRestaurant;
        }),
});