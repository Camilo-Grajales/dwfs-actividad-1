// App
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

// Styles
import './styles.scss';

const TrashButton = ({ deleteItem }) => {
    return (
        <Button 
            className="trash-button" 
            onClick={deleteItem} 
            aria-label="Delete"
        >
            <Icon
                name="trash"
                size={20}
                color="$color-spectra"
            ></Icon>
        </Button>
    );
}

export default TrashButton;