const BASE_URL = "https://bootcamp-api.codeit.kr/api";
const USER_ID = 4;

async function fetchData(endpoint: string): Promise<any> {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  return await response.json();
}

//샘플 폴더
export function getFolder(): Promise<any> {
  return fetchData("/sample/folder");
}

//유저 정보
export function getUser(): Promise<any> {
  return fetchData(`/users/${USER_ID}`);
}

//폴더 목록
export function getFolders(): Promise<any> {
  return fetchData(`/users/${USER_ID}/folders`);
}

//"전체" 링크
export function getAllLinks(): Promise<any> {
  return fetchData(`/users/${USER_ID}/links`);
}

//특정 폴더 링크
export function getFolderLinks(folderId: number): Promise<any> {
  return fetchData(`/users/${USER_ID}/links?folderId=${folderId}`);
}