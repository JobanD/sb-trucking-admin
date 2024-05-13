import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default function SignOut() {
  const logout = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  };

  return (
    <form>
      <button
        className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-lg text-bold shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32"
        formAction={logout}
      >
        <span className="relative z-10">Log Out</span>
      </button>
    </form>
  );
}
