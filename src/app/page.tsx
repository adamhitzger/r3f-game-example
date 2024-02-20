import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main className="flex h-screen flex-col static">
      <Scene />
      <div className="grid grid-cols-3 absolute right-0 bottom-0 lg:invisible">
        <div className="flex items-center justify-items-center">
          <button
            id="left"
            className="bg-transparent m-3 p-2 border-black border-2 "
          >
            left
          </button>
        </div>
        <div className="flex flex-col">
          <button
            id="forward"
            className="bg-transparent m-3 p-2 border-black border-2 "
          >
            forward
          </button>
          <button
            id="jump"
            className="bg-transparent m-3 p-2 border-black border-2 "
          >
            jump
          </button>
          <button
            id="back"
            className="bg-transparent m-3 p-2 border-black border-2 "
          >
            back
          </button>
        </div>

        <div className="flex items-center ">
          <button
            id="right"
            className="bg-transparent m-3 p-2 border-black border-2 "
          >
            right
          </button>
        </div>
      </div>
    </main>
  );
}
