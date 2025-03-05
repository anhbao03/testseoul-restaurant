import { textByStoreCategory } from '@/constants/categories';
import React from 'react'

type Props = {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (value: string) => void
}

const HeaderTab = ({ categories, selectedCategory, setSelectedCategory }: Props) => {

  return (
    <nav className="w-full bg-white text-textPrimary py-4">
      <div className="w-full overflow-x-auto flex justify-between items-center gap-x-4">
        {categories.map((item, index) => (
          <button
            key={index}
            className={`text-sm font-medium hover:underline focus:outline-none ${item === selectedCategory ? 'text-orange-500' : ''}`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default HeaderTab
