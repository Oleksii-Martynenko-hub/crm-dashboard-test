import styled from 'styled-components';

export interface GreetingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  username: string;
}

const StyledGreeting = styled.h2`
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

export function Greeting({ username, ...restProps }: GreetingProps) {
  return <StyledGreeting {...restProps}>Hello {username} 👋🏼,</StyledGreeting>;
}

export default Greeting;
