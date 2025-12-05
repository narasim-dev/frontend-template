import styled, { css } from 'styled-components'
import { theme } from '../../theme'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const sizeStyles = {
  sm: css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.fontSizes.sm};
  `,
  md: css`
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.fontSizes.md};
  `,
  lg: css`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: ${theme.fontSizes.lg};
  `,
}

const variantStyles = {
  primary: css`
    background: ${theme.colors.primary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background: ${theme.colors.primaryHover};
    }
  `,
  secondary: css`
    background: ${theme.colors.secondary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background: ${theme.colors.secondaryHover};
    }
  `,
  outline: css`
    background: transparent;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${theme.colors.primary};
      color: white;
    }
  `,
}

const StyledButton = styled.button<{
  $variant: ButtonProps['variant']
  $size: ButtonProps['size']
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radii.md};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $size }) => sizeStyles[$size || 'md']}
  ${({ $variant }) => variantStyles[$variant || 'primary']}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}
