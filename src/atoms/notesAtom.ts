import { atom } from "jotai";

interface Note {
  id: number;
  title: string;
  text: string;
  createdAt: number;
  createdAtString: string;
}

const notes = JSON.parse(localStorage.getItem("notes") || "[]") as Note[];

const notesAtom = atom<Note[]>(notes);

export default notesAtom;
