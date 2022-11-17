import { useGlobalContext } from "../context/appContext";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list, getEditTask }) => {
  const { deleteTask } = useGlobalContext();
  // console.log(list);

  return (
    <>
      {list.map((item) => {
        const { _id, name } = item;
        return (
          <div key={_id}>
            <p>{name}</p>
            <button onClick={() => getEditTask(_id, name)}>
              <FaEdit />
            </button>
            <button onClick={() => deleteTask(_id)}>
              <FaTrash />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
