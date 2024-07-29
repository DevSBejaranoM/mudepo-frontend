const TeamInfo = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <img src="/images/team/tamaraceite.png" alt="Team Logo" className="w-16 h-16 mr-4" />
        <div>
          <h2 className="text-xl font-bold">Tamaraceite Veteranos</h2>
          <p className="text-gray-600">Fundado en 1902</p>
        </div>
      </div>
      <p><strong>Director Técnico:</strong> Carlo Ancelotti</p>
      <p><strong>Estadio:</strong> Santiago Bernabéu</p>
      <p><strong>Liga:</strong> La Liga</p>
      <p><strong>Ubicación:</strong> Madrid, España</p>
    </div>
  );
};

export default TeamInfo;
