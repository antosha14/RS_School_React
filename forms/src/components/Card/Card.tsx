import { User } from "@store/UserSlice";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "@store/selectors";

export function Card({ user, index }: { user: User; index: number }) {
  const users = useSelector(selectUsers);
  const [highlightNeeded, setHighlight] = useState(false);
  const timerRef = useRef<number | null>();

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (index === users.length - 1) {
      setHighlight(true);
      timerRef.current = setTimeout(() => {
        setHighlight(false);
      }, 3000);
    } else {
      setHighlight(false);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [index, users.length]);

  return (
    <div
      className={`flex flex-col w-67 h-100 bg-gray-900 p-6 m-5 ${highlightNeeded ? "border-8 animate-flash [animation-duration:_1s]" : "border-red-500 border"} text-lg text-red-500`}
    >
      <img className="h-32 mb-6" src={user.picture} alt="Uploaded Image" />
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Country: {user.country}</p>
    </div>
  );
}
