import React, { useState } from "react";
import TreeNode from "./TreeNode";

const TreeMenu = ({ data, handleNodeClick }) => {
  const [openNodes, setOpenNodes] = useState({ root: true }); //to track which nodes are open

  const toggleNode = (nodeId, parentId) => { //to toggle the open close state of the node
    setOpenNodes((prev) => {
      const newState = { ...prev };

      //if toggling Parent A or Parent B (children of root)
      if (parentId === "root") {
        Object.keys(newState).forEach((key) => {
          if (key.startsWith("parent")) newState[key] = false; //collapse other parents when one parent is open
        });
      }

      //toggle the selected node
      newState[nodeId] = !prev[nodeId];
      return newState;
    });
  };

  const isOpen = (nodeId) => openNodes[nodeId] || false; //to check if a node is currently open

  const renderTree = (nodes, parentId) =>
    nodes.map((node) => (
      <TreeNode
        key={node.id}
        node={node}
        isOpen={isOpen(node.id)}
        onToggle={() => toggleNode(node.id, parentId)}
        handleNodeClick={handleNodeClick} //this is the click handler for modal
        renderChildren={() =>
          node.children ? renderTree(node.children, node.id) : null
        }
      />
    ));

  return <div>{renderTree(data, null)}</div>;
};

export default TreeMenu;