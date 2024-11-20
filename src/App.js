import React, { useState } from "react";
import TreeMenu from "./component/TreeMenu.js";
import Modal from "./component/modal.jsx";
import Accordion from "./component/accordion.js";
import "./index.css";
import logo from "./logo.png"; 


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //checking if modal box is open or not
  const [modalContent, setModalContent] = useState(""); //storing the modal content
  const [selectedNode, setSelectedNode] = useState(null); //currently selected tree node
  const [darkMode, setDarkMode] = useState(false); //for dark mode (not fully developed, was just trying something)

  const handleNodeClick = (nodeName) => {
    setSelectedNode(nodeName);
    setIsModalOpen(false); // Prevent modal from being triggered here if not needed.
  };

  const handleOpenModal = (nodeName) => { 
    setModalContent(nodeName);
    setIsModalOpen(true);
  };

  const toggleDarkMode = () => { //to toggle dark mode button
    setDarkMode(!darkMode);
  };

  //tree menu data
  const menuData = [
    {
      id: "root",
      name: "Root",
      children: [
        {
          id: "parentA",
          name: "Parent A",
          children: [
            { id: "childA1", name: "Child A1" },
            {
              id: "childParentA2",
              name: "Child Parent A2",
              children: [
                { id: "childA21", name: "Child A21" },
                { id: "childA22", name: "Child A22" },
              ],
            },
          ],
        },
        {
          id: "parentB",
          name: "Parent B",
          children: [
            { id: "childB1", name: "Child B1" },
            { id: "childB2", name: "Child B2" },
            {
              id: "childParentB3",
              name: "Child Parent B3",
              children: [],
            },
          ],
        },
      ],
    },
  ];
  //data for accordion 
  const categoriesData = [
    {
      title: 'Payouts for limitless use cases',
      content: `TabaPay delivers instant, reliable payouts to any card or account, optimized for cost, speed, and diverse business needs.

Whether you need to pay gig workers, process insurance claims, or manage vendor payouts, TabaPay’s platform supports a broad range of use cases, ensuring funds move seamlessly.

With intelligent routing, TabaPay finds the optimal balance between speed and cost, providing real-time transfers to over 4 billion cards and bank accounts worldwide.

Designed for scalability, TabaPay’s API makes it easy to integrate and automate payouts, enabling your business to grow effortlessly.

Security and compliance are at the forefront, with PCI compliance ensuring every transaction is safe.

With transparent pricing, scalable infrastructure, and flexible payout options, TabaPay empowers businesses to manage payments efficiently, boosting recipient satisfaction and enhancing overall customer experience.`
    },
    {
      title: 'Payment processing for every customer journey',
      content: `TabaPay offers instant, reliable payment processing for every step of your customer’s journey, whether they are purchasing goods, subscribing to a service, or making a one-time payment.

Accept payments from any card or account with a platform designed to optimize cost, speed, and user experience.

TabaPay’s intelligent routing technology ensures transactions are processed with the perfect balance of cost-effectiveness and speed, delivering a seamless payment experience to customers.

With a highly scalable API, TabaPay makes integration straightforward, enabling businesses of all sizes to accept payments effortlessly.

The platform is built with security and compliance in mind, adhering to the highest industry standards like PCI compliance.

By combining speed, reliability, and flexible payment solutions, TabaPay empowers businesses to enhance their payment experience, ultimately boosting customer satisfaction and loyalty.`
    },
    { title: 'PayFac', content: 'Coming Soon...' },
    { title: 'Careers', content: 'DevOps Engineer - Think you can manage the gears behind the scenes and take charge of the entire end-to-end process? TabaPay is seeking a DevOps Engineer who can make everything work like magic. Interested in joining the crew?' }
  ];


  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1>TabaPay Take Home Assessment</h1>
        </div>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <div className="app-container">
        <div className="tree-nav">
          <h1>Dynamic Tree Menu</h1>
          <TreeMenu data={menuData} handleNodeClick={handleNodeClick} />
        </div>
        <div className="body-page">
          {selectedNode ? (
            <>
              <h2>{selectedNode}</h2>
              <button onClick={() => handleOpenModal(selectedNode)}>View Details</button>
              <Accordion categories={categoriesData} />
            </>
          ) : (
            <>
              <h2>Select an item from the menu</h2>
              <Accordion categories={categoriesData} />
            </>
          )}
        </div>
      </div>
      <footer className="footer">
        <h2>2024 TabaPay, Inc.</h2>
      </footer>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{modalContent}</h2>
        </Modal>
      )}
    </div>
  );
};

export default App;
