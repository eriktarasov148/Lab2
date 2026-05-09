import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/15/comments')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Помилка при завантаженні відгуків:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
        Відгуки роботодавців
      </h2>
      
      {loading ? (
        <p className="text-center text-slate-700 dark:text-slate-300">
          Завантаження відгуків...
        </p>
      ) : (
        <div className="grid gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="p-5 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800 transition-colors duration-300"
            >
              <h3 className="font-bold text-slate-800 dark:text-white capitalize">
                {review.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">
                {review.email}
              </p>
              <p className="text-slate-600 dark:text-slate-300 italic">
                "{review.body}"
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;