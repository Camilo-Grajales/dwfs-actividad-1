// Packages
import React from 'react';

// App
import Button from 'shared/components/Button'; 
import Icon from 'shared/components/Icon';

// Styles
import './styles.scss';

const BagButton = () => {
    return (
        <Button className="bag-button" aria-label="Cart">
            <Icon name="bag" size={40} color="#C5A059" />
        </Button>
    );
};

export default BagButton;