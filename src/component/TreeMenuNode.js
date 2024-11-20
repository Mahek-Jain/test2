import React, { useState } from "react";
import TreeNode from "./TreeNode";

const TreeMenuNode = ({ node, handleNodeClick }) => {
  const [openNodes, setOpenNodes] = useState({}); //to track open or close state of children

  const toggleNode = (nodeId) => {
    setOpenNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId], //simple toggle function
    }));
  };

  const isOpen = openNodes[node.id] || false; //check if child node is open

  return (
    <TreeNode
      node={node}
      isOpen={isOpen}
      onToggle={() => toggleNode(node.id)}
      handleNodeClick={handleNodeClick}
    />
  );
};

export default TreeMenuNode;