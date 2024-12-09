const MatchResult = ({ date, status, localGoals, visitingGoals }: any) => {

  return (
    <>
      {status !== "CREATED" &&
        (date < new Date().toISOString() ? (
          <>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
              {localGoals !== null && localGoals !== "-" ? localGoals : "0"}
            </td>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
              {visitingGoals !== null && visitingGoals !== "-"
                ? visitingGoals
                : "0"}
            </td>
          </>
        ) : (
          <>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
              -
            </td>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
              -
            </td>
          </>
        ))}
      {status === "CREATED" && (
        <>
          <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
            -
          </td>
          <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
            -
          </td>
        </>
      )}
    </>
  );
};

export default MatchResult;
