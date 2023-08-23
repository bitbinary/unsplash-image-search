"use client";
import styles from "./page.module.scss";
import SearchInput from "@components/imageSearch/components/SearchInput";

import useDebounce from "@/hooks/useDebounce";

import ImageSearch from "@/app/components/imageSearch/ImageSearch";
import { useState } from "react";
import { Box } from "@mui/material";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  // Debouncing the searchInput changes to reduce the number of requests to the API.
  const deBouncedSearchInput = useDebounce(searchInput, 500);

  const handleSearchInputChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  return (
    <Box className={styles.main} component={"main"} mt={4}>
      <SearchInput handleOnChange={handleSearchInputChange} />
      <ImageSearch searchInput={deBouncedSearchInput} />
    </Box>
  );
}
