import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import getLikedSongs from "@/actions/getLikedSongs";

export const revalidate = 0;

export default async function Home() {

  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const songs = await getSongs()

  const {
    data: {
      session
    }
  } = await supabase.auth.getSession();

  const likedSongs = await getLikedSongs()

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Welcome back
          </h1>
          {session?.user.id && likedSongs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItem image="/images/liked.png" name="Liked Songs" href="liked" songs={likedSongs} />
            </div>
          ) : (
            <>
            </>
          )}

        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest Songs
          </h1>
        </div>
        <div>
          <PageContent songs={songs} />
        </div>
      </div>
    </div>
  )
}
