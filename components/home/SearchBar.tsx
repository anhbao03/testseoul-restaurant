import React from 'react'
import Image from 'next/image';

type Props = {
    searchTerm: string
    setSearchTerm: (value: string) => void
}

const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
    return (
        <div className="w-full px-2">
            <div className="flex items-center max-w-screen-lg mx-auto rounded-lg drop-shadow-md bg-gray-100 border-gray-300 p-2">
                <Image
                    loading="lazy"
                    src={'images/search.svg'}
                    alt={'Restaurant'}
                    width={15}
                    height={15}
                    className="size-6 mr-2"
                />
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="맞춤 이름을 검색해보세요"
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = '맞춤 이름을 검색해보세요'}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none rounded-md relative"
                />
            </div>
        </div>
    );
}

export default SearchBar
