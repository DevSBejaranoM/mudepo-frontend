"use client";
import { useRouter } from "next/navigation";

interface EventCardProps {
  event: any;
  index: number | string;
  slug: any;
}

const EventCard = ({ event, index, slug }: EventCardProps) => {
  const router = useRouter();

  console.log("slug", slug.slug);
  console.log("EventCard", event);

  const handleNavigate = (id: string) => {
    if (id) {
      router.push(`/evento/${slug.slug}/${id}`);
    }
  };

  const openListAndClose = (id: string) => {
    const list = document.getElementById(id);
    const lists = document.querySelectorAll("[role='listbox']");
    lists.forEach((list) => {
      if (list.id !== id) {
        list.classList.replace("block", "hidden");
      }
    });
    if (list && list.classList.contains("hidden")) {
      list.classList.replace("hidden", "block");
    } else if (list && list.classList.contains("block")) {
      list.classList.replace("block", "hidden");
    }
  };

  return (
    <div key={index} className="max-w-sm mx-auto relative shadow-md rounded-lg">
      <img
        src={
          event?.tabOne?.poster?.url
            ? event?.tabOne?.poster?.url
            : "/images/placeholder-liga.png"
        }
        alt="category-image"
        className="w-full h-80 rounded-lg min-w-80 md:min-w-96"
        // className="w-full h-60 rounded-t-lg"
      />
      {/* <div className="z-10 bottom-0 left-0 right-0 h-28 bg-black text-white p-4 rounded-b-lg text-center"> */}
      <div className="absolute z-10 bottom-0 left-0 right-0 h-28 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg text-center">
        <h1 className="text-2xl font-semibold">
          FÚTBOL {event?.tabOne?.formato}
        </h1>
        <div className="border-t border-gray-300 my-1" />
        <p className="text-xl font-semibold">{event?.name}</p>
        <div className="flex">
          {/* {event.competitions.length > 1 && (
            <div className="relative mt-2 w-full">
              <button
                type="button"
                className="relative w-full rounded-md py-2 pl-3 pr-10 text-white shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6  bg-primary hover-bg-primary-dark border-primary hover-border-primary-dark px-4 text-center"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={() => openListAndClose(`listbox-option-${index}`)}
              >
                <span className="flex items-center justify-center">
                  <span className="ml-3 block truncate">LIGAS</span>
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
                className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hidden`}
                role="listbox"
                id={`listbox-option-${index}`}
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                {event.competitions.map(
                  (competition: any, index: number) => (
                    <li
                      key={index}
                      className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                      id="listbox-option-0"
                      role="option"
                      onClick={(e) => handleNavigate(event.id)}
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
          {event.competitions.length === 1 && (
            <button
              onClick={() => handleNavigate(event.id)}
              className="bg-primary hover-bg-primary-dark text-white px-4 py-2 rounded-md mt-2 w-full cursor-pointer"
            >
              {event.competitions[0].title}
            </button>
          )}
          {event.competitions.length === 0 && (
            <button
              onClick={() => handleNavigate(event.id)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2 w-full cursor-default"
            >
              SIN LIGAS
            </button>
          )} */}
          {event?.name && (
            <button
              onClick={() => handleNavigate(event.id)}
              className="bg-primary hover-bg-primary-dark text-white px-4 py-2 rounded-md mt-2 w-full cursor-pointer"
            >
              {event?.name}
            </button>
          )}
          {!event.name && (
            <button
              onClick={() => handleNavigate(event.id)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2 w-full cursor-default"
            >
              SIN LIGAS
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
