// src/App.jsx
import { useState, useEffect } from 'react';
import AddNoteForm from './components/AddNoteForm';
import NoteList from './components/NoteList'; // <-- 1. Importa la lista
import Search from './components/Search'; // <-- 1. Importa el nuevo componente


function App() {
    // --- ESTADO INICIAL DESDE LOCALSTORAGE ---
  // 2. Modificamos useState para que, al iniciar, intente cargar las notas
  //    desde localStorage. Si no hay nada, empieza con un array vacío.
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes-app-data');
    if (savedNotes) {
      return JSON.parse(savedNotes); // Convierte el string de vuelta a un array
    } else {
      return [];
    }
  });

  // 2. Crea un nuevo estado para el texto de búsqueda
  const [searchText, setSearchText] = useState('');

    // --- EFECTO PARA GUARDAR EN LOCALSTORAGE ---
  // 3. Este hook 'useEffect' se ejecutará cada vez que el estado 'notes' cambie.
  useEffect(() => {
    // Guardamos el array 'notes' en localStorage.
    // 'JSON.stringify' convierte el array de objetos en un string,
    // que es el formato que localStorage requiere.
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]); // El array de dependencias: le dice a useEffect que se ejecute solo si 'notes' cambia.

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (idToDelete) => {
    const updatedNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(updatedNotes);
  };

  // 3. Filtra las notas antes de renderizarlas
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchText.toLowerCase()) ||
    note.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-gray-200 font-sans flex flex-col items-center w-full min-h-screen p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
          NotaApp
        </h1>
        <Search onSearch={setSearchText} />

        <AddNoteForm onAddNote={addNote} />

        {/* 2. Reemplaza el div vacío con el componente NoteList */}
        <div className="mt-12">
          <NoteList notes={filteredNotes} onDeleteNote={deleteNote}/> {/* <-- Pásale el array de notas */}
        </div>
      </main>
    </div>
  );
}

export default App;
