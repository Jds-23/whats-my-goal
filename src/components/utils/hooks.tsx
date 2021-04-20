import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/StateProvider";

export const useHooks = () => {
  const { tasks, setTasks, nofActiveTask, setNofActiveTask } = useStateValue()!;
  const addTask = (title: string) => {
    if (title !== "") {
      setTasks([...tasks, { title, completed: false, id: uuidv4() }]);
      setNofActiveTask(nofActiveTask + 1);
    }
  };
  const handleDone = (id: string) => {
    let mapped = tasks.map((task) => {
      if (task.id === id) {
        if (!task.completed) {
          setNofActiveTask(nofActiveTask - 1);
        } else {
          setNofActiveTask(nofActiveTask + 1);
        }
        return { ...task, completed: !task.completed };
      } else {
        return { ...task };
      }
    });
    setTasks(mapped);
  };
  const handleDelete = (id: string) => {
    let filtered = tasks.filter((task) => {
      if (!task.completed && task.id === id) {
        setNofActiveTask(nofActiveTask - 1);
      }
      return task.id !== id;
    });
    setTasks(filtered);
  };
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };
  return {
    nofActiveTask,
    setNofActiveTask,
    tasks,
    setTasks,
    addTask,
    handleDone,
    handleDelete,
    handleOnDragEnd,
  };
};
