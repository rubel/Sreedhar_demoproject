import Image from "next/image";
import UserItem from "../components/UserItem";
import { prisma } from "@/db";

async function getAllUsers() {
  "use server";
  return await prisma.user.findMany();
}

export default async function Home() {
  const names = await getAllUsers();
  console.log(names);
  return (
    <div>
      <div className="mb-3">
        {names.length === 0 ? "No entry yet" : "All Names here"}
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-slate-600 border-b border-slate-400 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {names?.map((user, index) => (
              <UserItem {...user} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
