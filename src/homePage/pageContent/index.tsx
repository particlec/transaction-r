import DivStyledPageContent from "./styled";
import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";

const PageContent = () => {
  return (
    <DivStyledPageContent>
      <div className={"content-left"}>
        <ContentLeft />
      </div>
      <div className={"content-right"}>
        <ContentRight />
      </div>
      <div className={""}>
        <ContentLeft></ContentLeft>
      </div>
    </DivStyledPageContent>
  );
};
export default PageContent;