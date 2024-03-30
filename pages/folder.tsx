import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { getAllLinks, getFolderLinks, getFolders } from "@/src/api";
import SearchBar from "@/src/components/common/SearchBar";
import AddLink from "@/src/components/folder/AddLink";
import FolderInfo from "@/src/components/folder/FolderInfo";
import useAsync from "@/src/components/hooks/useAsync";
import CardList from "@/src/components/shared/CardList";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-bottom: 100px;
`;

export const FolderContext = createContext<{
  folders: any[];
  folderId: number;
  setFolderId: Dispatch<SetStateAction<number>>;
}>({ folders: [], folderId: 0, setFolderId: () => {} });

function Folder() {
  const [folderId, setFolderId] = useState<number>(0);
  const [folders, setFolders] = useState<any[]>([1]);
  const [links, setLinks] = useState<any[]>([]);
  const [allLinks, setAllLinks] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const [, getFoldersAsync] = useAsync(getFolders);
  const [, getFolderLinksAsync] = useAsync(getFolderLinks);
  const [, getAllLinksAsync] = useAsync(getAllLinks);

  const fetchData = async (folderId: number) => {
    try {
      const promises: Promise<any>[] = [];

      if (typeof getFoldersAsync === "function")
        promises.push(getFoldersAsync());
      if (typeof getAllLinksAsync === "function")
        promises.push(getAllLinksAsync());
      if (typeof getFolderLinksAsync === "function")
        promises.push(getFolderLinksAsync(folderId));

      const [foldersResponse, allLinksResponse, folderLinksResponse] =
        await Promise.all(promises);

      if (foldersResponse) setFolders(foldersResponse.data);
      if (allLinksResponse) setAllLinks(allLinksResponse.data);
      if (folderLinksResponse) setLinks(folderLinksResponse.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(folderId);
  }, [folderId]);

  return (
    <FolderContext.Provider value={{ folders, folderId, setFolderId }}>
      <Container>
        <AddLink />
        <div>
          <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
          <FolderInfo />
          <CardList
            links={folderId === 0 ? allLinks : links}
            inputValue={inputValue}
          />
        </div>
      </Container>
    </FolderContext.Provider>
  );
}

export default Folder;