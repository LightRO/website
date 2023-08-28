import classNames from 'classnames';
import CoolHover from '../CoolHover/CoolHover';
import styles from './Button.module.css';

/**
 * A reusable component for buttons.
 *
 * @param {boolean} isPrimary - Whether the button is primary or not. Defaults to false.
 * @param {boolean} isIcon - Whether the button only contains an icon. Defaults to false.
 * @param className - An optional classname.
 * @param {string} style - Custom styles to apply to the title.
 *
 * @example
 * <Button isPrimary={true} onClick={(e) => alert(e.target.textContent)}>Pizza</Title>
 *
 */

export default function Button(ctx) {
	const { children, className, isPrimary, isIcon, onClick, style } = ctx;
	return (
		<CoolHover
			bgColor={isPrimary ? 'var(--accent-shade-0)' : 'var(--bg-shade-3)'}
			hoverColor={isPrimary ? 'var(--accent-shade-1)' : 'var(--bg-shade-3-5)'}
			style={{
				borderRadius: '6px',
				width: 'fit-content',
				height: 'fit-content',
				...style
			}}
		>
			<button className={classNames(styles.button, { [styles.primary]: isPrimary, [styles.icon]: isIcon }, className)} onClick={onClick}>
				{children}
			</button>
		</CoolHover>
	);
}
