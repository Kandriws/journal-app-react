import { collection, deleteDoc, getDoc, getDocs } from "firebase/firestore/lite";
import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from "../../../src/store/journal";
import { FirebaseDB } from "../../../src/firebase/config";
import { getEnvironments } from "../../../src/helpers";

describe('Pruebas en Journal Thunks', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('startNewNote debe de crear una nueva nota', async () => {
        const uid = 'TESTING';
        getState.mockReturnValue({
            auth: {
                uid
            }
        });

        await startNewNote()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            title: '',
            body: '',
            date: expect.any(Number),
            imageUrls: [],
            id: expect.any(String)
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            title: '',
            body: '',
            date: expect.any(Number),
            imageUrls: [],
            id: expect.any(String)
        }));

        //Borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];

        docs.forEach(doc => {
            deletePromises.push(deleteDoc(doc.ref));
        });
        await Promise.all(deletePromises);
    });
})