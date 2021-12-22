import { db } from '../firebase/firebase-config';

export const loadToDos = async (uid) => {
  const todos = [];
  try {
    const todosSnap = await db.collection(`${uid}/todos/tasks`).get();
    todosSnap.forEach((snapSon) => {
      todos.push({ id: snapSon.id, ...snapSon.data() });
    });
  } catch (err) {
    console.log(err);
    Swal.fire('Error in LoadToDos', err.message, 'error');
  }

  return todos;
};
