import styled from 'styled-components';

export interface StatusProps {
  status: 'active' | 'inactive';
}

const StyledStatus = styled.span<{ status: StatusProps['status'] }>`
  display: inline-block;
  width: 84px;
  letter-spacing: -0.01em;
  text-align: center;
  text-transform: capitalize;
  padding: 4px 14px;
  border-radius: 4px;
  color: ${({ status }) => (status === 'active' ? '#008767' : '#DF0404')};
  background: ${({ status }) =>
    status === 'active' ? 'rgba(22, 192, 152, 0.38)' : '#FFC5C5'};
  border: 1px solid
    ${({ status }) => (status === 'active' ? '#00B087' : '#DF0404')};
`;

export function Status({ status }: StatusProps) {
  return <StyledStatus status={status}>{status}</StyledStatus>;
}

export default Status;
