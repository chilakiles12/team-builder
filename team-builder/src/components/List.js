import React from 'react';

const List = props => {
  return (
    <div>
      {props.memberList.map(item => {
        return (
          <div className="item" key="{note.id}">
            <h2>{item.title}Item Title</h2>
            <p>{item.body}Item Body</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
