import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Header';
import TicketDashBoard from './TicketDashBoard';
import ticketList from './ticketList.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketList,
      activeTab: 'all',
      isLoading: false,
    }
  }

  handleTabChange = (name) => {
    if (name === 'myTickets' || name === 'updated') {
      this.setState({
        ticketList : {
          receivedOrders: [],
          progressOrders: [],
          deliveredOrders: [],
          pickedUpOrders: [],
        },
        activeTab: name,
      });
    } else {
      this.setState({
        ticketList,
        activeTab: name,
      });
    }
  }

  onDragStart = (event, data) => {
    event.dataTransfer.setData("orderNo", data.orderId);
    this.dragged = event.currentTarget;
  }
  
  onDragOver = (event) => {
    event.preventDefault();
    this.over = event.target;
  }
  
  onDrop = (event, type) => {
    const {ticketList} = this.state;
      let orderNo = event.dataTransfer.getData("orderNo");
      let cardDetails = ticketList.receivedOrders.filter((task) => {
          if (task.orderId === orderNo) {
              task.type = type;
          }
          return task;
      });
      let cardDetails1 = ticketList.progressOrders.filter((task) => {
        if (task.orderId === orderNo) {
            task.type = type;
        }
        return task;
    });
    let cardDetails2 = ticketList.deliveredOrders.filter((task) => {
      if (task.orderId === orderNo) {
          task.type = type;
      }
      return task;
  });
  let cardDetails3 = ticketList.pickedUpOrders.filter((task) => {
    if (task.orderId === orderNo) {
        task.type = type;
    }
    return task;
});
      this.setState({
          ...this.state,
          ticketList: {
            receivedOrders: cardDetails,
            progressOrders: cardDetails1,
            deliveredOrders: cardDetails2,
            pickedUpOrders: cardDetails3,
          }
      });
  }
  
  dragEnd = (event) => {
    // let data = this.state.tasks;
    // let from = Number(this.dragged.dataset.id);
    // let to = Number(this.over.dataset.id);
    // data.splice(to, 0, data.splice(from, 1)[0]);
    // this.setState({tasks: data});
  }
  

  render () {
    const {ticketList, activeTab, isLoading} = this.state;
    return (
      
        <div className="draggableCards">
                <Header
                  handleTabChange={this.handleTabChange} 
                  activeTab={activeTab}
                  isLoading={isLoading}
                />
               <TicketDashBoard
               dragEnd={this.dragEnd}
               onDrop={this.onDrop}
               onDragOver={this.onDragOver}
               onDragStart={this.onDragStart}
                  ticketList={ticketList}
               />    
        </div>
      
    )
  }
}

export default App;
