import MainSection from "@/app/components/MainSection";

interface Team {
  id: string;
}

const fetchTeam = async (id: string): Promise<Team | null> => {
  return { id };
};

const TeamPage = async ({ params }: { params: { id: string } }) => {
  const team = await fetchTeam(params.id);

  if (!team) {
    return <div className="text-center mt-10">Equipo no encontrado</div>;
  }

  return (
    <div>
      <MainSection image={"/images/header-background.jpg"} title={team.id} />
      <section className="mx-auto my-20 p-4 lg:h-auto items-center justify-center">
        TEAM PAGE
      </section>
    </div>
  );
};
export default TeamPage;
