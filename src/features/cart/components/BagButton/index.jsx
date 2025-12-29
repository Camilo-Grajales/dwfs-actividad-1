// Packages
import cn from 'classnames';

// App
import Button from 'shared/components/Button'; 
import Icon from 'shared/components/Icon';

// Styles
import './styles.scss';

const BagButton = ({ className = '', onClick }) => {
    return (
        <Button className={cn('bag-button', className)} aria-label="Cart" onClick={onClick}>
            <Icon name="bag" size={40} color="#C5A059" />
        </Button>
    );
};

export default BagButton;