import React, { useState } from 'react';
import './Card.css'; // Ваши стили

const Card = ({ applications }) => {
    const [selectedApplication, setSelectedApplication] = useState(null);

    if (!applications.length) return <p>Нет анкет для отображения.</p>;

    const handleMoreInfoClick = (application) => {
        setSelectedApplication(application);
    };

    const handleCloseModal = () => {
        setSelectedApplication(null);
    };

    return (
        <div className='container-card'>
            {applications.map((application) => {
                console.log('URL изображения:', application.photo); // Вывод в консоль URL изображения

                return (
                    <div key={application.id} className="card">
                        <h2 className='h2-card last-name'>{application.first_name}, {application.age} лет</h2>


                        <h2 className='h2-card'>{application.country}, {application.city}</h2>
                        <h2 className='h2-card'>№ {application.id}</h2>
                        <img src={application.photo} alt="img" />

                        <button className="btn-card-more" onClick={() => handleMoreInfoClick(application)}>
                            Подробнее
                        </button>
                    </div>
                );
            })}

            {/* Модальное окно */}
            {selectedApplication && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>{selectedApplication.first_name} {selectedApplication.last_name}</h2>
                        <img className='img' src={selectedApplication.photo} alt="Фото анкеты" />

                        <h2>Анкета № {selectedApplication.id}</h2>
                        <p><strong>Читаете ли вы намаз? :</strong> {selectedApplication.read_namaz}</p>
                        <p><strong>Носите ли вы хиджаб? :</strong> {selectedApplication.havebreard}</p>
                        <p><strong>Читаете ли вы Куран? :</strong> {selectedApplication.can_read_Kuran}</p>
                        <p><strong>Мазхаб? :</strong> {selectedApplication.your_Madhab}</p>


                        <p><strong>Имя:</strong> {selectedApplication.first_name}</p>
                        <p><strong>Фамилия:</strong> {selectedApplication.last_name}</p>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
