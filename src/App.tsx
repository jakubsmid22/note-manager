import { useEffect, useState } from "react";
import AddNoteForm from "./components/AddNoteForm";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import { CiDark, CiLight } from "react-icons/ci";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = `theme-${theme} bg-secondary`;
  }, [theme]);

  return (
    <>
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="text-tertiary absolute right-5 top-5 text-2xl"
      >
        {theme === "dark" ? <CiLight /> : <CiDark />}
      </button>
      <main
        className={`flex flex-col px-5 min-h-screen py-20 gap-12 items-center bg-primary max-w-5xl mx-auto text-tertiary`}
      >
        <h1 className="font-bold text-4xl uppercase font-mono">Notes App</h1>
        <AddNoteForm />
        <NoteList />
        <NoteEditor />
      </main>
    </>
  );
};

export default App;
