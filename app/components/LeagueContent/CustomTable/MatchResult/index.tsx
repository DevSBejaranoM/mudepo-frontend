const MatchResult = ({ status, localGoals, visitingGoals }: any) => {

  return (
    <>
      {status !== "CREATED" && (
        <>
          <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
            {localGoals || 0}
          </td>
          <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
            {visitingGoals || 0}
          </td>
        </>
      )}
      {
        status === "CREATED" && (
          <>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
              -
            </td>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
              -
            </td>
          </>
        )
      }
    </>
  );
};

export default MatchResult;
