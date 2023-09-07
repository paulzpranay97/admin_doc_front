
// USER GUIDE DOC=================================================>>>>

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Document.css';
// function Document() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       axios.get('http://localhost:3000/api/templates') 
//         .then((response) => setData(response.data))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);


  
//     return (
//       <div className="documentation">
//         {/* {data ? ( */}
//           <div className="documentation-content">
//             {data.map((template, templateIndex) => (
//               <div className="template" key={templateIndex}>
//                 <h2 id={template.title} >{template.title}</h2>
                
//                 <p className="overview">{template.overview}</p>
//                 <ol className="action-list">
//                       {template.keyhighlight.map((action, actionIndex) => (
//                         <li key={actionIndex}>{action}</li>
//                       ))}
//                     </ol>
//                 {template.chapters.map((chapter, chapterIndex) => (
//                   <div className="chapter" key={chapterIndex}>
//                     <h3 id={chapter.title1} >{chapter.title1}</h3>
//                     <h3 id='over'>Overview</h3>
//                     <p>{chapter.overview1}</p>
//                     <h3 id='action'>Action</h3>
//                     <ol className="action-list">
//                       {chapter.action1.map((action, actionIndex) => (
//                         <li key={actionIndex}>{action}</li>
//                       ))}
//                     </ol>




//                     <div className="sections">
//                       {chapter.sections.map((section, sectionIndex) => (
//                         <div className="section" key={sectionIndex}>

//                           <h4 id={section.title2}>{section.title2}</h4>

//                           <h3 id='over'>Overview</h3>
//                           <p>{section.overview2}</p>
//                           <h3 id='action'>Action</h3>
//                           <ol className="action-list">
//                             {section.action2.map((action, actionIndex) => (
//                               <li key={actionIndex}>{action}</li>
//                             ))}
//                           </ol>
                          
//                           <div className="sub-sections">
//                             {section.sub_section.map((subSection, subSectionIndex) => (
//                               <div className="sub-section" key={subSectionIndex}>

//                                 <h5 id={subSection.title3}>{subSection.title3}</h5>
                                
//                                 <h3 id='over'>Overview</h3>
//                                 <p>{subSection.overview3}</p>
//                                 <h3 id='action'>Action</h3>
//                                 <ol className="action-list">
//                                   {subSection.action3.map((action, actionIndex) => (
//                                     <li key={actionIndex}>{action}</li>
//                                   ))}
//                                 </ol>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//       </div>
//     );
    
        
//   }
  
//   export default Document;





// DATABASE DOC========================================================================>>>>>



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Document.css';
// function Database() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
      
//       axios.get('http://localhost:3000/api-database/templates') 
//         .then((response) => setData(response.data))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);




   
//     return (
//       <div className="documentation">
//         {data ? (
//           <div className="documentation-content">
//             {data.map((template, templateIndex) => (
//               <div className="template" key={templateIndex}>
//                 <h2 id={template.title} >{template.title}</h2>
                
//                 <p className="overview">{template.overview}</p>
//                 <ol className="action-list">
//                       {template.keypoints.map((action, actionIndex) => (
//                         <li key={actionIndex}>{action}</li>
//                       ))}
//                     </ol>
//                 {template.chapters.map((chapter, chapterIndex) => (
//                   <div className="chapter" key={chapterIndex}>
//                     <h3 id={chapter.title1} >{chapter.id1}. {chapter.title1}</h3>
//                     <h3 id='over'>Overview</h3>
//                     <p>{chapter.des1}</p>
                    




//                             <div className="table-sections-div">
//                             <table className="table-sections-div">
//                               <thead>
//                                 <tr>
//                                   <th>ID</th>
//                                   <th>Title</th>
//                                   <th>Type</th>
//                                   <th>Description</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {chapter.tables.map((section, sectionIndex) => (
//                                   <tr key={sectionIndex}>
//                                     <td>{section.id2}</td>
//                                     <td id={section.title2}>{section.title2}</td>
//                                     <td>{section.type2}</td>
//                                     <td>{section.des2}</td>
//                                   </tr>
//                                 ))}
//                               </tbody>
//                             </table>
//                           </div>

                          
//                     <h3 id='over'>Summary</h3>
//                     <p>{chapter.summary}</p>

//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
    
//   }
  
//   export default Database;




// ADMIN GUIDE DOC==============================================================|>>>>>>>>>>


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Document.css';
function Document() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/api-admin/templates') 
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);


  
    return (
      <div className="documentation">
        {/* {data ? ( */}
          <div className="documentation-content">
            {data.map((template, templateIndex) => (
              <div className="template" key={templateIndex}>
                <h2 id={template.title} >{template.title}</h2>
                
                <p className="overview">{template.overview}</p>
                <ol className="action-list">
                      {template.keyhighlight.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ol>
                {template.chapters.map((chapter, chapterIndex) => (
                  <div className="chapter" key={chapterIndex}>
                    <h3 id={chapter.title1} >{chapter.title1}</h3>
                    <h3 id='over'>Overview</h3>
                    <p>{chapter.overview1}</p>
                    <h3 id='action'>Action</h3>
                    <ol className="action-list">
                      {chapter.action1.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ol>




                    <div className="sections">
                      {chapter.sections.map((section, sectionIndex) => (
                        <div className="section" key={sectionIndex}>

                          <h4 id={section.title2}>{section.title2}</h4>

                          <h3 id='over'>Overview</h3>
                          <p>{section.overview2}</p>
                          <h3 id='action'>Action</h3>
                          <ol className="action-list">
                            {section.action2.map((action, actionIndex) => (
                              <li key={actionIndex}>{action}</li>
                            ))}
                          </ol>
                          
                          <div className="sub-sections">
                            {section.sub_section.map((subSection, subSectionIndex) => (
                              <div className="sub-section" key={subSectionIndex}>

                                <h5 id={subSection.title3}>{subSection.title3}</h5>
                                
                                <h3 id='over'>Overview</h3>
                                <p>{subSection.overview3}</p>
                                <h3 id='action'>Action</h3>
                                <ol className="action-list">
                                  {subSection.action3.map((action, actionIndex) => (
                                    <li key={actionIndex}>{action}</li>
                                  ))}
                                </ol>



                                <div className="sub-sub-sections">
                            {subSection.sub_sub_section.map((subsubSection, subsubSectionIndex) => (
                              <div className="sub-section" key={subsubSectionIndex}>

                                <h5 id={subsubSection.title4}>{subsubSection.title4}</h5>
                                
                                <h3 id='over'>Overview</h3>
                                <p>{subsubSection.overview4}</p>
                                <h3 id='action'>Action</h3>
                                <ol className="action-list">
                                  {subsubSection.action4.map((action, actionIndex) => (
                                    <li key={actionIndex}>{action}</li>
                                  ))}
                                </ol>

                                <div className="sub-sub-sub-sections">
                            {subsubSection.sub_sub_sub_section.map((subsubsubSection, subsubsubSectionIndex) => (
                              <div className="sub-section" key={subsubsubSectionIndex}>

                                <h5 id={subsubsubSection.title5}>{subsubsubSection.title5}</h5>
                                
                                <h3 id='over'>Overview</h3>
                                <p>{subsubsubSection.overview5}</p>
                                <h3 id='action'>Action</h3>
                                <ol className="action-list">
                                  {subsubsubSection.action5.map((action, actionIndex) => (
                                    <li key={actionIndex}>{action}</li>
                                  ))}
                                </ol>

                                      
                                
                              </div>
                            ))}
                          </div>
                                
                              </div>
                            ))}
                          </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

      </div>
    );
    
        
  }
  
  export default Document;