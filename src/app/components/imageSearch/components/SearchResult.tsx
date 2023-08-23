import Image from "next/image";

import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { ImageType } from "@/types/Image";

import NoResultsFound from "./NoResultsFound";
import styles from "./SearchResult.module.scss";

export interface SearchResultProps {
  images: ImageType[] | undefined;
  searchTerm: string;
  isLoading: boolean;
}

const renderImageList = (images: ImageType[]) => {
  return (
    <ImageList cols={4} rowHeight={200} variant="standard">
      {images?.map((image) => (
        <ImageListItem key={image.id} className={styles.imageItem}>
          <Image
            src={image.urls.small}
            alt={image.alt_description || image.description || image.id}
            fill={true}
            sizes="100%"
            placeholder="blur"
            blurDataURL={image.urls.small}
            priority={true}
            style={{ minHeight: "10px" }}
            className={styles.image}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
function SearchResult({ images, searchTerm, isLoading }: SearchResultProps) {
  return (
    <Box mb={4}>
      <Typography mb={2}>
        {isLoading ? "Searching" : "Search"} results for <b>{searchTerm}</b>
      </Typography>
      {images?.length === 0 && <NoResultsFound />}
      {!!images?.length && renderImageList(images)}
    </Box>
  );
}

export default SearchResult;
