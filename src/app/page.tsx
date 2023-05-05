import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-4">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          <nav className="space-y-5">
            <a
              className="flex items-center gap-2 text-xs font-bold text-zinc-200"
              href="#"
            >
              <HomeIcon />
              Home
            </a>
            <a
              className="flex items-center gap-2 text-xs font-bold text-zinc-200"
              href="#"
            >
              <Search />
              Search
            </a>
            <a
              className="flex items-center gap-2 text-xs font-bold text-zinc-200"
              href="#"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 2
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 3
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 4
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 5
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 6
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 7
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
            <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
            <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Night</h1>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
