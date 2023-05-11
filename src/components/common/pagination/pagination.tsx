import styled from 'styled-components';

export interface PaginationProps {
  itemsPerPage: number;
  itemsAmount: number;
  pagesAmount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const StyledPagination = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ItemsAmountText = styled.p`
  color: #b5b7c0;
  margin: 0 auto 0 0;

  @media (max-width: 1100px) {
    margin: 0 0 14px 0;
  }
`;

const PaginationButton = styled.button<{ isActive?: boolean }>`
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#404B52')};
  background-color: ${({ isActive }) => (isActive ? '#5932EA' : '#F5F5F5')};
  border: 1px solid ${({ isActive }) => (isActive ? '#5932EA' : '#EEEEEE')};
  border-radius: 4px;
  min-width: 24px;
  height: 24px;
  padding: 5px 7px;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 12px 0 0;
  }
`;

const PaginationButtonsWrapper = styled.div`
  display: flex;
`;

const Dots = styled(PaginationButton)`
  color: #000000;
  background-color: transparent;
  border: none;
  cursor: auto;
  min-width: 0;
  padding: 6px 0;
`;

export function Pagination({
  itemsPerPage,
  itemsAmount,
  pagesAmount,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const pages = [...Array(pagesAmount).keys()].map((_, i) => i + 1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pagesAmount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => () => {
    setCurrentPage(page);
  };

  return (
    <StyledPagination>
      <ItemsAmountText>{`Showing data 1 to ${itemsPerPage} of  ${
        itemsAmount > 999 ? Math.floor(itemsAmount / 1000) + 'K' : itemsAmount
      } entries`}</ItemsAmountText>

      <PaginationButtonsWrapper>
        <PaginationButton onClick={handlePrevPage}>{'<'}</PaginationButton>

        {pages.length > 1 && (
          <PaginationButton
            isActive={currentPage === 1}
            onClick={handlePageClick(1)}
          >
            1
          </PaginationButton>
        )}

        {pages.length > 2 &&
          (pages.length > 7 ? (
            <>
              {currentPage > 4 && <Dots>...</Dots>}
              {currentPage === 4 && (
                <PaginationButton onClick={handlePageClick(2)}>
                  {2}
                </PaginationButton>
              )}

              {[2, 3, 4]
                .map((page) =>
                  currentPage > 3
                    ? currentPage > pages.length - 2
                      ? page + pages.length - 5
                      : page + currentPage - 3
                    : page
                )
                .map((page) => (
                  <PaginationButton
                    key={page}
                    isActive={currentPage === page}
                    onClick={handlePageClick(page)}
                  >
                    {page}
                  </PaginationButton>
                ))}

              {currentPage === pages.length - 3 && (
                <PaginationButton onClick={handlePageClick(pages.length - 1)}>
                  {pages.length - 1}
                </PaginationButton>
              )}
              {currentPage < pages.length - 3 && <Dots>...</Dots>}
            </>
          ) : (
            [2, 3, 4, 5, 6].map((page) => (
              <PaginationButton
                key={page}
                isActive={currentPage === page}
                onClick={handlePageClick(page)}
              >
                {page}
              </PaginationButton>
            ))
          ))}

        {pages.length > 1 && (
          <PaginationButton
            isActive={currentPage === pages.length}
            onClick={handlePageClick(pages.length)}
          >
            {pages.length}
          </PaginationButton>
        )}

        <PaginationButton onClick={handleNextPage}>{'>'}</PaginationButton>
      </PaginationButtonsWrapper>
    </StyledPagination>
  );
}

export default Pagination;
