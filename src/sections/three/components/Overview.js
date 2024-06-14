import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import InviteMemberModal from "./InviteMemberModal";
import goalLogo from "../assets/images/goal-logo.jpg";
import portfolioLogo from "../assets/images/portfolio-logo.png";
import resourcesLogo from "../assets/images/resources-logo.png";
import "./Overview.css";
import PropTypes from 'prop-types'; // Import PropTypes

const Overview = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Project Description");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [members, setMembers] = useState([
    { name: "Mayur Chauhan", email: "owner@example.com", role: "Owner" },
  ]);
  const [goals, setGoals] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [keyResources, setKeyResources] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [status, setStatus] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    if (title.trim() === "") {
      setTitle("Project Description");
    }
    setIsEditing(false);
  };

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    saveContent(newEditorState);
  };

  const saveContent = (newEditorState) => {
    const content = JSON.stringify(
      convertToRaw(newEditorState.getCurrentContent())
    );
    console.log("Content in JSON:", content);
    localStorage.setItem("content", content);
  };

  const openInviteModal = () => {
    setIsInviteModalOpen(true);
  };

  const closeInviteModal = () => {
    setIsInviteModalOpen(false);
  };

  const handleInvite = (member) => {
    setMembers([...members, member]);
  };

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const addGoal = () => {
    setGoals([...goals, { text: "" }]);
  };

  const updateGoalText = (index, text) => {
    const updatedGoals = goals.map((goal, i) =>
      i === index ? { ...goal, text } : goal
    );
    setGoals(updatedGoals);
  };

  const addPortfolioItem = () => {
    setPortfolioItems([
      ...portfolioItems,
      { name: "", description: "", link: "" },
    ]);
  };

  const updatePortfolioItem = (index, property, value) => {
    const updatedItems = portfolioItems.map((item, i) =>
      i === index ? { ...item, [property]: value } : item
    );
    setPortfolioItems(updatedItems);
  };

  const addResource = () => {
    setKeyResources([...keyResources, { name: "", link: "", files: [] }]);
  };

  const updateResource = (index, property, value) => {
    const updatedResources = keyResources.map((resource, i) =>
      i === index ? { ...resource, [property]: value } : resource
    );
    setKeyResources(updatedResources);
  };

  const handleFileChange = (index, files) => {
    const updatedResources = keyResources.map((resource, i) =>
      i === index
        ? { ...resource, files: [...resource.files, ...files] }
        : resource
    );
    setKeyResources(updatedResources);
  };

  const addMilestone = () => {
    setMilestones([...milestones, { text: "", completed: false }]);
  };

  const updateMilestoneText = (index, text) => {
    const updatedMilestones = milestones.map((milestone, i) =>
      i === index ? { ...milestone, text } : milestone
    );
    setMilestones(updatedMilestones);
  };

  const toggleMilestoneCompletion = (index) => {
    const updatedMilestones = milestones.map((milestone, i) =>
      i === index
        ? { ...milestone, completed: !milestone.completed }
        : milestone
    );
    setMilestones(updatedMilestones);
  };

  const handleStatusClick = (newStatus) => {
    setStatus(newStatus);
  };

  // Load content from localStorage if available
  useEffect(() => {
    const savedContent = localStorage.getItem("content");
    if (savedContent) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      );
    }
  }, []);

  return (
    <div className="Overview-container">
      {/* first container */}
      <div className="container first-container">
        <div className="overview-content">
          {/* Project Description title */}
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleBlur}
              autoFocus
            />
          ) : (
            <h2 onClick={() => setIsEditing(true)}>{title}</h2>
          )}

          {/* Project Description */}
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              options: ["inline", "blockType", "list", "textAlign"],
              inline: {
                inDropdown: false,
                options: ["bold", "italic", "underline", "strikethrough"],
              },
              list: {
                inDropdown: false,
                options: ["unordered", "ordered"],
              },
              textAlign: {
                inDropdown: false,
                options: ["left", "center", "right", "justify"],
              },
              blockType: {
                inDropdown: false,
                options: [
                  "Normal",
                  "H1",
                  "H2",
                  "H3",
                  "H4",
                  "H5",
                  "H6",
                  "Blockquote",
                  "Code",
                ],
              },
            }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            placeholder="What's this project about?"
          />
          <h3 className="h2-title">Project roles</h3>
          <div className="project-members">
            <button className="add-member-btn" onClick={openInviteModal} type='button'>
              <span> + </span>Add Member
            </button>
            <InviteMemberModal
              isOpen={isInviteModalOpen}
              closeModal={closeInviteModal}
              handleInvite={handleInvite}
            />
            <div className="members-list">
              {members.map((member, index) => (
                <div key={index} className="member">
                  {member.name} ({member.role})
                  <button
                    type='button'
                    className="delete-member-btn"
                    onClick={() => handleRemoveMember(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
          <h3 className="h2-title">Connected goals</h3>
          <div className="block-container">
            <div className="block-left-section">
              <img src={goalLogo} alt="goal logo" className="block-logo" />
            </div>
            <div className="block-right-section">
              <p>
                Connect or create a goal to link this project to a larger
                purpose.
              </p>
              {/* <button> + Add goal</button> */}
              <button type='button' onClick={addGoal}>Add Goal</button>
              <div className="goal-list">
                {goals.map((goal, index) => (
                  <input
                    key={index}
                    type="text"
                    value={goal.text}
                    onChange={(e) => updateGoalText(index, e.target.value)}
                    placeholder="Write your goal"
                  />
                ))}
              </div>
            </div>
          </div>
          <h3 className="h2-title">Connected portfolios</h3>
          <div className="block-container">
            <div className="block-left-section">
              <img src={portfolioLogo} alt="goal logo" className="block-logo" />
            </div>
            <div className="block-right-section">
              <p>
                Connect a portfolio to link this project to a larger body of
                work.
              </p>
              {/* <button> + Add to portfolio</button> */}
              <button type='button' onClick={addPortfolioItem}>Add Portfolio Item</button>
              <div className="goal-list">
                {portfolioItems.map((item, index) => (
                  <div key={index} className="portfolio-item">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        updatePortfolioItem(index, "name", e.target.value)
                      }
                      placeholder="Portfolio Item Name"
                    />
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) =>
                        updatePortfolioItem(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      placeholder="Portfolio Item Description"
                    />
                    <input
                      type="text"
                      value={item.link}
                      onChange={(e) =>
                        updatePortfolioItem(index, "link", e.target.value)
                      }
                      placeholder="Portfolio Item Link"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h3 className="h2-title">Key resources</h3>
          <div className="block-container">
            <div className="block-left-section">
              <img src={resourcesLogo} alt="goal logo" className="block-logo" />
            </div>
            <div className="block-right-section">
              <p>
                Align your team around a shared vision with a project brief and
                supporting resources.
              </p>
              <div className="btns-container">
                <button type='button' onClick={addResource}>Add Resource</button>
              </div>
              <div className="resources-list">
                {keyResources.map((resource, index) => (
                  <div key={index} className="resource-item">
                    <input
                      type="text"
                      value={resource.name}
                      onChange={(e) =>
                        updateResource(index, "name", e.target.value)
                      }
                      placeholder="Resource Name"
                    />
                    <input
                      type="text"
                      value={resource.link}
                      onChange={(e) =>
                        updateResource(index, "link", e.target.value)
                      }
                      placeholder="Resource Link"
                    />
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFileChange(index, e.target.files)}
                    />
                    <div className="uploaded-files">
                      {resource.files &&
                        Array.from(resource.files).map((file, fileIndex) => (
                          <div key={fileIndex}>{file.name}</div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="milestone-container">
            <div className="milestone-header">
              <h3 className="h2-title">Milestones</h3>
              <button type='button' className="add-milestone-btn" onClick={addMilestone}>
                {" "}
                +{" "}
              </button>
            </div>
            <div className="milestone-list">
              {milestones.map((milestone, index) => (
                <div key={index} className="milestone-item">
                  <input
                    type="text"
                    value={milestone.text}
                    onChange={(e) => updateMilestoneText(index, e.target.value)}
                    placeholder="Write your milestone"
                  />
                  <input
                    type="checkbox"
                    checked={milestone.completed}
                    onChange={() => toggleMilestoneCompletion(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="container second-container">
        <h2 className="question">What`s the status?</h2>
        <div className="answers">
          <span className="green" onClick={() => handleStatusClick("On track")}>
            🟢 On track
          </span>
          <span className="yellow" onClick={() => handleStatusClick("At risk")}>
            🟡 At risk
          </span>
          <span className="red" onClick={() => handleStatusClick("Off track")}>
            🔴 Off track
          </span>
        </div>
        {status && (
          <div className="status-display">
            <h3>Current Status: {status}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
