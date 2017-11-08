import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import DragDropItemTypes from './DragDropItemTypes';

const listSource = {
  beginDrag(props) {
    return props;
  },
};

const collectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const ElementContainer = ({ connectDragSource, sourceType }) => {
  if (sourceType === DragDropItemTypes.SAMPLE) {
    return connectDragSource(
      <span className="fa fa-arrows dnd-arrow-enable text-info" />,
      { dropEffect: 'copy' },
    );
  } else if (sourceType === DragDropItemTypes.GENERALPROCEDURE) {
    return connectDragSource(
      <span className="fa fa-home dnd-arrow-enable text-info" />,
    );
  }
  return <span className="fa fa-arrows dnd-arrow-disable" />;
};

export default DragSource(props => props.sourceType, listSource,
  collectSource)(ElementContainer);

ElementContainer.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  sourceType: PropTypes.string.isRequired,
};
