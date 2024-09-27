import { useEffect, useState } from "react";
import notesAtom from "../atoms/notesAtom";
import { useAtom } from "jotai";
import calculateTime from "../calculateTime";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useAtom(notesAtom);

  const [isOpen, setIsOpen] = useState(false);

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    const time = new Date().getTime();
    setNotes((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        title,
        text,
        createdAt: time,
        createdAtString: calculateTime(time),
      },
    ]);
    setTitle("");
    setText("");
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form
      onSubmit={(e) => add(e)}
      className={`flex w-full flex-col gap-5 border border-white p-5 rounded-md overflow-hidden transition-all duration-1000 ${
        !isOpen ? "h-[70px]" : "h-[500px]"
      } `}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl uppercase">Add Note</h2>
        <button type="button" onClick={toggle}>
          {isOpen ? <FiMinimize2 /> : <FiMaximize2 />}
        </button>
      </div>
      <input
        type="text"
        className="p-2 rounded bg-[#171717] text-white placeholder-gray-500"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Text"
        className="p-2 rounded bg-[#171717] text-white placeholder-gray-500 h-96"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input className="text-2xl cursor-pointer" value="ADD" type="submit" />
    </form>
  );
};

export default AddNoteForm;
