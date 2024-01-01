export interface ButtonProps  {
    children: ReactNode;
  };

const Button = ({children}: ButtonProps) => <button className="sprinklez-btn">{children}</button>;

export default Button;
