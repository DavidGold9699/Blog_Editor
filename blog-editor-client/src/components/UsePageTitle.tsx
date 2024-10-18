import  { useEffect } from "react";

const UsePageTitle = (dynamicPart: string) => {
  const baseTitle = "Blog";

  useEffect(() => {
    document.title = `${baseTitle} | ${dynamicPart}`;
  }, [dynamicPart]);
};

export default UsePageTitle;
