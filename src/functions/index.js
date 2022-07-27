import { db } from "../firebase-config";
import { collection } from "firebase/firestore";

let usersCollectionRef = collection(db, "staff");
let taskCollectionRef = collection(db, "Tasks");

export { usersCollectionRef, taskCollectionRef };
