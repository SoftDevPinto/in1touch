import React, { useState } from 'react';

const styles = {
  searchContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '57px 100px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    position: 'sticky',
    top: '100px', // Adjust this to move the search container down or up.
    zIndex: 10, 
  },
  
  
  label: {
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
  },
  checkboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  checkboxLabel: {
    flex: '1',
    marginRight: '8px',
  },
  checkbox: {
    flex: '1',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px', // Adjust the gap here.
  },
  button: {
    appearance: 'button',
    backfaceVisibility: 'hidden',
    backgroundColor: '#0082e6',
    borderRadius: '6px',
    borderWidth: '0',
    boxShadow: 'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: '-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    fontSize: '100%',
    height: '44px',
    lineHeight: '1.15',
    outline: 'none',
    overflow: 'hidden',
    padding: '0 25px',
    position: 'relative',
    textAlign: 'center',
    textTransform: 'none',
    transform: 'translateZ(0)',
    transition: 'all .2s, box-shadow .08s ease-in',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    width: '100%',
    '&:hover': { // Trying to add hover effect to the button but not working right now.
      backgroundColor: '#005bb8', // Change the background color on hover
    },
  },
  
  searchResultsContainer: {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centering horizontally
    backgroundColor: '#fff',
    marginLeft: '-100px', // Adjust margin
  },

  searchResult: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the start of the cross axis (left)
    textAlign: 'left', // Align text to the left
    width: '100%', // Make the result width 100% of the container
    backgroundColor: '#fff',
    marginLeft: '-45px', 
  },
  resultTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    marginLeft: '10px', 
  },
  resultLink: {
    color: 'blue',
    textDecoration: 'underline',
    marginBottom: '8px',
    marginLeft: '10px', 
  },
  resultDetails: {
    fontSize: '14px',
    marginLeft: '10px',
  },
  centeredResultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px', // Adjust margin as needed
  },
  mainContainer: {
    backgroundColor: '#fcfcfc',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the start of the cross axis (top)
  },
  leftSection: {
    marginRight: '20px', // Adjust margin as needed
  },
  rightSection: {
    flex: '1', // Take remaining width
    
  },
  mapContainer: {
    marginLeft: '200px', // Adjust the margin as needed
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '10px', // Add the border-radius you prefer
  },
  

};

const Search = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [category, setCategory] = useState('');
  const [registrationsAllowed, setRegistrationsAllowed] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  
  const handleSearch = () => {
    try {
      // Hardcoded JSON data for testing
      const jsonData = {
        "title": "test",
        "link": "https://live1.in1touch.org/client/event/roster/eventRosterView.html?eventRosterId=17",
        "description": "",
        "events": [
          {
            "title": "test",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterView.html?eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div><strong>Title:</strong> test <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 10/12/2020 17:16<br /><strong>Address:</strong> Manitoba, Canada <br /><strong>Description:</strong> <br /><strong>URL:</strong> <a href='https://live1.in1touch.org/viewEvent.html?productId=7477' target='_blank'>https://live1.in1touch.org/viewEvent.html?productId=7477</a> <br /><strong>End Date:</strong> 10/13/2020 17:16</div><div style='margin-left: 525px; margin-top: -50px; text-align: center;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.86599700,-97.11053500&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.86599700,-97.11053500&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div>"
          },
          
          {
            "title": "Event Management Software Seminar - Tickets",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=660&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> Event Management Software Seminar - Tickets <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 12/30/2016 12:00<br /><strong>Address:</strong> <br /> 553 St.Mary's Rd.<br />Winnipeg, Manitoba R2M 3L4<br> Canada </div><div style='flex-grow: 1; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'><span style='font-family: Verdana;'><span style='font-weight: bold; text-decoration: underline;'>Wednesday September 24</span><sup style='font-weight: bold; text-decoration: underline;'>th</sup> <o:p></o:p></span></p>\r\n<p style='max-width: 300px; word-wrap: break-word;'><span style='font-family: Verdana;'>11:30 AM &ndash; 1:00 PM <o:p></o:p></span></p>\r\n<p style='max-width: 300px; word-wrap: break-word;'><span style='font-family: Verdana;'><span style='font-weight: bold;'>The Manitoba Club</span> <o:p></o:p></span></p>\r\n<p style='max-width: 300px; word-wrap: break-word;'><span style='font-family: Verdana;'>194 Broadway <o:p></o:p></span></p>\r\n<p style='max-width: 300px; word-wrap: break-word;'><span style='font-family: Verdana;'><span style='font-weight: bold; font-style: italic;'>Complimentary Lunch will be served</span></span></p>\r\n<p style='max-width: 300px; word-wrap: break-word;'><span style='font-family: Verdana;'><span style='font-weight: bold;'>Cancellations:</span> All cancellations should be made by Monday September 22 12:00 PM</span></p>\r\n<p style='max-width: 300px; word-wrap: break-word;'><span style='font-family: Verdana;'><span style='font-weight: bold;'>Refunds:</span> No Refunds for Cancellations after September 22</span></p></div><div style='flex-grow: 1; margin-left: 305px; margin-top: -40px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.86599700,-97.11053500&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.86599700,-97.11053500&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div>"
          },
          {
            "title": "2016 Winnipeg Career Symposium Volunteers",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6430&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> 2016 Winnipeg Career Symposium Volunteers <br /><strong>Categories:</strong> lunch, AGM, <br /><strong>Start Date:</strong> 06/09/2016 18:00<br /><strong>Address:</strong> <br /> RBC Convention Centre<br>375 York St.<br>Winnipeg, Manitoba R3C 3J3<br> Canada </div><div style='flex-grow: 2; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 400px; word-wrap: break-word;'><span style='font-family: Verdana;'><span style='font-weight: bold;'>2016 Winnipeg Rotary Career Symposium</span><br /><span style='font-weight: bold;'>May 2nd - 4th, 2016</span></span></p><p style='max-width: 400px; word-wrap: break-word;'><span style='font-family: Verdana;'>The Career Symposium is where Students, Parents and Educators all meet face-to-face with representatives from all sectors of the labour market. It is a key time for everyone looking to enter the workforce or better understand present and future opportunities. &nbsp;</span></p><p style='max-width: 400px; word-wrap: break-word;'><span style='font-family: Verdana;'>At the Career Symposium, attendees will have a chance to find jobs and submit resumes, learn about internships, volunteer opportunities, and leading academic programs.</span></p><p style='max-width: 500px; word-wrap: break-word;'><span style='font-family: Verdana;'><strong>The MAMRT is looking for volunteers to staff the MAMRT Booth.</strong></span></p><p style='max-width: 400px; word-wrap: break-word;'><span style='font-family: Verdana;'>Interested members and students are asked to register online.</span></p><p style='max-width: 400px; word-wrap: break-word;'><span style='font-family: Verdana;'>Volunteers may be offered a different shift to ensure coverage and allow for even representation of each modality.</span></p><p style='max-width: 600px; word-wrap: break-word;'><span style='font-family: Verdana;'><strong>As the required number of volunteers are reached for each time slot; that time slot will no longer be seen.</strong></span></p><p style='max-width: 400px; word-wrap: break-word;'><span style='font-family: Verdana;'><strong>Volunteers: please arrive at least 15 minutes prior to your time slot to allow time for parking and registration.</strong></span></p></div><div style='flex-grow: 1; margin-left: 50px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.88900000,-97.14450000&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.88900000,-97.14450000&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300'/></div></div><hr />"
          },
          
          {
            "title": "Pardy Hardy",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=629&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> Pardy Hardy <br /><strong>Categories:</strong> Training, <br /><strong>Start Date:</strong> 02/16/2016 14:30<br /><strong>Address:</strong> <br /> 177 Lombard Ave<br>Winnipeg, Manitoba R3B 0W5<br> Canada </div><div style='flex-grow: 2; margin-left: 150px;'><strong>Description:</strong> <p style='max-width: 400px; word-wrap: break-word;'>Holiday Party: Festivus for the Rest of Us!<br />Festivus serves as an alternative to participating in the pressures and commercialism of the Christmas and holiday season. Join us as we gather for drinks and appetizers ... who knows, there may be an unadorned aluminum \"Festivus pole,\" the \"Airing of Grievances,\" \"Feats of Strength,\" and the labeling of easily explainable events as \"Festivus miracles.\" This wonderful, friendly, joyous event will happen at the city's highest restaurant: Prairie 360. Enjoy the view of our beautiful city at night while networking, catching up with old friends and meeting new ones.<br /><br />Date: Thursday, December 19<br />Time: 5:30 to 8:30 pm<br />Location: Prairie 360, Piano Room<br />Cost: Free for members, $20 for guests<br />Registration: Online at our website<br />Deadline: Monday, December 16<br />Note: First drink free, cash bar<br />In keeping with the holiday tradition, we will once again make a donation to the Christmas Cheer Board. Please bring a new, unwrapped toy or non-perishable food item with you and we will make sure they are delivered to children in need.<br /><br />Hope to see you all soon!</p></div><div style='flex-grow: 1; margin-left: 270px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.89642900,-97.13758950&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.89642900,-97.13758950&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300'/></div></div><hr />"
          },
          
          
          {
            "title": "Meetings",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6408&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> Meetings <br /><strong>Categories:</strong> <br /><strong>Start Dates:</strong> 03/29/2016 18:30, 02/17/2016 18:30, 02/25/2016 18:30, 02/23/2016 18:30, 02/04/2016 18:30<br /><strong>End Dates:</strong> 03/29/2016 20:30, 02/17/2016 20:30, 02/25/2016 20:30, 02/23/2016 20:30, 02/04/2016 20:30<br /><strong>Address:</strong> <br /> 205-1555 St. James St.<br>Winnipeg, Manitoba R3H 1B5<br> Canada </div><div style='flex-grow: 1; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>Multiple meeting dates available for participants. Please refer to the listed start and end dates for each session. Ideal for those looking to engage with our organization and learn more about our initiatives.</p><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=6408'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 10px; margin-top: -80px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.91106400,-97.19909910&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.91106400,-97.19909910&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "IT Congress",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4994&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> IT Congress <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 02/28/2014 22:29<br /><strong>End Date:</strong> 02/28/2014 22:29<br /><strong>Address:</strong> <br /> 200 - 1120 Grant Avenue<br>Winnipeg, Manitoba R3R 3R3<br> Canada </div><div style='flex-grow: 1; margin-left: 100px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>An engaging event for IT professionals and enthusiasts. Dive deep into the latest in technology trends, innovations, and networking opportunities.</p><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4994'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 410px; margin-top: -80px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.85867000,-97.25381000&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.85867000,-97.25381000&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "AsthmaTrec",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6076&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> AsthmaTrec <br /><strong>Categories:</strong> Training, Training, <br /><strong>Start Date:</strong> 09/19/2013 00:00<br /><strong>End Date:</strong> 09/22/2013 23:59<br /><strong>Address:</strong> <br /> 205-1555 St. James Street<br>Winnipeg, Manitoba R3H 1B5<br> Canada </div><div style='flex-grow: 2; margin-left: 100px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>An innovative training session for healthcare professionals focusing on asthma management. This program includes interactive elements and resources for further learning.</p><div align='center'><img src='http://live1.olasoft.com/uploaded/web/Resptrec%20ad%20July%202013_.png' alt='' usemap='#RespTrec' /><map name='RespTrec'><area shape='rect' coords='45,190,800,250' href='http://www.resptrec.org/asthmatrec.php' /><area shape='rect' coords='45,260,800,330' href='http://www.resptrec.org/copdtrec.php' /><area shape='rect' coords='45,390,800,450' href='http://www.resptrec.org' /></map></div><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=6076'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 400px; margin-top: -80px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.91106400,-97.19909910&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.91106400,-97.19909910&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "AsthmaTrec Registration",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6075&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> AsthmaTrec Registration <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 07/25/2013 00:00<br /><strong>End Date:</strong> 07/25/2013 23:59<br /><strong>Address:</strong> <br /> 205-1555 St. James Street<br>Winnipeg, Manitoba R3H 1B5<br> Canada </div><div style='flex-grow: 2; margin-left: 100px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>Registration for the AsthmaTrec program, designed to educate and train healthcare professionals in asthma management.</p><div align='center'><img src='http://live1.olasoft.com/uploaded/web/Resptrec%20ad%20July%202013_.png' alt='' usemap='#RespTrec' /><map name='RespTrec'><area shape='rect' coords='45,190,800,250' href='http://www.resptrec.org/asthmatrec.php' /><area shape='rect' coords='45,260,800,330' href='http://www.resptrec.org/copdtrec.php' /><area shape='rect' coords='45,390,800,450' href='http://www.resptrec.org' /></map></div><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=6075'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 400px; margin-top: -80px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.91100000,-97.19880000&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.91100000,-97.19880000&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "CRBSC / WRLA Manual Estimating Program",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4992&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> CRBSC / WRLA Manual Estimating Program <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 10/30/2010 13:24<br /><strong>Address:</strong> <br /> 2520 Portage Avenue<br>Holiday Inn Winnipeg Airport West<br>Winnipeg, Manitoba R3J 3T6<br> Canada </div><div style='flex-grow: 2; margin-left: 5px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>This program offers a comprehensive approach to manual estimating, starting with fundamentals and advancing through residential construction to an Advanced Estimators Forum. Participants will receive certificates at each level, culminating in a 'Professional Estimator' certificate.</p><ul style='max-width: 300px;'><li>Applying math to estimating</li><li>Estimate vs. Quotation</li><li>Dimensional lumber and building materials</li><li>Understanding roofs and pitch</li><li>A step-by-step workbook included</li></ul><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4992'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 290px; margin-top: -60px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.87467190,-97.25957080&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.87467190,-97.25957080&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "ISA International Sign Expo 2011",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4976&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> ISA International Sign Expo 2011 <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 09/22/2010 12:21<br /><strong>Address:</strong> <br /> 3950 Las Vegas Boulevard South<br>Mandalay Bay<br>Las Vegas, Nevada 89119<br> United States </div><div style='flex-grow: 2; margin-left: 70px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>The ISA International Sign Expo 2011 is the key event for the sign industry, providing ample opportunities for exhibitors to showcase their products and services. Highlights include an interactive floor plan, exhibitor list, and benefits like website exposure and discounted rates for future events.</p><ul style='max-width: 300px;'><li>Download the Exhibitor Prospectus</li><li>Complete the Exhibitor Space Contract</li><li>View the 2011 Interactive Floor Plan</li><li>Check the 2011 Exhibitor List</li></ul><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4976'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 290px; margin-top: -60px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=36.08293720,-115.14741340&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|36.08293720,-115.14741340&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "130th Annual General Meeting & Conference",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4891&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> 130th Annual General Meeting & Conference <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 09/14/2010 20:59<br /><strong>Address:</strong> <br /> Elkhorn Resort<br>Onanole, Manitoba R0J 1N0<br> Canada </div><div style='flex-grow: 2; margin-left: 5px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>AMLS is excited to host the 130th Annual General Meeting & Conference. Mark your calendars and make your reservations today to join us at the Elkhorn Resort for a series of engaging sessions scheduled from September 14 to 16, 2010. Watch for more details on this significant event.</p><p style='max-width: 300px; word-wrap: break-word;'><strong>2009 - 2010 Executive Council Announced:</strong></p><ul style='max-width: 300px;'><li>President: John S. Kulchycki, M.L.S. C.L.S.</li><li>Vice President: G. A. Lund, M.L.S.</li><li>Past President: S.J. Bossenmaier M.L.S. P. Eng.</li><li>Secretary-Treasurer: R. W. Sherby, M.L.S.</li><li>Councillors: D.N. Pratt, M.L.S. C.L.S., and others.</li><li>Registrar: J.G. Watling, M.L.S. C.L.S., P. Eng.</li></ul><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4891'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 280px; margin-top: -40px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=50.65805448,-99.97188990&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|50.65805448,-99.97188990&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "Regular DoDAF Short Courses",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4902&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> Regular DoDAF Short Courses <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 09/13/2010 11:01<br /><strong>Address:</strong> <br /> 7054 Haycock Road<br>UVA Northern Virginia Center<br>Falls Church, Virginia 22043<br> United States </div><div style='flex-grow: 2; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>Offering a comprehensive overview of the Department of Defense Architecture Framework (DoDAF), these short courses are designed for professionals seeking to enhance their understanding of architectural frameworks in a concise format. The session spans from Monday, September 13, 2010, to September 17, 2010, at the UVA Northern Virginia Center.</p><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4902'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 350px; margin-top: -60px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=38.89894740,-77.20027450&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|38.89894740,-77.20027450&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "FEA(F)/Commercial Fall 2010 shops",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4901&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> FEA(F)/Commercial Fall 2010 shops <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 08/30/2010 11:01<br /><strong>Address:</strong> <br /> 7054 Haycock Road<br>UVA Northern Virginia Center<br>Falls Church, Virginia 22043<br> United States </div><div style='flex-grow: 2; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>The FEA(F)/Commercial Fall 2010 series offers a range of workshops focused on Federal Enterprise Architecture (FEA) and its application in commercial projects. Spanning from Monday, August 30, 2010, to Tuesday, December 07, 2010, these sessions are held at the UVA Northern Virginia Center, providing in-depth knowledge and practical skills.</p><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4901'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 315px; margin-top: -40px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=38.89894740,-77.20027450&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|38.89894740,-77.20027450&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "Dealer Training June 2010",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4957&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> Dealer Training June 2010 <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 07/30/2010 15:03<br /><strong>Address:</strong> <br /> 680 Moray Street<br>Winnipeg, Manitoba R3J 3S3<br> Canada </div><div style='flex-grow: 2; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word; margin-left: 10px;'>Introducing MacDon’s All-New M Series SP Windrowers With Dual Direction™ Technology, featuring a top highway speed of 23 MPH (37 km/h) and MacDon’s patented Dual Direction™ technology for faster cutting and travel. This event showcases the latest in SP windrower design, productivity, and performance.</p><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4957'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 370px; margin-top: -70px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.89501040,-97.26127450&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.89501040,-97.26127450&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "Professional Development Seminars",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4947&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> Professional Development Seminars <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 07/30/2010 12:10<br /><strong>Address:</strong> <br /> 1670 Portage Ave<br>Viscount Gort Hotel<br>Winnipeg, Manitoba R3J 0C9<br> Canada </div><div style='flex-grow: 2; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>Scheduled for Wednesday, January 13, 2010, at the Viscount Gort Hotel, this seminar offers professional development opportunities in areas such as building mentoring relationships and growing strong client relationships. Presenters include Deri Latimer and Cec Hanec, focusing on the importance of mentoring, first impressions, building trust, and business relationship management.</p><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4947'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 320px; margin-top: -60px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.87971200,-97.20360500&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.87971200,-97.20360500&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "AMLS Annual Golf Tournament",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4596&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> AMLS Annual Golf Tournament <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 06/30/2010 18:00<br /><strong>Address:</strong> <br /> St. Boniface Golf Course<br>100 Youville Street<br>Winnipeg, Manitoba R2H 2S1<br> Canada </div><div style='flex-grow: 2; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>Join the AMLS for their Annual Golf Tournament, featuring a PMI Manitoba 9 Hole Texas Scramble Golf Tourney. This event is set for September 15th, 2009, at St. Boniface Golf Course, welcoming members and guests alike. Fees vary, with dinner and prizes included. Previous golf experience is not necessary, and prize sponsorship is welcome. For any inquiries, contact 954-4390.</p><ul style='max-width: 300px;'><li>Register as a 4 person team or as an individual.</li><li>Dinner and Prizes included.</li><li>Previous golf experience not necessary.</li><li>Prize sponsorship welcome!</li></ul><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4596'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 300px; margin-top: -40px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.87387140,-97.10681510&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.87387140,-97.10681510&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "EA Certification & Workshops",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4900&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> EA Certification & Workshops <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 06/21/2010 11:01<br /><strong>Address:</strong> <br /> 7054 Haycock Road<br>UVA Northern Virginia Center<br>Falls Church, Virginia 22043<br> United States </div><div style='flex-grow: 2; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>The EA Certification and Workshops offer a comprehensive learning experience on Enterprise Architecture (EA) principles and practices. The program includes Regular Open Short Courses overlaid with Session 1 of the Certification Program, covering topics from EA Bootcamps to special short courses like DoDAF 2.0 Update Workshops and FEA & SOA workshops. Interested participants can register for certification or submit payments for special amounts via provided links.</p><ul style='max-width: 300px;'><li>5 Day EA Bootcamp - Fall 2010 (Aug 30-Sep 4)</li><li>3 Day EA Seminar - Fall 2010 (Aug 30-Sep 2)</li><li>Special Short Courses including DoDAF 2.0 Update Workshops</li><li>FEA & SOA, the What, How, and Why</li><li>TOGAF 9 Courses Schedule available</li></ul><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4900'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 285px; margin-top: -20px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=38.89894740,-77.20027450&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|38.89894740,-77.20027450&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          {
            "title": "Hemp Building Seminar - FREE",
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4864&eventRosterId=17",
            "details": "<div style='display: flex; justify-content: space-between; text-align: left; padding: 10px;'><div style='flex-grow: 1;'><strong>Title:</strong> Hemp Building Seminar - FREE <br /><strong>Categories:</strong> <br /><strong>Start Date:</strong> 05/29/2010 10:14<br /><strong>Address:</strong> <br /> University of Manitoba<br>66 Dafoe Rd Rm 130<br>Winnipeg, Manitoba R3T 2N2<br> Canada </div><div style='flex-grow: 2; margin-left: 20px;'><strong>Description:</strong> <p style='max-width: 300px; word-wrap: break-word;'>Hosted by the Department of Plant Science at the University of Manitoba and the Canadian Hemp Trade Alliance, this free public seminar on Building with Hemp features renowned Hempcrete Builders Greg Flavall and David Madera. They will provide an in-depth presentation on Hempcrete building and opportunities in Canada and the USA, including a live hempcrete demo and Q&A session.</p><ul style='max-width: 300px;'><li>Date: April 30th, 2010</li><li>Time: 10am-12pm</li><li>Place: University of Manitoba, Plant Science Dept., 66 Dafoe Rd., Room # 130 Carolyn Sifton Lecture Theatre</li><li>Contact: Anndrea Hermann, M.Sc., P.Ag, anndrea@hemptrade.ca</li></ul><p style='max-width: 300px; word-wrap: break-word;'>URL: <a href='https://live1.in1touch.org/viewEvent.html?productId=4864'>Event Details</a></p></div><div style='flex-grow: 1; margin-left: 280px; margin-top: -20px;'><strong>MAP:</strong> <img src='https://maps.google.com/maps/api/staticmap?center=49.80995380,-97.13452170&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.80995380,-97.13452170&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE' style='border: 1px solid black;' width='400' height='300' /></div></div><hr />"
          },
          
          // Add more events as needed
        ]
      };

      const lowerCaseEventTitle = eventTitle.toLowerCase();
    const lowerCaseCategory = category.toLowerCase();

    const results = jsonData.events.filter(event =>
      event.title.toLowerCase().includes(lowerCaseEventTitle) &&
      (lowerCaseCategory === '' || event.details.toLowerCase().includes(lowerCaseCategory))
    );

    setSearchResults(results);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
  const handlePrint = () => {
    console.log('Print clicked!');
  };

  const handleClearForm = () => {
    setEventTitle('');
    setCategory('');
    setRegistrationsAllowed('');
    setIsActive(false);
    setIsFinished(false);
    setSearchResults([]);
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.searchContainer}>
        <label style={styles.label}>Event Title:</label>
        <input
          style={styles.input}
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
  
        <label style={styles.label}>Category:</label>
        <input
          style={styles.input}
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
  
        <label style={styles.label}>Registrations Allowed:</label>
        <input
          style={styles.input}
          type="text"
          value={registrationsAllowed}
          onChange={(e) => setRegistrationsAllowed(e.target.value)}
        />
  
  <div style={{ ...styles.checkboxContainer, marginLeft: '14px' }}>
  <div style={styles.checkboxLabel}>
    <label>Active:</label>
  </div>
  <div style={styles.checkbox}>
    <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} />
  </div>
</div>


<div style={styles.checkboxContainer}>
  <div style={styles.checkboxLabel}>
    <label>Finished:</label>
  </div>
  <div style={styles.checkbox}>
    <input type="checkbox" checked={isFinished} onChange={() => setIsFinished(!isFinished)} />
  </div>
</div>
  
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleSearch}>
            Search
          </button>
          <button style={styles.button} onClick={handlePrint}>
            Print
          </button>
          <button style={styles.button} onClick={handleClearForm}>
            Clear Form
          </button>
        </div>
      </div>
  
      {searchResults.length > 0 && (
  <div style={styles.centeredResultsContainer}>
  <h2 style={{ textAlign: 'center' }}>Search Results:</h2>
    {searchResults.map((result, index) => (
      <div key={index} style={styles.searchResult}>
        <div style={styles.leftSection}>
          <p style={styles.resultTitle}>Title: {result.title}</p>
          <p style={styles.resultLink}>
            Link: <a href={result.link} target="_blank" rel="noopener noreferrer">{result.link}</a>
          </p>
        </div>
        <div style={styles.rightSection}>
          <div style={styles.resultDetails} dangerouslySetInnerHTML={{ __html: result.details }} />
        </div>
      </div>
    ))}
  </div>
)}

    </div>
  );
}

  
export default Search;
