

// USER GUIDE DOC=================================================>>>>

// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import './Sidebar.css';

// const Sidebar = ({ isSidebarOpen, onHamburgerClick}) => {
   
//     const [activeSubList, setActiveSubList] = useState(null);
//     const [activeSubSubList, setActiveSubSubList] = useState(null);
//     const [data, setData] = useState([]);
//     const toggleSubList = (index) => {
//       setActiveSubList(activeSubList === index ? null : index);
//     };
  
//     const toggleSubSubList = (index) => {
//       setActiveSubSubList(activeSubSubList === index ? null : index);
//     };

//     useEffect(() => {
//         axios.get('http://localhost:3000/api/templates') 
//           .then((response) => setData(response.data))
//           .catch((error) => console.error('Error fetching data:', error));
//       }, []);
  
//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
       
       
//         <nav className='menu_container'>

        

//             <ul className='main_list'>

//                 <li ><a href='#Users Guide' > Overview</a></li>


//                 <li><a href='#1.0 Getting Started' onClick={() => toggleSubList(1)}>1.0 Getting Started</a>
//                         <ul className={`main_sub_list ${activeSubList === 1 ? 'open' : ''}`}>
//                             <li><a href='#1.1 Account Creation/Sign Up'>1.1 Account Creation/Sign Up</a></li>
//                             <li><a href='#1.2 Sign In'>1.2 Sign In</a></li>
//                             <li><a href='#1.3 Sign In with WeChat / LineID' onClick={() => toggleSubSubList(1.1)}>1.3 Sign In with WeChat / LineID</a>
//                                     <ul className={`main_sub_sub_list ${activeSubSubList === 1.1 ? 'open' : ''}`}>
//                                         <li><a href='#1.3.1 WeChat Login'>1.3.1 WeChat Login</a></li>
//                                         <li><a href='#1.3.2 LineID Login'>1.3.2 LineID Login</a></li>
//                                     </ul>
//                             </li>
//                             <li><a href='#1.4 Getting Assistance through Chat'>1.4 Getting Assistance through Chat</a></li>
//                         </ul>
//                 </li>


//                 <li><a href="#2.0 Dashboard" onClick={() => toggleSubList(2)}>2.0 Dashboard</a>
//                         <ul className={`main_sub_list ${activeSubList === 2 ? 'open' : ''}`}>
//                             <li><a href='#2.1 Popular Cohorts'>2.1 Popular Cohorts</a></li>
//                             <li><a href='#2.2 Recently Added Cohorts'>2.2 Recently Added Cohorts</a></li>
//                             <li><a href='#2.3 Saved Cohorts Count'>2.3 Saved Cohorts Count</a></li>
//                             <li><a href='#2.4 Lucina Refleggtion AI'>2.4 Lucina Refleggction AI</a></li>
//                             <li><a href='#2.5 Browse All Profiles'>2.5 Browse All Profiles</a></li>
//                         </ul>
//                 </li>



//                 <li><a href='#3.0 Gallery Page' onClick={() => toggleSubList(3)}>3.0 Gallery</a>
//                         <ul className={`main_sub_list ${activeSubList === 3 ? 'open' : ''}`}>
//                             <li><a href='#3.1 Find a Donors'>3.1 Find a Donors</a></li>
//                             <li><a href='#3.2 Select your donor criteria'>3.2 Filter and Refine</a></li>
//                             <li><a href='#3.3 Donor Profiles' onClick={() => toggleSubSubList(3.1)}>3.3 Donor Profiles</a>
//                                     <ul className={`main_sub_sub_list ${activeSubSubList === 3.1 ? 'open' : ''}`}>
//                                         <li><a href='#3.3.1 Request Full Profile Access'>3.3.1 Request Full Profile Access</a></li>
//                                         <li><a href='#3.3.2 Add to Favorites'>3.3.2 Add to Favorites</a></li>
//                                         <li><a href='#3.3.3 Add to Compare Section'>3.3.3 Compare Section</a></li>
//                                         <li><a href='#3.3.4 Image View Section'>3.3.4 Image View Section</a></li>
//                                     </ul>
//                             </li>
//                         </ul>
                
//                 </li>



//                 <li><a href='#4.0 Compare Section' onClick={() => toggleSubList(4)}>4.0 Compare Donors</a>
//                         <ul className={`main_sub_list ${activeSubList === 4 ? 'open' : ''}`}>
//                             <li><a href='#4.1 Adding Donors to the Comparison'>4.1 Adding Donors to the Comparison</a></li>
//                             <li><a href='#4.2 Side-by-Side Comparison'>4.2 Side-by-Side Comparison</a></li>
//                             <li><a href='#4.3 Remove from Compare'>4.3 Remove from Compare</a></li>
//                             <li><a href='#4.4 Add to Favorite from Compare'>4.4 Add to Favorite from Compare</a></li>
//                             <li><a href='#4.5 View from Compare'>4.5 View from Compare</a></li>
//                         </ul>
                
//                 </li>
//                 <li><a href='#5.0 Contact Us' onClick={() => toggleSubList(5)}>5.0 Contact Us</a>
//                         <ul className={`main_sub_list ${activeSubList === 5 ? 'open' : ''}`}>
//                             <li><a href='#5.1 Sending Your Query'>5.1 Sending Your Query</a></li>
//                             <li><a href='#5.2  Our Response'>5.2 Our Response</a></li>
//                         </ul>
//                 </li>
//                 <li><a href='#6.0 Lucina ReflEggction AI'>6.0 Try Lucina Refleggction AI</a></li>
//                 <li><a href='#7.0 Chat With Us'>7.0 Chat with Us</a></li>

//                 <li><a href='#8.0 Profile' onClick={() => toggleSubList(6)}>8.0 Profile</a>
//                         <ul className={`main_sub_list ${activeSubList === 6 ? 'open' : ''}`}>
//                             <li><a href='#8.1 My Profile' onClick={() => toggleSubSubList(6.1)}>8.1 My Profile</a>
//                                     <ul className={`main_sub_sub_list ${activeSubSubList === 6.1 ? 'open' : ''}`}>
//                                         <li><a href='#8.1.1 General'>8.1.1 General</a></li>
//                                         <li><a href='#8.1.2 Security'>8.1.2 Security</a></li>
//                                     </ul>
//                             </li>
//                             <li><a href='#8.2 Favorites'>8.2 Favorites</a></li>
//                             <li><a href='#8.3  Security'>8.3 Security</a></li>
//                             <li><a href='#8.4 Log Out'>8.4 Log Out</a></li>
//                         </ul>
//                 </li>
//             </ul>
//         </nav>
      
//     </div>


//   )
// }

// export default Sidebar

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Sidebar.css';

// const Sidebar = ({ isSidebarOpen, onHamburgerClick }) => {
//   const [activeSubList, setActiveSubList] = useState(null);
//   const [activeSubSubList, setActiveSubSubList] = useState(null);
//   const [data, setData] = useState([]);

//   const toggleSubList = (index) => {
//     setActiveSubList(activeSubList === index ? null : index);
//   };

//   const toggleSubSubList = (index) => {
//     setActiveSubSubList(activeSubSubList === index ? null : index);
//   };

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/templates')
//       .then((response) => setData(response.data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//       <nav className='menu_container'>
//         <ul className='main_list'>
//           {data.map((menuItem, index) => (
//             <li key={index}>
//               <a href={`#${menuItem.title}`}>{menuItem.title}</a>
//               <ul className={`main_sub_list ${activeSubList === index ? 'open' : ''}`}>
//                 {menuItem.chapters.map((chapter, subIndex) => (
//                   <li key={subIndex}>
//                     <a href={`#${chapter.title1}`} onClick={() => toggleSubList(subIndex+0.1)}>
//                       {chapter.title1}
//                     </a>
//                     <ul
//                       className={`main_sub_sub_list ${
//                         activeSubSubList === subIndex+0.1 ? 'open' : ''
//                       }`}
//                     >
//                       {chapter.sections.map((section, subSubIndex) => (
//                         <li key={subSubIndex}>
//                           <a href={`#${section.title2}`} onClick={() => toggleSubSubList(subSubIndex)}>
//                             {section.title2}
//                           </a>
//                           <ul
//                             className={`main_sub_sub_sub_list ${
//                               activeSubSubList === subSubIndex ? 'open' : ''
//                             }`}
//                           >
//                             {section.sub_section.map((subSection, subSubSubIndex) => (
//                               <li key={subSubSubIndex}>
//                                 <a href={`#${subSection.title3}`}>{subSection.title3}</a>
//                               </li>
//                             ))}
//                           </ul>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;



// DATABASE DOC========================================================================>>>>>

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Sidebar.css';

// const Sidebar= ({ isSidebarOpen, onHamburgerClick}) => {
   
//     const [activeSubList, setActiveSubList] = useState(null);
//     const [activeSubSubList, setActiveSubSubList] = useState(null);
  
//     const toggleSubList = (index) => {
//       setActiveSubList(activeSubList === index ? null : index);
//     };
  
//     const toggleSubSubList = (index) => {
//       setActiveSubSubList(activeSubSubList === index ? null : index);
//     };

//     const [data, setData] = useState([]);

//     useEffect(() => {
//       axios.get('http://localhost:3000/api-database/templates') 
//         .then((response) => setData(response.data))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);

    
//   return (
    
//     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//     <nav className='menu_container'>
      
//     <ul className='main_list'>
//   { data.map((template, index) => (
//     <li key={index}>
//       <a href={`#${template.title}`}>
//         {template.title}
//       </a>
//       {template.chapters.map((chapter,index) => (
//         <li key={index}>
//           <a href={`#${chapter.title1}`}>{chapter.title1}</a>
//         </li>
//       ))}
//     </li>
//   ))}
// </ul>

//     </nav>
//   </div>
//   )
// }

// export default Sidebar;




// ADMIN GUIDE DOC=================================================>>>>

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen, onHamburgerClick}) => {
   
    const [activeSubList, setActiveSubList] = useState(null);
    const [activeSubSubList, setActiveSubSubList] = useState(null);
    const [activeSubSubSubList, setActiveSubSubSubList] = useState(null);
    const [activeSubSubSubSubList, setActiveSubSubSubSubList] = useState(null);


    const [data, setData] = useState([]);
    const toggleSubList = (index) => {
      setActiveSubList(activeSubList === index ? null : index);
    };
  
    const toggleSubSubList = (index) => {
      setActiveSubSubList(activeSubSubList === index ? null : index);
    };
    const toggleSubSubSubList = (index) => {
      setActiveSubSubSubList(activeSubSubSubList === index ? null : index);
    };
    const toggleSubSubSubSubList = (index) => {
      setActiveSubSubSubSubList(activeSubSubSubSubList === index ? null : index);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/api/templates') 
          .then((response) => setData(response.data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
  
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
       
       
        <nav className='menu_container'>

        

            <ul className='main_list'>

                <li ><a href='#Admin Panel User Guide' > Overview</a></li>


                <li><a href='#1.0 Getting Started With Admin Panel' onClick={() => toggleSubList(1)}>1.0 Getting Started</a>
                        <ul className={`main_sub_list ${activeSubList === 1 ? 'open' : ''}`}>
                            <li><a href='#1.1 Account Creation/Sign Up'>1.1 Account Creation/Sign Up</a></li>
                            <li><a href='#1.2 Sign In'>1.2 Sign In</a></li>
                            <li><a href='#1.3 Sign In with WeChat / LineID' onClick={() => toggleSubSubList(1.1)}>1.3 Sign In with WeChat / LineID</a>
                                    <ul className={`main_sub_sub_list ${activeSubSubList === 1.1 ? 'open' : ''}`}>
                                        <li><a href='#1.3.1 WeChat Login'>1.3.1 WeChat Login</a></li>
                                        <li><a href='#1.3.2 LineID Login'>1.3.2 LineID Login</a></li>
                                    </ul>
                            </li>
                            <li><a href='#1.4 Getting Assistance through Chat'>1.4 Getting Assistance through Chat</a></li>
                        </ul>
                </li>


                <li><a href="#2.0 Admin Dashboard" onClick={() => toggleSubList(2)}>2.0 Admin Dashboard</a>
                        <ul className={`main_sub_list ${activeSubList === 2 ? 'open' : ''}`}>


                            <li><a href='#2.1. Intended Parents [Manage IP]' onClick={() => toggleSubSubList(2.1)}>2.1. Intended Parents (Manage IP)</a>
                                      <ul className={`main_sub_sub_list ${activeSubSubList === 2.1 ? 'open' : ''}`}>
                                        <li><a href="#2.1.1. IP Profile" onClick={() => toggleSubSubSubList(2.1)}>2.1.1. IP Profile</a>
                                                <ul className={`main_sub_sub_list${activeSubSubSubList ===2.1 ? 'open':''}`}>
                                                  <li><a href="#2.1.1.1. View List [Profile Request]">2.1.1.1. View List (Profile Request)</a></li>
                                                  <li><a href="#2.1.1.2. View Saved Profile [Profile saved to favorite list]">2.1.1.2. View Saved Profile (Profile saved to favorite list)</a></li>
                                                </ul>
                                        </li>
                                      </ul>
                            </li>


                            <li><a href='#2.2. Donors [View all donors]'  onClick={() => toggleSubSubList(2.2)} >2.2.  Donors (View all donors)</a>
                                    <ul className={`main_sub_sub_list ${activeSubSubList === 2.2 ? 'open' : ''}`}>
                                      <li><a href="#2.2.1. Donors  Profile">2.2.1. Donors  Profile</a></li>
                                    </ul>
                            </li>


                            <li><a href='#2.3. Users [Manage Users]' onClick={() => toggleSubSubList(2.3)}>2.3. Users (Manage Users)</a>
                                <ul className={`main_sub_sub_list ${activeSubSubList === 2.3 ? 'open' : ''}`}>
                                  <li><a href="#2.3.1. Users" onClick={() => toggleSubSubSubList(2.3)}>2.3.1. Users</a>
                                          <ul className={`main_sub_sub_sub_list ${activeSubSubSubList === 2.3 ? 'open' : ''}`}>
                                            <li><a href="#2.3.1.1. Invite Users">2.3.1.1. Invite Users</a></li>
                                            <li><a href="#2.3.1.2. Manage User Role">2.3.1.2. Manage User Role</a></li>
                                            <li><a href="#2.3.1.3. Three Dots Menu" onClick={() => toggleSubSubSubSubList(2.3)}>2.3.1.3. Three Dots Menu</a>
                                                    <ul className={`main_sub_sub_sub_sub_list ${activeSubSubSubSubList === 2.3 ? 'open' : ''}`}>
                                                      <li><a href="#2.3.1.3.1. Profile [Users]">2.3.1.3.1. Profile (Users)</a></li>
                                                      <li><a href="#2.3.1.3.2. Delete [Users]">2.3.1.3.2. Delete (Users)</a></li>
                                                    </ul>
                                            </li>
                                          </ul>
                                  </li>
                                  <li><a href="#2.3.2. Add IP">2.3.2. Add IP</a></li>
                                </ul>
                            </li>





                            <li><a href='#2.4. Role [Manage User Role]' onClick={() => toggleSubSubList(2.4)}>2.4. Role (Manage User Role)</a>
                                      <ul className={`main_sub_sub_list ${activeSubSubList === 2.4 ? 'open' : ''}`}>
                                          <li><a href="#2.4.1. All role" onClick={() => toggleSubSubSubList(2.4)}>2.4.1. All role</a>
                                                  <ul className={`main_sub_sub_sub_list ${activeSubSubSubList === 2.4 ? 'open' : ''}`}>
                                                    <li><a href="#2.4.1.1. Thee DOT" onClick={() => toggleSubSubSubSubList(2.4)}>2.4.1.1. Thee DOT</a>
                                                            <ul className={`main_sub_sub_sub_sub_list ${activeSubSubSubSubList === 2.4 ? 'open' : ''}`}>
                                                                <li><a href="#2.4.1.1.1 Users">2.4.1.1.1 Users</a></li>
                                                                <li><a href="#2.4.1.1.2 Permissions">2.4.1.1.2 Permissions</a></li>
                                                                <li><a href="#2.4.1.1.2 Delete">2.4.1.1.2 Delete</a></li>
                                                            </ul>
                                                    </li>
                                                  </ul>
                                          </li>
                                      </ul>
                            </li>




                            <li><a href='#2.5. Profile Requests [Full profile request]'>2.5. Profile Requests [Full profile request]</a></li>




                            <li><a href='#2.6. Messages [IP’s messages]' onClick={() => toggleSubSubList(2.6)}>2.6. Messages (IP’s messages)</a>
                                      <ul className={`main_sub_sub_list ${activeSubSubList === 2.6 ? 'open' : ''}`}>
                                        <li><a href="#2.6.1. Queries">2.6.1. Queries</a></li>
                                        <li><a href="#2.6.2. Requirements">2.6.2. Requirements</a></li>

                                      </ul>
                            </li>



                            <li><a href='#2.7. App Settings [Manage App settings]'>2.7. App Settings (Manage App settings)</a></li>



                            <li><a href='#2.8. Integrations [Manage Integration settings]'>2.8. Integrations (Manage Integration settings)</a></li>


                            <li><a href='#2.9. Settings [Account settings]' onClick={() => toggleSubSubList(2.9)}>2.9. Settings (Account settings)</a>
                                      <ul className={`main_sub_sub_list ${activeSubSubList === 2.9 ? 'open' : ''}`}>
                                          <li><a href="#2.9.1. General">2.9.1. General</a></li>
                                          <li><a href="#2.9.2. Settings">2.9.2. Settings</a></li>
                                          <li><a href="#2.9.3. Security">2.9.3. Security</a></li>
                                      </ul>
                            </li>


                            <li><a href='#2.10. Activity [View usage]' onClick={() => toggleSubSubList(2.10)}>2.10. Activity (View usage)</a>
                                      <ul className={`main_sub_sub_list ${activeSubSubList === 2.10 ? 'open' : ''}`}>
                                          <li><a href="#2.10.1. Application Log">2.10.1. Application Log</a></li>
                                          <li><a href="#2.10.2. API Log">2.10.2. API Log</a></li>

                                      </ul>
                            </li>

                            
                            <li><a href='#2.11. Cohorts Popularity [High demands cohorts]'>2.11. Cohorts Popularity (High demands cohorts)</a></li>
                            <li><a href='#2.12. API [Manage distribution APIs]'>2.12. API (Manage distribution APIs)</a></li>

                        </ul>
                </li>



                <li><a href='#3.0 Gallery Page' onClick={() => toggleSubList(3)}>3.0 Gallery</a>
                        <ul className={`main_sub_list ${activeSubList === 3 ? 'open' : ''}`}>
                            <li><a href='#3.1 Find a Donors'>3.1 Find a Donors</a></li>
                            <li><a href='#3.2 Select your donor criteria'>3.2 Filter and Refine</a></li>
                            <li><a href='#3.3 Donor Profiles' onClick={() => toggleSubSubList(3.1)}>3.3 Donor Profiles</a>
                                    <ul className={`main_sub_sub_list ${activeSubSubList === 3.1 ? 'open' : ''}`}>
                                        <li><a href='#3.3.1 Request Full Profile Access'>3.3.1 Request Full Profile Access</a></li>
                                        <li><a href='#3.3.2 Add to Favorites'>3.3.2 Add to Favorites</a></li>
                                        <li><a href='#3.3.3 Add to Compare Section'>3.3.3 Compare Section</a></li>
                                        <li><a href='#3.3.4 Image View Section'>3.3.4 Image View Section</a></li>
                                    </ul>
                            </li>
                        </ul>
                
                </li>



                <li><a href='#4.0 Compare Section' onClick={() => toggleSubList(4)}>4.0 Compare Donors</a>
                        <ul className={`main_sub_list ${activeSubList === 4 ? 'open' : ''}`}>
                            <li><a href='#4.1 Adding Donors to the Comparison'>4.1 Adding Donors to the Comparison</a></li>
                            <li><a href='#4.2 Side-by-Side Comparison'>4.2 Side-by-Side Comparison</a></li>
                            <li><a href='#4.3 Remove from Compare'>4.3 Remove from Compare</a></li>
                            <li><a href='#4.4 Add to Favorite from Compare'>4.4 Add to Favorite from Compare</a></li>
                            <li><a href='#4.5 View from Compare'>4.5 View from Compare</a></li>
                        </ul>
                
                </li>
                <li><a href='#5.0 Contact Us' onClick={() => toggleSubList(5)}>5.0 Contact Us</a>
                        <ul className={`main_sub_list ${activeSubList === 5 ? 'open' : ''}`}>
                            <li><a href='#5.1 Sending Your Query'>5.1 Sending Your Query</a></li>
                            <li><a href='#5.2  Our Response'>5.2 Our Response</a></li>
                        </ul>
                </li>
                <li><a href='#6.0 Lucina ReflEggction AI'>6.0 Try Lucina Refleggction AI</a></li>
                <li><a href='#7.0 Chat With Us'>7.0 Chat with Us</a></li>

                <li><a href='#8.0 Profile' onClick={() => toggleSubList(6)}>8.0 Profile</a>
                        <ul className={`main_sub_list ${activeSubList === 6 ? 'open' : ''}`}>
                            <li><a href='#8.1 My Profile' onClick={() => toggleSubSubList(6.1)}>8.1 My Profile</a>
                                    <ul className={`main_sub_sub_list ${activeSubSubList === 6.1 ? 'open' : ''}`}>
                                        <li><a href='#8.1.1 General'>8.1.1 General</a></li>
                                        <li><a href='#8.1.2 Security'>8.1.2 Security</a></li>
                                    </ul>
                            </li>
                            <li><a href='#8.2 Favorites'>8.2 Favorites</a></li>
                            <li><a href='#8.3  Security'>8.3 Security</a></li>
                            <li><a href='#8.4 Log Out'>8.4 Log Out</a></li>
                        </ul>
                </li>
            </ul>
        </nav>
      
    </div>


  )
}

export default Sidebar