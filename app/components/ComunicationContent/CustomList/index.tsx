interface Point {
  title: string;
  description: string;
}

interface CustomListProps {
  points: Point[];
  title?: string;
}

const CustomList = ({ points, title }: CustomListProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:mx-16 items-center p-6 bg-white mb-10`}
    >
      <div className="p-4">
        {title && (
          <h2 className="text-2xl font-bold text-gray-800 mb-8">{title}</h2>
        )}

        <ul className="divide-y divide-gray-200">
          {points.map((point, index) => (
            <li key={index} className="py-4">
              <strong>{point.title}</strong>: {point.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomList;
