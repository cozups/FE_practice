type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
        : 'Welcome Guest'}
    </div>
  );
};

export default Greet;
