import EventCard from "./EventCard";

interface ListEventsProps {
  events: any;
  slug: any;
}

const ListEvents = ({ events, slug }: ListEventsProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event: any, index: number) => (
        <EventCard event={event} key={index} index={index} slug={slug}/>
      ))}
    </div>
  );
};

export default ListEvents;
