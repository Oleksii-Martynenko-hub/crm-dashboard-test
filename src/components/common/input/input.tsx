import styled from 'styled-components';

import searchIcon from 'src/assets/images/search-icon.svg';

/* eslint-disable-next-line */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}

const InputWrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '216px')};
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 7px;
  left: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 10px 8px 8px 40px;
  background: #f9fbff;
  border-radius: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #292d32;
  border: none;

  &::placeholder {
    color: #b5b7c0;
  }
`;

export function Input(props: InputProps) {
  return (
    <InputWrapper width={props.width}>
      <SearchIcon src={searchIcon} alt="search icon for textfield" />
      <StyledInput {...props} />
    </InputWrapper>
  );
}

export default Input;
