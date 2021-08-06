import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class OrderDetailsLayout extends Component {
   
    render = () => {
        const {cardList, name, onDragStart, dragEnd} = this.props;
        return (
            <>
                <div>
                    <h4 className="card_header">{name}({cardList.length})</h4>
                    <div className="card_layout">
                        {
                            (cardList.length === 0)
                            ? (
                                <>
                                <h3>No Data Available</h3>
                                </>
                            ) : (
                                <>
                                {
                                    cardList.map((data, index) => {
                                        return (
                                            <>
                                            <div
                                             data-id={index}
                                             key={index}
                                              onDragStart = {(event) => onDragStart(event, data )}
                                              onDragEnd={dragEnd.bind(this)}
                                              draggable
                                             className={data.status === "active" ? "card" : 'card_inactive'} >
                                                <div className="card_details">
                                                <span className="card_id">{data.orderId}</span>
                                                <span className="response_due">Response due</span>
                                                <div className="card_order_no">
                                                <b>Order No: {data.orderNo}</b> 
                                                </div>
                                                <div>
                                                    {data.items}
                                                </div>
                                                <div className="card_date">
                                                    <div>
                                                        DUE: <span className="dateTxt">{data.dueDate}</span>
                                                    </div>
                                                    <div className="assignWrap">
                                                        <span className="assignTxt">ASSIGNED TO</span>
                                                         <div className="blue_circle" />
                                                    </div>
                                                </div>
                                                </div> 
                                            </div>
                                            </>
                                        )
                                    })
                                }
                                </>
                            )
                        }
                    </div> 
                </div>
            </>
        )
    }
}
  
export default OrderDetailsLayout;