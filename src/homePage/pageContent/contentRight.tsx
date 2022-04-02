import { Button, Input } from "antd";

const ContentRight = () => {
  let titleArr = [
    {
      title: "Flutter总结",
    },
    {
      title: "https原理",
    },
  ];

  return (
    <>
      <div className={"content-right-navigation"}>
        <Input.Search placeholder="input search text" style={{ width: 200 }} />
        <h3>最近文章</h3>
        {titleArr.map((arr) => {
          return <div className={"content-right-newTitle"}>{arr.title}</div>;
        })}

        <Button
          onClick={() => {
            console.log();
          }}
        >
          开发专用
        </Button>
        <h3>分类</h3>
        <h3>内容待定</h3>
      </div>
    </>
  );
};
export default ContentRight;