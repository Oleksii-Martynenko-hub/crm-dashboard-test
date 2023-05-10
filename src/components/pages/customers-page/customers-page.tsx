import styled from 'styled-components';

import Greeting from 'src/components/greeting/greeting';
import CustomersTable from 'src/components/customers-table/customers-table';

// interface Customer
export interface Customer {
  id: string;
  customerName: string;
  company: string;
  phoneNumber: string;
  email: string;
  country: string;
  status: 'active' | 'inactive';
}

/* eslint-disable-next-line */
export interface CustomersPageProps {}

const StyledCustomersPage = styled.section``;

const GreetingWrapper = styled.div`
  margin: 0 0 51px 0;

  @media (max-width: 1024px) {
    margin: 0 0 21px 0;
  }
`;

export function CustomersPage(props: CustomersPageProps) {
  const username = 'Evano';

  const customers: Customer[] = [
    {
      id: '1',
      customerName: 'Jane Cooper',
      company: 'Microsoft',
      phoneNumber: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'active',
    },
    {
      id: '2',
      customerName: 'Floyd Miles',
      company: 'Yahoo',
      phoneNumber: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'inactive',
    },
    {
      id: '3',
      customerName: 'Ronald Richards',
      company: 'Adobe',
      phoneNumber: '(302) 555-0107',
      email: 'ronald@adobe.com',
      country: 'Israel',
      status: 'inactive',
    },
    {
      id: '4',
      customerName: 'Marvin McKinney',
      company: 'Tesla',
      phoneNumber: '(252) 555-0126',
      email: 'marvin@tesla.com',
      country: 'Iran',
      status: 'active',
    },
    {
      id: '5',
      customerName: 'Jerome Bell',
      company: 'Google',
      phoneNumber: '(629) 555-0129',
      email: 'jerome@google.com',
      country: 'Réunion',
      status: 'active',
    },
    {
      id: '6',
      customerName: 'Kathryn Murphy',
      company: 'Microsoft',
      phoneNumber: '(406) 555-0120',
      email: 'kathryn@microsoft.com',
      country: 'Curaçao',
      status: 'active',
    },
    {
      id: '7',
      customerName: 'Jacob Jones',
      company: 'Yahoo',
      phoneNumber: '(208) 555-0112',
      email: 'jacob@yahoo.com',
      country: 'Brazil',
      status: 'active',
    },
    {
      id: '8',
      customerName: 'Kristin Watson',
      company: 'Facebook',
      phoneNumber: '(704) 555-0127',
      email: 'kristin@facebook.com',
      country: 'Åland Islands',
      status: 'inactive',
    },
  ];

  return (
    <StyledCustomersPage>
      <GreetingWrapper>
        <Greeting username={username} />
      </GreetingWrapper>

      {customers.length ? <CustomersTable customers={customers} /> : null}
    </StyledCustomersPage>
  );
}

export default CustomersPage;
