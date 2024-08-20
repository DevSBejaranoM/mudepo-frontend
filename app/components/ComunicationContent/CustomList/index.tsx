interface Point {
  title: string;
  description: string;
  icon?: string;
}

interface CustomListProps {
  points: Point[];
  title?: string;
  center?: boolean;
}

const CustomList = ({ points, title, center = false }: CustomListProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:mx-16 items-center p-6 bg-white mb-10`}
    >
      <div className="p-4">
        {title && (
          <h2 className={`text-2xl font-bold text-gray-800 mb-8 ${center ? `text-center`: ``}`}>{title}</h2>
        )}

        <ul className="divide-y divide-gray-200">
          {points.map((point, index) =>
              <li key={index} className="py-4 flex items-center">
                {point.icon && (
                  <img
                    src={point.icon}
                    alt={point.title}
                    className="h-10 w-10 inline-block mr-5"
                  />
                )}
                <div>
                  <strong>{point.title}</strong>: {point.description}
                </div>
              </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CustomList;
