import LeagueContent from "@/app/components/LeagueContent";

interface League {
  league: string;
  slug: string;
}

const fetchLeague = async (
  slug: string,
  league: string
): Promise<League | null> => {
  return { league: league, slug };
};

const LeaguePage = async ({
  params,
}: {
  params: { slug: string; league: string };
}) => {
  const league = await fetchLeague(params.slug, params.league);

  if (!league) {
    return <div className="text-center mt-10">Liga no encontrado</div>;
  }

  const removeAccents = (str: any) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  let str = decodeURIComponent(league.slug);
  const eventSlug = removeAccents(str);

  return (
    <div>
      <LeagueContent league={league.league} slug={eventSlug} />
    </div>
  );
};
export default LeaguePage;
