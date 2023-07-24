import { prisma } from "@/db";
import { redirect } from "next/navigation";
import React from "react";
import UserForm from "../../components/UserForm";

async function saveNewUser(data: FormData) {
  "use server";
  const fname = data.get("fname")?.valueOf();
  const lname = data.get("lname")?.valueOf();

  const ob = {
    data: {
      fname,
      lname,
    },
  };
  await prisma.user.create(JSON.parse(JSON.stringify(ob)));

  redirect("/");
}

async function updateExistingUser(data: FormData) {
  "use server";
  const id = data.get("id")?.valueOf();
  const fname = data.get("fname")?.valueOf();
  const lname = data.get("lname")?.valueOf();

  const ob = {
    where: {
      id,
    },
    data: {
      fname,
      lname,
    },
  };
  await prisma.user.update(JSON.parse(JSON.stringify(ob)));

  redirect("/");
}

async function getUserById(id: string) {
  "use server";
  const ob = {
    where: {
      id,
    },
  };
  return prisma.user.findUnique(JSON.parse(JSON.stringify(ob)));
}

function NewPost() {
  return (
    <div>
      <UserForm
        updateExistingUser={updateExistingUser}
        saveNewUser={saveNewUser}
        getUserById={getUserById}
      />
    </div>
  );
}

export default NewPost;
