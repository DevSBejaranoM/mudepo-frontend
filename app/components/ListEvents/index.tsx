import EventCard from "./EventCard";

interface ListEventsProps {
  events: any;
  slug: any;
  eventName: string;
}

const ListEvents = ({ events, slug, eventName }: ListEventsProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event: any, index: number) => (
        <EventCard event={event} key={index} index={index} eventName={eventName}/>
      ))}
    </div>
  );
};

export default ListEvents;
