import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

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

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong>Rammstein</strong>
              <button className="w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong>Rammstein</strong>
              <button className="w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong>Rammstein</strong>
              <button className="w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong>Rammstein</strong>
              <button className="w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong>Rammstein</strong>
              <button className="w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong>Rammstein</strong>
              <button className="w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-3xl mt-10">
            Made for Luiz Henrique
          </h2>

          <div className="grid grid-cols-5 gap-10 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={104}
                height={104}
                alt="capa do album do rammstein 2019"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 fixed bottom-0 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="w-full"
            src="/album.jpg"
            width={56}
            height={56}
            alt="capa do album do rammstein 2019"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Puppe</strong>
            <span className="text-sm text-zinc-500">Rammstein</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center pl-1 justify-center rounded-full bg-white text-black ml-auto">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">0:51</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full w-9 bg-green-500"></div>
            </div>
            <span className="text-xs text-zinc-500">4:33</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-1">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="h-1 rounded-full w-10 bg-green-600"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
