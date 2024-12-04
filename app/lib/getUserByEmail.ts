"use server";
import getCollection, { USER_CONNECTIONS } from "@/db";
import { UserProps } from "@/types";

export default async function getUserByEmail(email: string): Promise<UserProps | null> {
  const usersCollection = await getCollection(USER_CONNECTIONS);
  const userToFind = await usersCollection.findOne({ email: email });

  return userToFind as UserProps | null;
}
