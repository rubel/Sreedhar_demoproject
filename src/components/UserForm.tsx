"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function UserForm({ saveNewUser, updateExistingUser, getUserById }: any) {
  const [username, setUserName] = useState(null);

  const id = useSearchParams().get("id");

  const formUpdated = (e) => {
    if (e.target.name === "fname") {
      setUserName({ ...username, fname: e.target.value });
    } else if (e.target.name === "lname") {
      setUserName({ ...username, lname: e.target.value });
    }
  };

  const getUserFromId = async () => {
    const theName = await getUserById(id);
    setUserName(theName);
  };

  useEffect(() => {
    if (id) {
      getUserFromId();
    }
  }, [id]);

  return (
    <form action={id ? updateExistingUser : saveNewUser} className="grid gap-2">
      <div className="mb-4">
        {username
          ? `Update ${username.fname} ${username.lname}`
          : "Add new User"}
      </div>
      <div>
        {id && (
          <input
            className="text-slate-800 rounded-sm text-gray-600 px-2"
            name="id"
            type="hidden"
            value={id}
            onChange={formUpdated}
          />
        )}
        <label className="inline-block pr-3">First Name</label>
        <input
          className="text-slate-800 rounded-sm text-gray-600 px-2"
          name="fname"
          type="text"
          value={username?.fname}
          onChange={formUpdated}
        />
      </div>

      <div>
        <label className="inline-block  pr-3">Last Name</label>
        <input
          className="text-slate-800 rounded-sm text-gray-600 px-2"
          name="lname"
          type="text"
          value={username?.lname}
          onChange={formUpdated}
        />
      </div>

      <div className="mt-4">
        <button
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover: bg-slate-700 focus-within:bg-slate-700 outline-none"
          type="submit"
        >
          {id ? "Update" : "Save"}
        </button>
      </div>
    </form>
  );
}

export default UserForm;
