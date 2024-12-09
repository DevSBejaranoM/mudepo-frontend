import TeamContent from "@/app/components/TeamContent";

interface Team {
  teamId: string;
}

const fetchTeam = async (teamId: string): Promise<Team | null> => {
  return { teamId: teamId };
};

const TeamPage = async ({ params }: { params: { teamId: string } }) => {
  const team = await fetchTeam(params.teamId);

  if (!team) {
    return <div className="text-center mt-10">Equipo no encontrado</div>;
  }

  return (
    <div>
      <TeamContent teamId={team.teamId} />
    </div>
  );
};
export default TeamPage;
