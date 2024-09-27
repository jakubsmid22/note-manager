import { useAtom } from "jotai";
import notesAtom from "../atoms/notesAtom";
import Note from "./Note";
import calculateTime from "../calculateTime";

const NoteList = () => {
  const [notes] = useAtom(notesAtom);

  if (notes.length === 0) {
    return (
      <div className="text-2xl mt-12 font-bold">No notes to display. 😿</div>
    );
  }

  notes.forEach((note) => {
    note.createdAtString = calculateTime(note.createdAt);
  });

  notes.sort((a, b) => b.createdAt - a.createdAt);

  return (
    <section className="space-y-5 overflow-auto w-full">
      {notes.map((note) => {
        const { id } = note;
        return <Note key={id} id={id} />;
      })}
    </section>
  );
};

export default NoteList;
