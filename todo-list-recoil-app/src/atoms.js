import { atom } from 'recoil';

export const todos = atom({
  key: 'todos',
  default: [
    { text: 'Learn React', isCompleted: true },
    { text: 'New Todo', isCompleted: false },
  ],
});