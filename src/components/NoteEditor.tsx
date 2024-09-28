import { useAtom } from "jotai";
import { closeModalAtom, modalIsOpenAtom } from "../atoms/noteEditorAtom";
import Modal from "react-modal";
import noteToEditAtom from "../atoms/noteToEditAtom";
import { useEffect, useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import notesAtom from "../atoms/notesAtom";
import calculateTime from "../calculateTime";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "var(--primary)",
    borderRadius: "8px",
    padding: "20px",
    color: "var(--tertiary)",
    maxWidth: "800px",
    width: "90%",
    height: "fit-content",
  },
};

const NoteEditor = () => {
  const [note] = useAtom(noteToEditAtom);
  const [notes, setNotes] = useAtom(notesAtom);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isOpen] = useAtom(modalIsOpenAtom);
  const [, closeModal] = useAtom(closeModalAtom);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setText(note.text);
    }
  }, [note]);

  const save = () => {
    if (note) {
      const time = new Date().getTime();
      const modifiedNotes = notes.map((n) => {
        if (n.id !== note.id) return n;

        return {
          id: note.id,
          title,
          text,
          createdAt: time,
          createdAtString: calculateTime(time),
        };
      });

      setNotes(modifiedNotes);
    }
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal} closeTimeoutMS={500}>
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-tertiary"
      >
        <VscEyeClosed />
      </button>
      <h2 className="text-xl font-bold mb-4">Edit Note</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 rounded bg-secondary text-tertiary placeholder-primary"
        placeholder="Title"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full mb-4 p-2 rounded bg-secondary text-tertiary placeholder-primary h-96"
        placeholder="Note text"
      />
      <button
        onClick={save}
        className="w-full py-2 bg-secondary hover:bg-primary border border-transparent hover:border-secondary hover:text-secondary hover:font-bold transition-all duration-300  text-tertiary rounded"
      >
        Save Note
      </button>
    </Modal>
  );
};

export default NoteEditor;
