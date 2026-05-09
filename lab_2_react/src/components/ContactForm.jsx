import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Таймер появи (змініть 60000 на 3000 для швидкого тесту)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    /* Напівпрозорий фон навколо форми залишається без змін */
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      
      {/* САМА ФОРМА:
        Додано dark:bg-slate-800 для нічного режиму
        Додано transition-colors для плавної зміни кольору
      */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl max-w-md w-full relative transition-colors duration-300">
        
        {/* Кнопка "Закрити" */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-4 text-slate-400 hover:text-red-500 dark:hover:text-red-400 font-bold text-3xl transition"
        >
          &times;
        </button>

        {/* Додано dark:text-white */}
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-white transition-colors duration-300">
          Зворотний зв'язок
        </h2>

        {/* Форма Formspree */}
        <form action="https://formspree.io/f/xdayvzkg" method="POST" className="flex flex-col gap-4">
          <div>
            {/* Додано dark:text-slate-300 */}
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-300">Ім'я</label>
            {/* Додано dark:bg-slate-700, dark:border-slate-600, dark:text-white */}
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-700 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 dark:text-white transition-colors duration-300" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-300">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-700 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 dark:text-white transition-colors duration-300" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-300">Телефон</label>
            <input 
              type="tel" 
              name="phone" 
              className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-700 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 dark:text-white transition-colors duration-300" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-300">Повідомлення</label>
            <textarea 
              name="message" 
              required 
              rows="3" 
              className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-700 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 dark:text-white resize-none transition-colors duration-300"
            ></textarea>
          </div>
          
          {/* Додано dark:bg-blue-500 для кнопки */}
          <button 
            type="submit" 
            className="mt-2 bg-blue-600 dark:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;