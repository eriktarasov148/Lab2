import { useState, useEffect } from 'react';

function Footer() {
  // 1. Створюємо стан для збереження даних, щоб показати їх на сторінці
  const [systemInfo, setSystemInfo] = useState({
    userAgent: '',
    platform: ''
  });

  // 2. Використовуємо useEffect, який спрацює один раз при завантаженні компонента
  useEffect(() => {
    // Зчитуємо дані про браузер та систему
    const currentUserAgent = navigator.userAgent;
    const currentPlatform = navigator.platform;

    // Зберігаємо ці дані у пам'ять браузера (localStorage)
    localStorage.setItem('userAgent', currentUserAgent);
    localStorage.setItem('platform', currentPlatform);

    // Зчитуємо дані назад з localStorage і оновлюємо стан, щоб відобразити їх
    setSystemInfo({
      userAgent: localStorage.getItem('userAgent'),
      platform: localStorage.getItem('platform')
    });
  }, []); // Порожній масив означає "запустити лише один раз"

  return (
    <footer className="bg-slate-800 text-white text-center py-6 mt-10">
      <p className="opacity-80 mb-4">
        © 2026 Eric Tarasov
      </p>
      
      {/* 3. Блок для відображення системної інформації */}
      <div className="text-xs opacity-60 px-4">
        <p className="mb-1"><strong>Платформа:</strong> {systemInfo.platform}</p>
        <p><strong>Браузер:</strong> {systemInfo.userAgent}</p>
      </div>
    </footer>
  );
}

export default Footer;