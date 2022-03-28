import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/data/tasks';

export const Info = () => {
  const tasksList = useTracker(() => {
    return TasksCollection.find().fetch();
  });

  return (
    <div>
      <h2> Tasks List </h2>
      <ul>
        { tasksList.map( task => <li key={ task._id }>{ task.title }</li> ) }
      </ul>
    </div>
  );
};