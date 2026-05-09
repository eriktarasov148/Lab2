function Experience() {
  return (
    /* Додано темний фон, межу та плавний перехід */
    <section className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-700">

      {/* Додано dark:text-white для головного заголовка */}
      <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white transition-colors duration-300">
        Experience
      </h2>

      <div className="space-y-4">

        <div>
          {/* Додано text-slate-900 та dark:text-slate-100 для підзаголовків */}
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
            Frontend Developer
          </h3>

          {/* Додано dark:text-slate-300 для опису */}
          <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
            Created responsive web interfaces using React and modern CSS.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
            Web Design Projects
          </h3>

          <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
            Built multiple modern websites using HTML, CSS and JavaScript.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Experience;