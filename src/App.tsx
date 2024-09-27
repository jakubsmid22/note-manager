import AddNoteForm from "./components/AddNoteForm";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <main className="flex flex-col px-5 min-h-screen py-20 gap-12 items-center bg-[#606060] max-w-5xl mx-auto text-[#f5f5f5]">
      <h1 className="font-bold text-4xl uppercase font-mono">Notes App</h1>
      <AddNoteForm />
      <NoteList />
      <NoteEditor />
    </main>
  );
};

export default App;
