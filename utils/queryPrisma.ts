// utils/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient(
    //     {
    //     defaultOptions: {
    //         queries: {
    //             staleTime: 5 * 60 * 1000, // Dữ liệu được coi là "mới" trong 5 phút
    //             cacheTime: 30 * 60 * 1000, // Dữ liệu được giữ trong cache trong 30 phút
    //         },
    //     },
    // }
);