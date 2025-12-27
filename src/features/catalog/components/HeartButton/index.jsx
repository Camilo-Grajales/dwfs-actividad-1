// Packages
import React from 'react';

// App
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

// Styles
import './styles.scss';

const HeartButton = ({isFavorite, toggleFavorite}) => {
    return (
        <Button
            className="heart-button"
            aria-label="Favorite"
            onClick={toggleFavorite}
        >
            <Icon
                name={isFavorite ? "heart-full" : "heart"}
                size={20}
                color="#2D5A54"
            />
        </Button>
    )
}

export default HeartButton;