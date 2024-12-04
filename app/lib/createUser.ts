"use server";
import getCollection, { USER_CONNECTIONS } from "@/db";

export default async function createUser (
  name: string | undefined | null,
  email: string | undefined | null,
  image: string | undefined | null,
): Promise<{success: boolean; error: string}> {
  const userToInsert = {
    name: name,
    email: email,
    image: image
  };

  if (userToInsert.name === undefined || userToInsert.name === null || userToInsert.email === undefined || userToInsert.email === null) {
    return {success: false, error: "Missing name or email"}
  }

  const UsersCollection = await getCollection(USER_CONNECTIONS);

  const checkExisting = await UsersCollection.findOne({email: email});
  if (checkExisting) {
    return {success: false, error: "User already exists"};
  }
  
  const res = await UsersCollection.insertOne(userToInsert);

  if (res.acknowledged) {
    return {success: true, error: "Successfully created alias"};
  } else {
    return {success: false, error: "Failed to create alias"};
  }
}
