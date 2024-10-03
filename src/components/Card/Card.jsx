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
            {applications.map((application) => (
                <div key={application.id} className="card">
                    <img src={application.photo} alt="img" />
                    <h2 className='h2-card'>{application.first_name}</h2>
                    <h2 className='h2-card last-name'>{application.last_name}</h2>

                    <p className='age-card'>№ {application.id}</p>
                    <p className='age-card'>{application.age} лет</p>
                    <p className='age-card'>{application.country}</p>
                    <button className="btn-card-more" onClick={() => handleMoreInfoClick(application)}>
                        Подробнее
                    </button>
                </div>
            ))}

            {/* Модальное окно */}
            {selectedApplication && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>{selectedApplication.first_name} {selectedApplication.last_name}</h2>
                        <img src={selectedApplication.photo} alt="Фото анкеты" />

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
