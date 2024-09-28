import { useAtom } from "jotai";
import notesAtom from "../atoms/notesAtom";
import { modalIsOpenAtom, openModalAtom } from "../atoms/noteEditorAtom";
import noteToEditAtom from "../atoms/noteToEditAtom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface NoteProps {
  id: number;
}

const Note = ({ id }: NoteProps) => {
  const [notes, setNotes] = useAtom(notesAtom);

  const note = notes.find((note) => note.id === id);

  const [isOpen] = useAtom(modalIsOpenAtom);

  const [, openModal] = useAtom(openModalAtom);

  const [, setNoteToEdit] = useAtom(noteToEditAtom);

  if (!note) {
    return <div>Note not found</div>;
  }

  const { title, text, createdAtString } = note;

  const edit = () => {
    setNoteToEdit(note);
    console.log(isOpen);
    openModal();
  };

  const deleteNote = (id: number) => {
    confirm("Are you sure?") &&
      setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-secondary p-2 space-y-5 rounded-md w-full border border-[#171717]">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl w-11/12">{title}</h2>
        <p className="text-center whitespace-nowrap">{createdAtString}</p>
      </div>
      <p>{text}</p>
      <div className="flex justify-end gap-2">
        <button onClick={edit}>
          <FaEdit />
        </button>
        <button onClick={() => deleteNote(id)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Note;
