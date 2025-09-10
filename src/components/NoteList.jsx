// src/components/NoteList.jsx
import NoteCard from './NoteCard';
import { AnimatePresence } from 'framer-motion'; // <-- 1. Importa AnimatePresence


function NoteList({ notes, onDeleteNote }) {
  // Si no hay notas, muestra un mensaje amigable.
  if (notes.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-16">
        <p>No hay notas todavía.</p>
        <p>¡Crea tu primera nota!</p>
      </div>
    );
  }

  return (
    // Usamos CSS Grid para crear una cuadrícula responsive.
    // - grid-cols-1 en móviles (1 columna)
    // - sm:grid-cols-2 en pantallas pequeñas (2 columnas)
    // - lg:grid-cols-3 en pantallas grandes (3 columnas)
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence>
        {notes.map((note) => (
          // La prop 'key' es crucial. React la necesita para identificar
          // cada elemento de la lista de forma única. Usamos el id que generamos con uuid.
          <NoteCard
            key={note.id}
            id={note.id} // <-- 2. Pasamos el 'id' de la nota a la tarjeta
            title={note.title}
            content={note.content}
            onDeleteNote={onDeleteNote} // <-- 3. Pasamos la función de borrado a la tarjeta
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default NoteList;
