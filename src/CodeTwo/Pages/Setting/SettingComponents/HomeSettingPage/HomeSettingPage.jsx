import React from "react";
import "./HomeSettingPage.scss";
import TagsOperation from "./HomeSettingPageComponents/Tags/TagsOperation";
import CategoriesOperation from "./HomeSettingPageComponents/Categories/CategoriesOperation";

const HomeSettingPage = () => {
  return (
    <div className="HomeSettingPage">
      <div className="HomeSettingBox1">
        <TagsOperation></TagsOperation>
      </div>
      <div className="HomeSettingBox2">
        <CategoriesOperation></CategoriesOperation>
      </div>
      <div className="HomeSettingBox3"></div>
      <div className="HomeSettingBox4"></div>
      <div className="HomeSettingBox5"></div>
      <div className="HomeSettingBox6"></div>
    </div>
  );
};

export default HomeSettingPage;








// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./HomeSettingPage.scss";
// import TagsOperation from "./HomeSettingPageComponents/Tags/TagsOperation";

// const HomeSettingPage = () => {
//   const [boxes, setBoxes] = useState([
//     { id: "box1", content: <TagsOperation /> },
//     { id: "box2", content: <TagsOperation /> },
//     { id: "box3", content: <TagsOperation /> },
//     { id: "box4", content: <TagsOperation /> },
//     { id: "box5", content: <TagsOperation /> },
//     { id: "box6", content: null },
//   ]);

//   // 处理拖拽开始的事件
//   const onDragStart = () => {
//     /* 可以在此加入一些逻辑，比如改变颜色或提高拖拽元素的z-index */
//   };

//   // 处理拖拽更新的事件
//   const onDragUpdate = (update) => {
//     /* 可以在此加入一些逻辑，比如改变元素的大小或透明度 */
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) {
//       return;
//     }
//     if (source.index === destination.index) {
//       return;
//     }

//     const newBoxes = Array.from(boxes);
//     const [removed] = newBoxes.splice(source.index, 1);
//     newBoxes.splice(destination.index, 0, removed);

//     setBoxes(newBoxes);
//   };

//   return (
//     <DragDropContext onDragStart={onDragStart} onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
//       <Droppable droppableId="droppable-HomeSetting" direction="vertical">
//         {(provided) => (
//             <div
//                 className="HomeSettingPage"
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//             >
//                 {boxes.map((box, index) => (
//                     <Draggable key={box.id} draggableId={box.id} index={index}>
//                         {(provided, snapshot) => (
//                             <div
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                                 className={`HomeSettingBox ${box.id} ${
//                                   snapshot.isDragging ? "dragging" : ""
//                                 }`}
//                             >
//                                 {box.content}
//                             </div>
//                         )}
//                     </Draggable>
//                 ))}
//                 {provided.placeholder}
//             </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default HomeSettingPage;