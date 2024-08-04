interface Point {
    title: string;
    description: string;
  }

interface CustomListProps {
    points: Point[];
    title: string;
}

const CustomList = ({ points, title }: CustomListProps) => {
    return (
        <div className={`flex flex-col md:flex-row items-center p-6 bg-white mb-10`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">{title}</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-4">
            {points.map((point, index) => (
              <li key={index}><strong className="text-black">{point.title}</strong>: {point.description}</li>
            ))}
          </ul>
        </div>
      </div>
    );
    }

    export default CustomList;