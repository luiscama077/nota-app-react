import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // <-- 1. Importamos una librería para generar IDs únicos

// --- INSTALACIÓN NECESARIA ---
// Abre tu terminal y ejecuta: npm install uuid

function AddNoteForm({ onAddNote }) { // <-- 2. Recibimos la función 'onAddNote' como prop
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // 3. Validación simple: no enviar si el contenido está vacío.
    if (!content.trim()) return;

    // 4. Creamos un objeto para la nueva nota, incluyendo un ID único.
    const newNote = {
      id: uuidv4(), // Genera un ID único como '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
      title: title || 'Sin Título', // Si el título está vacío, pone 'Sin Título'
      content: content,
    };

    // 5. Llamamos a la función que nos pasó el componente App,
    //    entregándole el objeto de la nueva nota.
    onAddNote(newNote);

    // Limpiamos los campos del formulario
    setTitle('');
    setContent('');
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        {/* ... el resto del JSX del formulario no cambia ... */}
        <input
          type="text"
          placeholder="Título"
          className="w-full bg-transparent text-white text-lg font-semibold p-2 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Escribe tu nota aquí..."
          rows="3"
          className="w-full bg-transparent text-gray-300 p-2 outline-none resize-none mt-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNoteForm;
