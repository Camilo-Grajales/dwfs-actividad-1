import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

function SearchInput() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            navigate(`/search-results?q=${value}`);
            setValue(''); // 🔹 limpiamos inmediatamente
        }
    };

    return (
        <div className="search-input">
            <input
                type="text"
                placeholder="Buscar libros por título..."
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default SearchInput;
