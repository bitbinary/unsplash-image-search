import { ImageType } from "@/types/Image";

const SEARCH_IMAGE_URL = `${process.env.NEXT_PUBLIC_UNSPLASH_BASE_URL}/${process.env.NEXT_PUBLIC_UNSPLASH_PHOTO_SEARCH_URL}`;

export interface SearchImagesResponse {
  results: ImageType[];
  total: number;
  total_pages: number;
}

interface SWRError {
  info: any;
  status: number;
  message: string;
}

export const searchImages = async (query: {
  searchInput: string;
  pageIndex: number;
  perPage: number;
  name: string;
}): Promise<SearchImagesResponse> => {
  const response = await fetch(
    `${SEARCH_IMAGE_URL}?query=${query.searchInput}&page=${
      query.pageIndex
    }&per_page=${query.perPage || 10}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
  if (!response.ok) {
    const error: SWRError = {
      info: await response.json(),
      status: response.status,
      message:
        "Unable to process request at the moment. Please try again later",
    };
    switch (response.status) {
      case 401:
      case 403:
        error.message = "Unable to verify the credentials";
        break;
      case 404:
        error.message = "Resource not found";
        break;
      case 500:
      default:
        error.message =
          "Unable to process request at the moment. Please try again later";
    }

    throw error;
  }
  return response.json();
};
