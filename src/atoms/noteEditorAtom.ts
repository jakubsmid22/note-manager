import { atom } from "jotai";

const modalIsOpenAtom = atom(false);

const openModalAtom = atom(null, (_, set) => set(modalIsOpenAtom, true));

const closeModalAtom = atom(null, (_, set) => set(modalIsOpenAtom, false));

export { modalIsOpenAtom, openModalAtom, closeModalAtom };
