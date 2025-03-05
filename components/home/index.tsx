"use client"

import { useState } from "react";
import ProductCard from "../ProductCard";
import SearchBar from "./SearchBar";
import HeaderTab from "./HeaderTab";
import { api } from '@/lib/trpc/client'
import { queryClient } from "@/utils/queryPrisma";

export default function Home() {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const { data: restaurants, isLoading } = api.restaurant.getRestaurants.useQuery();
    console.log("restaurants", restaurants)
    const categories: string[] = Array.from(new Set(restaurants?.map(restaurant => restaurant.category))) ?? [];

    const filteredRestaurants = restaurants?.filter(r => {
        const matchesCategory = selectedCategory ? r.category === selectedCategory : true;
        const matchesName = r.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesName;
    });

    const mutationFavorite = api.restaurant.addFavorite.useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(['restaurant.getRestaurants']);
        },
        onError: (error) => {
            console.error('Error edit favorites:', error);
        },
    });

    const handleToggleFavorite = (restaurantId: string, currentIsFavorite: boolean) => {
        mutationFavorite.mutate({
            id: restaurantId,
            isFavorite: !currentIsFavorite,
        });
    };

    if (isLoading) return <div className="w-full h-screen flex justify-center items-center text-primary">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <HeaderTab
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRestaurants?.map((restaurant) => (
                    <ProductCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        handleToggleFavorite={handleToggleFavorite}
                    />
                ))
                }
            </div>
        </div>
    );
}