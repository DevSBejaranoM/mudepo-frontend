import CustomTab from "@/app/components/CustomTab";
import MainSection from "@/app/components/MainSection";
import TeamContent from "@/app/components/TeamContent";

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
      {/* <MainSection image={"/images/header-background.jpg"} title={team.id} /> */}
      <CustomTab options={["Inicio", "Formación"]} />
      <section className="mx-auto my-10 p-4 lg:h-auto items-center justify-center">
        <TeamContent teamId={team.id}/>
      </section>
    </div>
  );
};
export default TeamPage;
