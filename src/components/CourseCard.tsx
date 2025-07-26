type Props = {
  title: string;
  description: string;
};

export default function CourseCard({ title, description }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-blue-100">
      <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
