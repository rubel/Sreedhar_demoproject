"use client";
import { useRouter } from "next/navigation";
import React from "react";

type UserItemSchema = {
  id: string;
  fname: string;
  lname: string;
};

function UserItem({ id, fname, lname }: UserItemSchema) {
  const router = useRouter();
  const editPressed = () => {
    router.push(`/new?id=${id}`);
  };
  return (
    <tr className="bg-slate-600 border-b border-slate-400 hover:bg-slate-500">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
      >
        {fname}
      </th>
      <td className="px-6 py-4">{lname}</td>
      <td className="px-6 py-4">
        <span
          className="ml-5 cursor-pointer border border-rose-100 rounded-md px-4 py-2"
          onClick={() => {
            editPressed();
          }}
        >
          Edit
        </span>
      </td>
    </tr>
  );
}

export default UserItem;
