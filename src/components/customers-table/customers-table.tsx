import styled from 'styled-components';
import { Customer } from 'src/components/pages/customers-page/customers-page';
import { useState } from 'react';
import Input from '../common/input/input';

/* eslint-disable-next-line */
export interface CustomersTableProps {
  customers: Customer[];
}

const StyledCustomersTable = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  padding: 30px 40px 40px 38px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 0 0 7px 0;
`;

const ActiveMembersBtn = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #16c098;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  margin-right: auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 0 0 40px 0;
`;

export function CustomersTable({ customers }: CustomersTableProps) {
  const customerColumns = Object.keys(customers[0]).filter(
    (col) => col !== 'id'
  ) as (keyof Omit<Customer, 'id'>)[];

  const [filteredData, setFilter] = useState('');
  const [currentData] = useState(customers);

  return (
    <StyledCustomersTable>
      <Header>
        <TitleWrapper>
          <Title>All Customers</Title>

          <ActiveMembersBtn>Active Members</ActiveMembersBtn>
        </TitleWrapper>

        <Input
          id="search"
          placeholder="Search"
          onChange={(e) => setFilter(e.target.value)}
          value={''}
        />
      </Header>

      <table>
        <thead>
          <tr>
            {customerColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentData.map((customer) => (
            <tr key={customer.id}>
              {customerColumns.map((column) => (
                <td key={column}>{customer[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledCustomersTable>
  );
}

export default CustomersTable;
