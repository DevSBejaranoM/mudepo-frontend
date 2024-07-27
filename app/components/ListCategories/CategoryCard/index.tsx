"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CategoryCardProps {
  category: any;
  index: number | string;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavigate = (slug: string) => {
    if (slug) {
      router.push(`/category/${slug}`);
    }
  };

  return (
    <div key={index} className="max-w-sm mx-auto relative shadow-md rounded-lg">
      <img
        src={category.image}
        alt="category-image"
        // className="w-full h-80 object-cover rounded-lg"
        className="w-full h-80 rounded-lg"
      />
      <div className="absolute z-10 bottom-0 left-0 right-0 h-32 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg text-center">
        <h1 className="text-2xl font-semibold">{category.title}</h1>
        <div className="border-t border-gray-300 my-1" />
        <p className="text-xl font-semibold">{category.subtitle}</p>
        <div className="flex">
          {category.competitions.length > 1 && (
              <div className="relative mt-4 w-full">
                <button
                  type="button"
                  className="relative w-full rounded-md py-2 pl-3 pr-10 text-white shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6  bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 px-4 text-center"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                  onClick={() => setOpen(true)}
                >
                  <span className="flex items-center justify-center">
                    <span className="ml-3 block truncate">
                      Competiciones
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <ul
                  className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
                    open ? "block" : "hidden"
                  }`} 
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-option-3"
                >
                  {category.competitions.map(
                    (competition: any, index: number) => (
                      <li
                      key={index}
                        className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                        id="listbox-option-0"
                        role="option"
                        onClick={(e) => handleNavigate(competition.slug)}
                      >
                        <div className="flex items-center">
                          {competition.title}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
          )}
          {category.competitions.length === 1 && (
            <button
              onClick={() => handleNavigate(category.competitions[0].slug)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md mt-4 w-full cursor-pointer"
            >
              {category.competitions[0].title}
            </button>
          )}
          {category.competitions.length === 0 && (
            <button
              onClick={() => handleNavigate(category.slug)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4 w-full cursor-default"
            >
              Sin competiciones
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
