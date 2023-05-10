import { useState } from 'react';
import styled from 'styled-components';

import Input from '../common/input/input';
import Status from '../common/status/status';
import Pagination from '../common/pagination/pagination';
import { Customer } from 'src/components/pages/customers-page/customers-page';

export interface CustomersTableProps {
  customers: Customer[];
}

const StyledCustomersTable = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
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
  letter-spacing: 0.8px;
  color: #16c098;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  margin-right: auto;
  min-width: 180px;
`;

const InputWrapper = styled.div`
  margin: 4px 0 0 0;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 53px 26px 38px;

  @media (max-width: 1024px) {
    padding: 20px 33px 16px 28px;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 40px 31px 38px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  background: linear-gradient(to right, #ffffff 33%, rgba(255, 255, 255, 0)),
    linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff 66%) 100% 0,
    radial-gradient(farthest-side at 0 50%, #cccccc, rgba(0, 0, 0, 0)),
    radial-gradient(farthest-side at 100% 50%, #cccccc, rgba(0, 0, 0, 0)) 100% 0;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-attachment: local, local, scroll, scroll;
  background-size: 39px 100%, 39px 100%, 13px 100%, 13px 100%;

  @media (max-width: 1024px) {
    padding: 0 30px 21px 28px;
  }
`;

const Table = styled.table`
  table-layout: fixed;
  width: 100%;

  thead {
    border-bottom: 1px solid #eeeeee;
  }

  thead tr th {
    padding: 14px 0 13px;
    text-align: left;
    letter-spacing: -0.01em;
    color: #b5b7c0;

    &:last-child {
      padding: 0 0 0 12px;
    }
  }

  tbody tr td {
    padding: 19px 0 18px;
    letter-spacing: -0.01em;
    color: #292d32;
    border-bottom: 1px solid #eeeeee;
  }
`;

const PaginationWrapper = styled.div`
  padding: 0 40px 40px 38px;

  @media (max-width: 1024px) {
    padding: 0 30px 30px 28px;
  }
`;

export function CustomersTable({ customers }: CustomersTableProps) {
  const customerColumns = [
    { column: 'customerName', label: 'Customer Name', width: '172px' },
    { column: 'company', label: 'Company', width: '131px' },
    { column: 'phoneNumber', label: 'Phone Number', width: '156px' },
    { column: 'email', label: 'Email', width: '207px' },
    { column: 'country', label: 'Country', width: '140px' },
    { column: 'status', label: 'Status', width: '84px' },
  ] as {
    column: keyof Customer;
    label: string;
    width: string;
  }[];

  const [filteredData, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData] = useState(customers);

  return (
    <StyledCustomersTable>
      <Header>
        <TitleWrapper>
          <Title>All Customers</Title>

          <ActiveMembersBtn>Active Members</ActiveMembersBtn>
        </TitleWrapper>

        <InputWrapper>
          <Input
            id="search"
            placeholder="Search"
            onChange={(e) => setFilter(e.target.value)}
            value={''}
          />
        </InputWrapper>
      </Header>

      <TableWrapper>
        <Table>
          <colgroup>
            {customerColumns.map(({ column, width }) => (
              <col key={column} style={{ width }} />
            ))}
          </colgroup>

          <thead>
            <tr>
              {customerColumns.map(({ column, label }) => (
                <th key={column}>{label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentData.map((customer) => (
              <tr key={customer.id}>
                {customerColumns.map(({ column }) => (
                  <td key={column}>
                    {column === 'status' ? (
                      <Status status={customer[column]} />
                    ) : (
                      customer[column]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      <PaginationWrapper>
        <Pagination
          itemsPerPage={8}
          itemsAmount={256000}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pagesAmount={40}
        />
      </PaginationWrapper>
    </StyledCustomersTable>
  );
}

export default CustomersTable;
