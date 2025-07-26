// "use client"
// import { useEffect, useState } from "react";
// import axios from "axios";

// type Student = {
//   childName: string;
//   age: number;
//   course: string;
//   parentName: string;
//   phone: string;
//   email: string;
// };

// export default function AdminDashboard() {
//   const [students, setStudents] = useState<Student[]>([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const token = localStorage.getItem("adminToken");
//         const res = await axios.get("http://localhost:5000/api/admin/registrations", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setStudents(res.data);
//       } catch (error) {
//         console.error("Failed to fetch students", error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-6">
//       <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Registered Students</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {students.map((student, index) => (
//           <div key={index} className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-2">
//               {student.childName}, Age {student.age}
//             </h2>
//             <p className="text-gray-600">Course: {student.course}</p>
//             <p className="text-gray-600">Parent: {student.parentName}</p>
//             <p className="text-gray-600">Phone: {student.phone}</p>
//             <p className="text-gray-600">Email: {student.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface Student {
  childName: string;
  age: number;
  course: string;
  parentName: string;
  phone: string;
  email: string;
}

export default function AdminDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) return router.push("/admin/login");

        const res = await axios.get("https://bootcampapi-1-ir2j.onrender.com/api/admin/registrations", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setStudents(res.data);
      } catch (error) {
        console.error("Failed to fetch students", error);
      }
    };

    fetchStudents();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-6">
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700">me<span className="text-black">Hub</span> Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registered Students</h2>
        {students.length === 0 ? (
          <p className="text-gray-600">No students have registered yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-blue-700 mb-1">
                  {student.childName}, <span className="text-sm text-gray-600">Age {student.age}</span>
                </h3>
                <p className="text-gray-700 text-sm">📘 Course: {student.course}</p>
                <p className="text-gray-700 text-sm">👤 Parent: {student.parentName}</p>
                <p className="text-gray-700 text-sm">📞 Phone: {student.phone}</p>
                <p className="text-gray-700 text-sm">📧 Email: {student.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
