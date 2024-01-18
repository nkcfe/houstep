export interface ButtonProps {
  color: 'white' | 'black';
  size: 'small' | 'large';
  children: React.ReactNode;
  onClickhandler: () => void;
  disabled?: boolean;
}
