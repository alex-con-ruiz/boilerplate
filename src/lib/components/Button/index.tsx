import React from 'react';
import './button.scss';

interface Props {
	primary?: boolean;
  backgroundColor?: string | null;
	size?: string,
  label: string;
	onClick?: () => | undefined,
}
/**
 * Primary UI component for user interaction
 */
export const Button = (
	{ 
		primary = false, 
		backgroundColor = null, 
		size = 'medium', 
		label, 
		...props 
	}: Props
) : JSX.Element => {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	return (
		<button
			type="button"
			className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};