type Props = {
  children: React.ReactNode;
  className?: string,
};

const Container = ({ children, className }: Props) => {
  const containerClasses = `max-container ${className || ''}`;
  return <div className={containerClasses}>{children}</div>;
};

export default Container;