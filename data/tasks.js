import { Mongo } from 'meteor/mongo';

const TASKS_COLLECTION_NAME = process.env.MONGO_COLLECTION_TASKS || 'tasks'
export const TasksCollection = new Mongo.Collection(TASKS_COLLECTION_NAME);