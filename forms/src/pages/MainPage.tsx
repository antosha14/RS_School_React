import { Card } from "@components/Card/Card";
import { selectUsers } from "@store/selectors";
import { useSelector } from "react-redux";

export function MainPage() {
  const users = useSelector(selectUsers);
  return (
    <div className="text-white m-6 text-4xl">
      {users.length > 0 ? (
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
          {users.map((user, index) => {
            return (
              <Card
                user={user}
                index={index}
                key={`${user.email}a${index}`}
              ></Card>
            );
          })}
        </div>
      ) : (
        <div>
          There aren't any users created yet. Create them using one of the forms
        </div>
      )}
    </div>
  );
}
