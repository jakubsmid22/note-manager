import { atom } from "jotai";

interface Note {
  id: number;
  title: string;
  text: string;
}

const noteToEditAtom = atom<Note | null>(null);

export default noteToEditAtom;
