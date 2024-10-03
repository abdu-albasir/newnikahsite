import React from 'react';
import './Pagination.css'; // Подключите свои стили для пагинации

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <ul className="pagination-ul">
                {/* Кнопка для первой страницы */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => onPageChange(1)}
                        disabled={currentPage === 1}
                    >
                        &laquo;&laquo;
                    </button>
                </li>

                {/* Кнопка для предыдущей страницы */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &laquo;
                    </button>
                </li>

                {/* Отображение номеров страниц */}
                {pageNumbers.map(number => (
                    <li
                        className={`page-item ${number === currentPage ? 'active' : ''}`}
                        key={number}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}

                {/* Кнопка для следующей страницы */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &raquo;
                    </button>
                </li>

                {/* Кнопка для последней страницы */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => onPageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        &raquo;&raquo;
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
