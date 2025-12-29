
// Packages
import cn from 'classnames'

// Styles
import './styles.scss'

const Divider = ({ className = '', ...rest }) => {
	return <div role="separator" className={cn('divider', className)} {...rest} />
}

export default Divider
