interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="bg-[#00B2CA] px-5 py-1 rounded-lg border-2 border-[#0090A3]">{label}</button>;
};

export default Button;
