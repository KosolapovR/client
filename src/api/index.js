export const fetchTodoList = async () => {
  const response = await fetch(`${process.env.REACT_APP_TO_DO_ITEMS_API}`);

  return response.json();
};
