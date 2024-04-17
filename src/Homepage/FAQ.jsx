import React, { useState } from 'react';
import './FAQ.css'; 
import { FaMedkit, FaMinus } from 'react-icons/fa'; // Import icons from React Icons

function FAQ() {
 
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData =
            [
               {
                 question: 'What is Project Plan ?',
                 answer: `A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing a civil engineering project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
                 .`,
               },
               {
                 question: 'Why We Need Plan?',
                 answer: `Civil project plans are essential for several reasons:

                 Clarity and Direction: A well-defined project plan provides clarity on the objectives, scope, and methodology of the project, ensuring that all stakeholders are aligned on the project's goals and how they will be achieved.`
                 
                 
               },
               {
                
                question: 'Are we provide kitchen/living room/bathroom services?',
                answer: `No, While our primary focus is on civil engineering and infrastructure projects, including urban planning, transportation, and environmental engineering, we do not currently offer services for residential interior design projects such as kitchen, living room, or bathroom redesigns...`
                
               },
               {
                question:  'Do We offer interior design services for single rooms or entire homes?',
                answer: `As a civil engineering consultancy firm, Rajendra Engineering Consultancy primarily specializes in civil engineering and infrastructure projects. While we don't currently offer interior design services for single rooms or entire homes, we appreciate your interest. If you have any civil engineering or infrastructure-related projects, including urban planning, transportation, or environmental engineering needs, we would be delighted to discuss how we can assist you. Please feel free to reach out to us with any further questions or inquiries. Thank you for considering Rajendra Engineering Consultancy.`,
              },
              {
               question: 'What is your process for designing and implementing home renovation projects?',
               answer: `Initial Consultation: We begin by meeting with the client to understand their renovation goals, budget, timeline, and any specific requirements or preferences they may have.

               Site Assessment: Our team conducts a thorough assessment of the property to evaluate its condition, identify structural considerations, and assess any potential challenges or constraints.
               
               Concept Development: Based on the client's requirements and site assessment, we develop conceptual design options that address their needs while considering factors such as space utilization, functionality, and aesthetics.
               
               Design Development: Once the client approves a concept, we proceed to develop detailed design plans, including architectural drawings, specifications, and material selections, in collaboration with architects and designers as needed.`
               
               ,
             },
           ];

  return (
    <div>

     <div>
     {/* <img className='faq-image' src="../src/assets/3.png" alt="" /> */}
    <div className="faq-container">
     <h1 className='h1'>FAQ</h1>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span className={`toggle-icon ${activeIndex === index ? 'active' : ''}`}>{activeIndex === index ? <FaMinus /> : <FaMedkit /> }</span>
          </div>
          <div className={`answer ${activeIndex === index ? 'answer-visible' : ''}`}>{item.answer}</div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default FAQ;
