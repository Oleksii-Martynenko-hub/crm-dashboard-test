import { useCallback, useMemo, useState } from 'react';

export function useSearch<T extends NonNullable<unknown>>(
  data: T[],
  initSearchValue = ''
) {
  const [searchValue, setSearchValue] = useState(initSearchValue);

  const filterData = useCallback((data: T[], searchValue: string) => {
    return data.filter((item) => {
      const itemValue = Object.values(item).join(' ').toLowerCase();
      return itemValue.includes(searchValue.toLowerCase());
    });
  }, []);

  const filteredData = useMemo(
    () => (searchValue.length ? filterData(data, searchValue) : data),
    [data, searchValue, filterData]
  );

  return [searchValue, setSearchValue, filteredData] as const;
}
