const ScrollToTop = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;