function Header() {
  return (
    /* Додано:
       dark:from-slate-800 dark:to-slate-900 — темний градієнт для нічного режиму
       transition-colors duration-300 — плавна зміна кольору
       (text-white залишається для обох тем, бо білий текст добре читається і на синьому, і на темному)
    */
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-slate-800 dark:to-slate-900 text-white py-10 shadow-lg transition-colors duration-300">
      
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-bold mb-2">
          Eric Tarasov
        </h1>

        <p className="text-xl opacity-90">
          Frontend Web Developer
        </p>

      </div>

    </header>
  )
}

export default Header;