// components/ProductCard.tsx
import { Restaurant } from "@/constants/restaurants";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
    restaurant: Restaurant;
    handleToggleFavorite: (restaurantId: string, currentIsFavorite: boolean) => void
}

export default function ProductCard({
    restaurant,
    handleToggleFavorite
}: ProductCardProps) {

    const [isFavorite, setisFavorite] = useState(false);
    // handleToggleFavorite(restaurant?.id, restaurant?.isFavorite)
    return (
        <div className="rounded-xl hover:shadow-lg transition-shadow relative">
            <button
                onClick={() => setisFavorite(!isFavorite)}
                className={`absolute top-2 right-2 text-xl bg-[#ffffff40] backdrop-blur-xl p-1 rounded-full 
                    ${restaurant?.isFavorite ? "text-red-500" : "text-gray-300"}`}
            >
                {isFavorite ? "❤️" : "🤍"}
            </button>
            <Image
                loading="lazy"
                src={restaurant?.images[0]}
                alt={restaurant.category}
                width={200}
                height={150}
                className="rounded-lg w-full h-auto max-sm:h-[200px]"
            />
            <p className="text-[#FF692E] mt-2 flex flex-row justify-start items-center text-[12px]">
                <Image
                    loading="lazy"
                    src={`/images/${restaurant?.featured?.icon}.png`}
                    alt={restaurant.category}
                    width={12}
                    height={12}
                    className="mr-1"
                />
                {restaurant?.featured?.text}
            </p>

            <h2 className="w-full flex justify-between items-center mt-2 ">
                <span className="w-[90%] text-xl font-bold truncate">
                    {restaurant.name}
                </span>
                <div className=" w-[10%] flex justify-end items-center text-[12px]">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{restaurant.rating}</span>
                    <span>({restaurant?.rating_count})</span>
                </div>
            </h2>
            <p className="text-gray-600">{restaurant.desc}</p>

        </div>
    );
}