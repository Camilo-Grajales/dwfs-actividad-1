import BagIcon from "./bag.svg?react";
import CartIcon from "./cart.svg?react";
import ChevronIcon from "./chevron.svg?react";
import CloseIcon from "./close.svg?react";
import HeartIcon from "./heart.svg?react";
import HeartFullIcon from "./heart-full.svg?react";
import SearchIcon from "./search.svg?react";
import StarIcon from "./star.svg?react";
import StarFullIcon from "./star-full.svg?react";
import TagIcon from "./tag.svg?react";
import TrashIcon from "./trash.svg?react";

const Icons = {
    bag: props => <BagIcon {...props} />,
    cart: props => <CartIcon {...props} />,
    chevron: props => <ChevronIcon {...props} />,
    close: props => <CloseIcon {...props} />,
    heart: props => <HeartIcon {...props} />,
    'heart-full': props => <HeartFullIcon {...props} />,
    search: props => <SearchIcon {...props} />,
    star: props => <StarIcon {...props} />,
    'star-full': props => <StarFullIcon {...props} />,
    tag: props => <TagIcon {...props} />,
    trash: props => <TrashIcon {...props} />,
};

export default Icons;