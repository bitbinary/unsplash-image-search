"use client";
import { SWRConfig } from "swr";
export const SWRProvider = ({ children }: any) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
