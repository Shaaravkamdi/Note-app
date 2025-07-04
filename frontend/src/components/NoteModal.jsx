import React, {useEffect, useState} from 'react'
import axios from "axios";


const NoteModal = ({closeModal, addNote, currentNote,eidtNote}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(currentNote) {
            setTitle(currentNote.title)
            setDescription(currentNote.description)
        }
    }, [currentNote])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentNote) {
            eidtNote(currentNote._id, title, description)
        }else {
            addNote(title, description);
        }
        
    };
      return (
    <div className='fixed insert-0 bg-grey-800 bg-opacity-75 flex justify-center items-center'>
        <div className='bg-white p-8 rounded'>
            <h2 className='text-xl font-bold mb-4'>{currentNote? "Edit Note": "add new Note"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                placeholder='Note Title'
                className='border p-2 w-full mb-4'/>
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Note decription'
                className='border p-2 w-full mb-4'/>

                <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded'>

                {currentNote ? "update Note": "Add note"}

                </button>

            </form>
            <button className='mt-4 text-red-500' onClick={closeModal}>Cancel</button>
            </div>
            </div>  

   
  )
}

export default NoteModal