// src/components/NoteCard.jsx
import { motion } from 'framer-motion'; // <-- 1. Importa motion


function NoteCard({ id, title, content, onDeleteNote }) {
  // 2. Creamos un manejador para el clic en el botón
  const handleDelete = () => {
    // Llamamos a la función que nos vino desde App, pasándole
    // el 'id' de esta tarjeta específica.
    onDeleteNote(id);
  };

  // 2. Define las variantes de la animación
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8 }, // Empieza invisible, 50px abajo y más pequeño
    animate: { opacity: 1, y: 0, scale: 1 },    // Termina visible, en su posición y tamaño normal
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } } // Se va volviéndose invisible y pequeño
  };

  return (
    <motion.div 
    className="bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col"
    variants={cardVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    layout // <-- ¡Esta prop es mágica! Anima el reordenamiento de la cuadrícula
    >
      <h3 className="text-lg font-bold text-white mb-2 break-words">{title}</h3>
      <p className="text-gray-300 flex-grow break-words">{content}</p>
      <div className="flex justify-end mt-4">
        <button className="text-gray-500 hover:text-red-500 transition-colors"
        onClick={handleDelete}
        aria-label="Eliminar nota">
          {/* Icono de papelera (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default NoteCard;
  