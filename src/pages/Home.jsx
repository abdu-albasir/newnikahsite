import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import CardList from '../components/CardList/CardList';
import './Home.css'

const Home = () => {
    const navigate = useNavigate(); // Инициализируем useNavigate

    const handleFillForm = () => {
        navigate('/anketa'); // Перенаправляем на страницу с формой
    };

    return (
        <div>
            <button onClick={handleFillForm} className="btn">
                Заполнить анкету
            </button>
            <CardList />
        </div>
    );
}

export default Home;


