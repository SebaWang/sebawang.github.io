import { ReactNode } from "react";
import Draggable from "react-draggable";

interface DraggableCardProps {
    children: ReactNode;
  }

const DraggableCard: React.FC<DraggableCardProps> = ({ children }) => {
    return(<>
    <Draggable>
      {children}
    </Draggable>
    </>)
}

export default DraggableCard;