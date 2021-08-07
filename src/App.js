import React, { useState } from 'react';
import List from './components/List';
import Header from './components/Header';
import cardDetail from './cardDetails';
import {Image} from 'semantic-ui-react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import message from './images/message.png';
import './App.css';



export default function App() {
  const [data, setData] = useState(cardDetail);
  const [activeTab, setActiveTab] = useState('all');

 const  handleTabChange = (name) => {
      setActiveTab(name);
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log('', destination, '', source, draggableId);

    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
      <div
      >
        <Header handleTabChange={handleTabChange} activeTab={activeTab} />
        <div className="dashboard">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="app" type="list" direction="horizontal">
            {(provided) => (
              <div
                style={{ display: 'flex'}}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.listIds.map((listId, index) => {
                  const list = data.lists[listId];
                  return <List list={list} key={listId} index={index} />;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="imgWrap">
            <Image src={message} alt="message" className="msgPopup" />
        </div>
        </div>
      </div>
  );
}
