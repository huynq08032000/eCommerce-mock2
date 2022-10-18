import React from "react";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './css/index.scss'
import CustomerReviewsComponent from "./CustomerReviewsComponent";

const { TabPane } = Tabs;

const ProductTabComponent = () => {
    return (
        <>
            <Tabs defaultActiveKey="2" centered style={{ padding: '10px 30px' }}>
                <TabPane tab="Description" key="1" >
                    Description
                </TabPane>
                <TabPane tab="Reviews" key="2">
                    <div style={{ padding: '10px 20px'}}>
                        <CustomerReviewsComponent />
                    </div>
                </TabPane>
            </Tabs>
        </>
    )
}

export default ProductTabComponent