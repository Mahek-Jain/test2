import React from "react";

const TreeNode = ({ node, isOpen, onToggle, handleNodeClick, renderChildren }) => {
  return (
    <div>
      <span
        onClick={() => {
          onToggle(node.id); //to toggle the node's open or close state
          handleNodeClick(node.name); //passing node name to modal
        }}
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        {node.children ? (isOpen ? "▼" : "►") : "◉"} {node.name} 
      </span>
      {isOpen && ( //render children if node is open
        <div style={{ paddingLeft: "20px" }}>
          {renderChildren && renderChildren()}
        </div>
      )}
    </div>
  );
};

export default TreeNode;