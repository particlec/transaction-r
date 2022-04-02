import React, { useState } from "react";
import { TabBar, TabBarItem, TabContent } from "./tabsStyled";

function TabPane(props: { children: any; key: String; tab: string }) {
  return props.children;
}

function Tabs(props: {
    children: any;
    defaultActiveKey: number;
    key: number;
    onChange?: Function;
}) {
    const [currentIndex, setCurrentIndex] = useState<number>(
        props.defaultActiveKey
    );

    const onChange = (activeKey: number) => {

        if (typeof props.onChange === "function") props.onChange(activeKey);
        setCurrentIndex(activeKey);
    };


    return (
        <>
            <TabBar>
                {React.Children.map(props.children, (element, index) => {
                    let {disabled, tab} = element.props;
                    return (
                        <TabBarItem
                            className={currentIndex === element.key ? "active" : ""}
                            onClick={() => onChange(element.key)}
                            key={element.key}
                            disabled={disabled}
                        >
                            {tab}
                        </TabBarItem>
                    );
                })}
            </TabBar>
            <TabContent>
                {React.Children.map(props.children, (element, index) => {
                    
                    return (
                        <div
                            key={element.key}
                            style={{
                                display: currentIndex === element.key ? "block" : "none",
                            }}
                        >
                            {element}
                        </div>
                    );
                })}
            </TabContent>
        </>
    );
}

export {Tabs, TabPane};
