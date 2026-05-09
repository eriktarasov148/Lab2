import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      
      <div className="max-w-4xl mx-auto flex justify-end p-4">
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 rounded shadow bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
        >
          {theme === 'light' ? 'Темна тема 🌙' : 'Світла тема ☀️'}
        </button>
      </div>

      <Header />
      
      <main className="max-w-4xl mx-auto p-4 space-y-8 my-8">
        <Experience />
        <Education />
        <Reviews />
      </main>
      
      <ContactForm />
      
      <Footer />
    </div>
  );
}

export default App;