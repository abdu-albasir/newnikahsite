import React from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

const Success = () => {
  const navigate = useNavigate(); // Инициализируем useNavigate

  const goToHomePage = () => {
    navigate('/'); // Переход на главную страницу
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex items-center gap-5 px-5 animate__animated animate__backInUp">
        <div>
          <button 
            id="btn" 
            className=""
            onClick={goToHomePage} // Добавляем обработчик клика
          >
            <h2>Вернуться на главную страницу</h2>
          </button>
        </div>
        <svg
          width="24"
          height="24"
          className="size-20 sm:size24"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#d34085"
            d="M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z"
          />
        </svg>

        <div>
          <h1 className="text-2xl font-semibold">Успешно!</h1>
          <p className="text-lg opacity-70">Ваша анкета отправлена на проверку</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
