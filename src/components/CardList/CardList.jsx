import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'; // Импортируем компонент Pagination

const CardList = () => {
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const applicationsPerPage = 9; // Количество карточек на одну страницу

    // Определяем индекс последней и первой карточки на странице
    const indexOfLastApplication = currentPage * applicationsPerPage;
    const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
    const currentApplications = filteredApplications.slice(indexOfFirstApplication, indexOfLastApplication);

    // Общее количество страниц
    const totalPages = Math.ceil(filteredApplications.length / applicationsPerPage);

    // Функция для смены страницы
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Filter onFilterChange={setFilteredApplications} />
            <Card applications={currentApplications} />
            
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default CardList;
