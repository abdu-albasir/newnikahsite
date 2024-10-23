import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Filter.css';
import img from './neke_page-0001 3.png';
import imd from './Mask group.png';
import imh from './Vector.jpg';

const Filter = ({ onFilterChange }) => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Состояния для фильтров
    const [countryFilter, setCountryFilter] = useState('');
    const [nationalityFilter, setNationalityFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [ageRange, setAgeRange] = useState([18, 70]);
    const [familyStatusFilter, setFamilyStatusFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [pkFilter, setPkFilter] = useState('');

    // Состояния для динамических данных
    const [countries, setCountries] = useState([]);
    const [nationalities, setNationalities] = useState([]);
    const [cities, setCities] = useState([]);

    // Состояние для управления видимостью фильтров
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    // Запрос данных для фильтров
    useEffect(() => {
        const fetchFilterData = async () => {
            try {
                const response = await axios.get('https://nikah.space/api/diynamicdata/');
                const data = response.data;
    
                // Извлекаем уникальные страны и национальности
                const countries = [...new Set(data.map(item => item.country))];
                const nationalities = [...new Set(data.map(item => item.nationality))];
                
                // Извлекаем города из city_data
                const cities = data.flatMap(item => item.city_data.map(cityObj => cityObj.city));
    
                setCountries(countries);
                setNationalities(nationalities);
                setCities(cities);
            } catch (error) {
                console.error('Ошибка при получении данных фильтра:', error);
                setError(error.message);
            }
        };
    
        fetchFilterData();
    }, []);
    
    // Запрос данных анкет
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://nikah.space/api/showapplication/');
                setApplications(response.data);
                onFilterChange(response.data); // Передаем данные в родительский компонент
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [onFilterChange]);

    // Фильтрация анкет
    const filterApplications = () => {
        let filtered = applications;

        if (countryFilter) {
            filtered = filtered.filter(app => app.country === countryFilter);
        }
        if (nationalityFilter) {
            filtered = filtered.filter(app => app.nationality === nationalityFilter);
        }
        if (cityFilter) {
            filtered = filtered.filter(app => app.city === cityFilter);
        }
        if (genderFilter) {
            filtered = filtered.filter(app => app.gender === genderFilter);
        }
        if (ageRange) {
            filtered = filtered.filter(app => app.age >= ageRange[0] && app.age <= ageRange[1]);
        }
        if (familyStatusFilter) {
            filtered = filtered.filter(app => app.family_status === familyStatusFilter);
        }
        if (searchQuery) {
            filtered = filtered.filter(app => 
                app.first_name.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        }
        if (pkFilter) {
            filtered = filtered.filter(app => 
                app.id.toString().startsWith(pkFilter)
            );
        }

        onFilterChange(filtered);
    };

    // Запуск фильтрации при изменении фильтров
    useEffect(() => {
        if (applications.length > 0) {
            filterApplications();
        }
    }, [countryFilter, nationalityFilter, cityFilter, genderFilter, ageRange, familyStatusFilter, searchQuery, pkFilter]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div className='container-filter'>
            <div className="conteiner-top-top container-card">
                <button className="burger-menu" onClick={() => setIsFilterVisible(!isFilterVisible)}>
                    <img src={imd} className='top-top-imd' alt="" />
                </button>
                <div className="container-top">
                    <img src={img} alt="" className="top-img" />
                    <h1 className="top-h1">NIKAH.SPACE</h1>
                </div>
                <img src={imh} className='top-top-imd' alt="" />
            </div>

            {/* Фильтры, которые можно скрывать/показывать */}
            {isFilterVisible && (
                <div className="header-filter">
                    <div className="filters">
                        <select onChange={(e) => setCountryFilter(e.target.value)} value={countryFilter}>
                            <option value="">Выберите страну</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>

                        <select onChange={(e) => setNationalityFilter(e.target.value)} value={nationalityFilter}>
                            <option value="">Выберите национальность</option>
                            {nationalities.map((nationality, index) => (
                                <option key={index} value={nationality}>
                                    {nationality}
                                </option>
                            ))}
                        </select>

                        <select onChange={(e) => setCityFilter(e.target.value)} value={cityFilter}>
                            <option value="">Выберите город</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>

                        <select onChange={(e) => setGenderFilter(e.target.value)} value={genderFilter}>
                            <option value="">Выберите пол</option>
                            <option value="Ер">Ер</option>
                            <option value="Әйел">Әйел</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Минимальный возраст"
                            value={ageRange[0]}
                            onChange={(e) => setAgeRange([parseInt(e.target.value), ageRange[1]])}
                        />
                        <input
                            type="number"
                            placeholder="Максимальный возраст"
                            value={ageRange[1]}
                            onChange={(e) => setAgeRange([ageRange[0], parseInt(e.target.value)])}
                        />
                        
                        <select onChange={(e) => setFamilyStatusFilter(e.target.value)} value={familyStatusFilter}>
                            <option value="">Выберите семейное положение</option>
                            <option value="Бойдақ (үйленген жоқ)">Бойдақ (үйленген жоқ)</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Поиск по слову"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Номер анкеты"
                            value={pkFilter}
                            onChange={(e) => setPkFilter(e.target.value)}
                        />
                    </div>
                </div>
            )}

            <div className="container-for-poisk">
                <h2>Анкеты</h2>
            </div>
        </div>
    );
};

export default Filter;
