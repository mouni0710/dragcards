import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import CardContainer from './CardContainer';
import message from './images/message.png';

class BodyLayout extends Component {
    
    render = () => {
        const {ticketList, dragEnd,
        onDrop,
        onDragOver,
        onDragStart} = this.props;
        const tickets = {
            received: [],
            progress: [],
            delivered: [],
            pickedUp: [],
        }
        ticketList.receivedOrders.forEach((data) => {
            if (tickets[data.type] !== undefined) {
                tickets[data.type].push(data);
            }
        })
        ticketList.progressOrders.forEach((data) => {
            if (tickets[data.type] !== undefined) {
                tickets[data.type].push(data);
            }
        })
        ticketList && ticketList.deliveredOrders.forEach((data) => {
            if (tickets[data.type] !== undefined) {
                tickets[data.type].push(data);
            }
        })
        ticketList.pickedUpOrders.forEach((data) => {
            if (tickets[data.type] !== undefined) {
                tickets[data.type].push(data);
            }
        })

        return (
            <div className="dashboard">
                    <Grid className="cardLayout">
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        <Grid.Column className="orders">
                                        <div 
                                                onDragOver={(event)=> onDragOver(event)}
                                                onDrop={(event)=>onDrop(event, "received")}
                                                >
                                                <CardContainer 
                                                dragEnd={dragEnd}
                                                onDragStart={onDragStart}
                                                name="RECEIVED ORDERS" cardList={tickets.received} />
                                       </div>
                                        </Grid.Column> 
                                        <Grid.Column className="orders">
                                        <div 
                                            onDragOver={(event)=> onDragOver(event)}
                                            onDrop={(event)=>onDrop(event, "progress")}
                                            >
                                            <CardContainer
                                           dragEnd={dragEnd}
                                           onDragStart={onDragStart}
                                             name="ORDER IN PROGRESS" cardList={tickets.progress} />
                                       </div>

                                        </Grid.Column>
                                        <Grid.Column className="orders">
                                             <div 
                                            onDragOver={(event)=> onDragOver(event)}
                                            onDrop={(event)=>onDrop(event, "delivered")}
                                            >
                                            <CardContainer 
                                            dragEnd={dragEnd}
                                            onDragStart={onDragStart}
                                            name="ORDER IS READY FOR DELIVERY" cardList={tickets.delivered} />
                                       </div>
                                        </Grid.Column>
                                        <Grid.Column className="orders">
                                            <div 
                                            onDragOver={(event)=>onDragOver(event)}
                                            onDrop={(event)=>onDrop(event, "pickedUp")}
                                            >
                                            <CardContainer
                                             dragEnd={dragEnd}
                                             onDragStart={onDragStart}
                                            name="ORDER PICK UP" cardList={tickets.pickedUp} />
                                        </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <div className="imgWrap">
                        <Image src={message} alt="message" className="msgPopup" />
                    </div>
                    </div>
        )
    }
}
  
export default BodyLayout;