import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/data/tasks';

Meteor.startup(() => {
  TasksCollection.remove({});
  if (TasksCollection.find().count() === 0) {
    for (let i = 0; i < 10; i++) {
      TasksCollection.insert({
        title: `Task #${i + 1}`,
        key: i + 1,
        createdAt: new Date()
      })
    }
  }
});
