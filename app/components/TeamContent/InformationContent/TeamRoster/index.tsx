interface TeamRosterProps {
  players: any;
}

const TeamRoster = ({ players }: TeamRosterProps) => {
  //* Campo para partidos suspendidos cambiar por player.sancion
  type position =
    | "GOALKEEPER"
    | "DEFENDER"
    | "MIDFIELD"
    | "FORWARD"
    | "NO_POSITION_ASSIGNED";

  const postions = {
    GOALKEEPER: "Portero",
    DEFENDER: "Defensa",
    MIDFIELD: "Centrocampista",
    FORWARD: "Delantero",
    NO_POSITION_ASSIGNED: "Sin posición asignada",
  };

  const suspendedMatches = (sanctions: any) => {
    if (sanctions) {
      return sanctions.filter(
        (sanction: any) =>
          sanction?.suspendedMatches - sanction?.completedSuspendedMatches > 0
      );
    }

    return [];
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Plantilla</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b uppercase text-xs p-2">Dorsal</th>
            <th className="border-b uppercase text-xs p-2">Jugador</th>
            <th className="border-b uppercase text-xs p-2">Posición</th>
            <th className="border-b uppercase text-xs p-2 text-center">
              Tarjetas amarillas
            </th>
            <th className="border-b uppercase text-xs p-2 text-center">
              Tarjetas rojas
            </th>
            <th className="border-b uppercase text-xs p-2 text-center">
              Doble amonestación
            </th>
            <th className="border-b uppercase text-xs p-2 text-center">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {players.length > 0 ? (
            players?.map((player: any, index: number) => (
              <tr key={index}>
                <td className="border-b p-2 pl-7">
                  {player?.playerData?.dorsal}
                </td>
                <td className="border-b p-2">
                  {player?.name?.toUpperCase()} {player?.lastName?.toUpperCase()}
                </td>
                <td className="border-b p-2">
                  {postions[player?.playerData?.position as position]}
                </td>
                <td className="border-b p-2 text-center">
                  {player?.Sanction?.filter(
                    (sanction: any) => sanction?.type === "YELLOW_CARD"
                  ).length || "0"}
                </td>
                <td className="border-b p-2 text-center">
                  {player?.Sanction?.filter(
                    (sanction: any) => sanction?.type === "RED_CARD"
                  ).length || "0"}
                </td>
                <td className="border-b p-2 text-center">
                  {player?.Sanction?.filter(
                    (sanction: any) => sanction?.type === "DOUBLE_YELLOW_CARD"
                  ).length || "0"}
                </td>
                <td className="border-b p-2 text-center">
                  {suspendedMatches(player?.Sanction).length > 0
                    ? "Suspendido"
                    : "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={7}
                className="px-6 py-4 whitespace-nowrap text-sm text-center"
              >
                No hay plantilla
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeamRoster;
