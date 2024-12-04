import { ObjectId } from "mongodb";

export type UserProps = {
    _id?: ObjectId;
    name: string;
    email: string;
    image: string;
}