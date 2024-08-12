"use client";
import { useEffect, useState } from "react";
import ListEvents from "../ListEvents";
import { axiosAdapter } from "@/app/config/axios.adapter";
import MainSection from "../MainSection";

const EventsContent = (slug: any) => {
  const [events, setEvents] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const data = await axiosAdapter.fetchData("/events");
    //   const data = await axiosAdapter.fetchData(`/events/${slug}`);
      console.log("Events data:", data);
      setEvents(data[1]);
      setLoading(false);
    } catch (error) {
      console.error("Error retrieving events:", error);
    }
  };

  useEffect(() => {
    if (events === null) {
      fetchEvents();
    }
    setLoading(false);
  }, []);

  const categories = [
    {
      title: "FÚTBOL 11",
      subtitle: "Veteranos 36",
      image: "/images/categories/liga1.jpg",
      competitions: [
        {
          title: "FÚTBOl 11 - VETERANOS 36 - 2023",
          slug: "once_veteranos_36_2023",
        },
        {
          title: "FÚTBOl 11 - VETERANOS 36 - 2022",
          slug: "once_veteranos_36_2022",
        },
        {
          title: "FÚTBOl 11 - VETERANOS 36 - 2021",
          slug: "once_veteranos_36_2021",
        },
      ],
    },
    {
      title: "FÚTBOL 11",
      subtitle: "Veteranos 45",
      image: "/images/categories/liga2.jpg",
      competitions: [
        {
          title: "FÚTBOl 11 - VETERANOS 45 - 2023",
          slug: "once_veteranos_45_2023",
        },
      ],
    },
    {
      title: "FÚTBOL 11",
      subtitle: "Veteranos 27",
      image: "/images/categories/liga3.jpg",
      competitions: [],
    },
    {
      title: "FÚTBOL 7",
      subtitle: "18 años",
      image: "/images/categories/liga4.jpg",
      competitions: [
        {
          title: "FÚTBOl 7 - 18 AÑOS - 2023",
          slug: "siete_18_2023",
        },
        {
          title: "FÚTBOl 7 - 18 AÑOS - 2022",
          slug: "siete_18_2022",
        },
      ],
    },
    {
      title: "FÚTBOL 7",
      subtitle: "30 años",
      image: "/images/categories/liga5.jpg",
      competitions: [
        {
          title: "FÚTBOl 7 - 30 AÑOS - 2023",
          slug: "siete_30_2023",
        },
        {
          title: "FÚTBOl 7 - 30 AÑOS - 2022",
          slug: "siete_30_2022",
        },
        {
          title: "FÚTBOl 7 - 30 AÑOS - 2021",
          slug: "siete_30_2021",
        },
      ],
    },
  ];

  return (
    <>
      <MainSection
        title={events?.name ? events.name : "Eventos"}
        image={
          events?.tabOne?.portada?.url
            ? events?.tabOne?.portada?.url
            : "/images/header-background.jpg"
        }
      />
      <section className="mx-auto my-20 p-4 lg:h-auto flex items-center justify-center">
        <ListEvents events={categories} slug={slug}/>
        {/* <ListEvents events={events.tabTwo.leagues} /> */}
      </section>
    </>
  );
};

export default EventsContent;
