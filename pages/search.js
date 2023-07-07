'use client';
import { useEffect, useState } from "react";
import PageHeader from "../components/page-header/page-header.component"
import SearchResultList from "../components/search-result-list/search-result-list.component";

export default function Search() {

  const [storage, getLocalStorage] = useState("");

  useEffect(() => {

    // Check if localStorage is available (client-side only)
    if (typeof window !== 'undefined' && window.localStorage) {
      // Access localStorage
      const getSearchTerm = localStorage.getItem('search_game');
      getLocalStorage(getSearchTerm)

      // Remove from local storage
      setTimeout(() => {
        localStorage.removeItem('search_game');
      }, "3000");

    }
  }, []);
    
  return (
      <>
          <PageHeader title={`Search results: ${storage}`} intro=""/>
          <SearchResultList search_term={storage} />
      </>
  )
}
