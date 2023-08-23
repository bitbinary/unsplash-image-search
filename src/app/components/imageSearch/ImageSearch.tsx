"use client";
import { use, useEffect, useState } from "react";
import useSWR from "swr";

import { SearchImagesResponse, searchImages } from "@/lib/fetchers";
import { TablePagination } from "@mui/material";
import Loading from "@components/common/Loading";

import SearchResult from "./components/SearchResult";
import styles from "./ImageSearch.module.scss";
import NoKeyword from "./components/NoKeyword";
import Error from "./components/Error";

export interface ImageSearchProps {
  searchInput: string;
}

const DEFAULT_PAGE_SIZE = 15;
const DEFAULT_PAGE_INDEX = 0;

function ImageSearch({ searchInput }: ImageSearchProps) {
  const [pageIndex, setPageIndex] = useState(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    setPageIndex(DEFAULT_PAGE_INDEX);
  }, [searchInput]);

  const { data, error, isLoading, isValidating } = useSWR<SearchImagesResponse>(
    searchInput
      ? {
          name: `imageSearch`,
          searchInput: searchInput,
          pageIndex: pageIndex + 1,
          perPage: rowsPerPage,
        }
      : null,
    searchImages,
    {
      keepPreviousData: true,
    }
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPageIndex(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPageIndex(1);
  };
  if (error) return <Error message={error.message} />;

  if (!searchInput) return <NoKeyword />;

  return (
    <div className={styles.container}>
      {isLoading || isValidating ? <Loading /> : null}
      <TablePagination
        component="div"
        count={data?.total ?? 0}
        page={pageIndex}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[15, 30, 45, 75]}
        labelRowsPerPage="Images per page"
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <SearchResult
        images={data?.results}
        searchTerm={searchInput}
        isLoading={isLoading || isValidating}
      />
    </div>
  );
}

export default ImageSearch;
