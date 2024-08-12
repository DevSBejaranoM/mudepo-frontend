import CustomTable from "../CustomTable";

const Teams = () => {
  const dataTeams = [
    {
      id: 1,
      position: 1,
      logo: "/images/team/tamaraceite.png",
      name: "Tamaraceite Veteranos",
      points: 79,
      played: 28,
      won: 26,
      drawn: 1,
      lost: 1,
      goalsFor: 105,
      goalsAgainst: 34,
      modifier: 0,
    },
    {
        id: 2,
        position: 2,
        logo: "/images/team/veterano-tejeda.jpg",
        name: "Veteranos Tejeda C.F.",
        points: 70,
        played: 28,
        won: 23,
        drawn: 1,
        lost: 4,
        goalsFor: 102,
        goalsAgainst: 31,
        modifier: 0,
      },
      {
        id: 3,
        position: 3,
        logo: "/images/team/veterano-led-bee.jpg",
        name: "Veterano Led Bee Happy",
        points: 62,
        played: 28,
        won: 20,
        drawn: 2,
        lost: 6,
        goalsFor: 110,
        goalsAgainst: 50,
        modifier: 0,
      }
  ];
  return (
    <div className="mt-10">
      <CustomTable data={dataTeams} type="teams"/>
    </div>
  );
};
export default Teams;
