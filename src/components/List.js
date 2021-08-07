import React from 'react';
import Card from './Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';


export default function List({ list, index }) {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef} className="orders">
          <div 
          style={{ padding: '0 10px' }}
           {...provided.dragHandleProps}>
           <div className="listHead">{list.title}</div>
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                 className="cardWrap"
                  {...provided.droppableProps}
                >
                  {list.cards.length === 0 ?
                  (
                    <h3>No Data Available</h3>
                  ) : (
                  list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  )))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
}
