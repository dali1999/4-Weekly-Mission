import { getUser } from "@src/api";
import Footer from "@src/components/common/Footer";
import Header from "@src/components/common/Header";
import useAsync from "@src/components/hooks/useAsync";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface UserInfo {
  id: number;
  name: string;
  email: string;
  image_source: string;
}

export default function App({ Component, pageProps }: AppProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: 0,
    name: "",
    email: "",
    image_source: "",
  });
  const router = useRouter();
  const excludedPages = ["/signin", "/signup"];
  const isExcludedPage = excludedPages.includes(router.pathname);
  const [, getUserAsync] = useAsync(getUser);

  // 유저 정보 요청
  const handleLoadUser = async () => {
    if (typeof getUserAsync === "function") {
      let result = await getUserAsync();
      if (!result) return;
      setUserInfo(result.data[0]);
    }
  };

  useEffect(() => {
    handleLoadUser();
  }, []);
  return (
    <>
      <Head>
        <title>index</title>
      </Head>

      <div>
        {!isExcludedPage ? (
          <>
            <Header
              userInfo={{
                email: userInfo.email,
                image_source: userInfo.image_source,
              }}
            />
            <div>
              <Component {...pageProps} />
              <div id="modal"></div>
              <div id="backdrop"></div>
            </div>
            <Footer />
          </>
        ) : (
          <div>
            <Component {...pageProps} />
            <div id="modal"></div>
            <div id="backdrop"></div>
          </div>
        )}
      </div>
    </>
  );
}
