function Education() {
  return (
    /* Додано: 
       dark:bg-slate-800 — темний фон картки
       dark:border-slate-700 — ледь помітна рамка для темної теми
       transition-all duration-300 — плавний перехід
    */
    <section className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-700">
      
      {/* Додано dark:text-white */}
      <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white transition-colors duration-300">
        Education
      </h2>

      <div>
        {/* Додано text-slate-900 dark:text-slate-100 для контрасту */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
          Information Technology
        </h3>

        {/* Додано dark:text-slate-300 */}
        <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
          University studies focused on web development, networking and security.
        </p>
      </div>

    </section>
  );
}

export default Education;