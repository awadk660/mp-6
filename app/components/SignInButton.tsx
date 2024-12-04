import { auth, signIn, signOut } from "@/auth";
import createUser from "../lib/createUser";

export default async function SignInButton() {
    const session = await auth();
    const user = session?.user;
    await createUser(user?.name, user?.email, user?.image);

    return (
        <div>
            {!session 
            
            ? 
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
                >
                <button type="submit">Signin with Google</button>
            </form> 
        
            : 

            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <button type="submit">Sign out</button>
            </form>
        
        }
        </div>
    );
}
