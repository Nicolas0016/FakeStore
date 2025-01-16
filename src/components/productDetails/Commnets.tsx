import { useRef, useState } from "react";
import { comments } from "../../mocks/commnets.json";
import { Like } from "../Icons";

export default function Comments() {
  const listRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (listRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - listRef.current.offsetLeft);
      setScrollLeft(listRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !listRef.current) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplica para ajustar la sensibilidad
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto">
      <ul
        ref={listRef}
        className={`flex overflow-x-auto gap-3 px-6 py-4 scrollbar-hide cursor-${
          isDragging ? "grabbing" : "grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {comments.slice(0, 5).map((comment) => (
          <li
            className="min-w-[250px] max-w-[300px] bg-white rounded-lg shadow-lg p-4 relative "
            key={comment.id}
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={`https://unavatar.io/${comment.user.username}`}
                alt={comment.user.username}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold">@{comment.user.username}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 pointer-events-none">
              {comment.body}
            </p>
            <div className="flex items-center gap-2 absolute bottom-2 right-2">
              <span className="text-sm">{comment.likes}</span>
              <Like />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
