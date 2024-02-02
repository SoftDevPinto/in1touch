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
    gap: '10px', // Adjust the gap as needed
  },
  button: {
    appearance: 'button',
    backfaceVisibility: 'hidden',
    backgroundColor: '#405cf5',
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
  },

  searchResultsContainer: {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centering horizontally
    backgroundColor: '#fff',
  },

  searchResult: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    width: '650px', // Set a fixed width for all search results
    boxSizing: 'border-box', // Ensure padding doesn't exceed the fixed width
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centering horizontally
    backgroundColor: '#fff',
  },
  resultTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  resultLink: {
    color: 'blue',
    textDecoration: 'underline',
    marginBottom: '8px',
  },
  resultDetails: {
    fontSize: '14px',
  },
  centeredResultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px', // Adjust margin as needed
  },
  mainContainer: {
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the start of the cross axis (top)
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
            "link": "https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=7477&eventRosterId=17",
            "details": "<br />Title: test <br />Categories: <br />Start Date: 10/12/2020 17:16<br />Address:  <br /> Manitoba<br> Canada <br />Description:  <br />URL: https://live1.in1touch.org/viewEvent.html?productId=7477 <br />End Date: 10/13/2020 17:16 <br />MAP: <img src=\"null\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
          },
          {
            "title":"Event Management Software Seminar - Tickets",
            "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=660&eventRosterId=17",
            "details":"<br />Title: Event Management Software Seminar - Tickets <br />Categories: <br />Start Date: 12/30/2016 12:00<br />Address:  <br /> 553 St.Mary's Rd.<br>winnipeg, Manitoba  R2M 3L4<br> Canada <br />Description: <p class=\"MsoNormal\" style=\"text-align: center;\" align=\"center\"><span style=\"font-family: Verdana;\"><span style=\"font-weight: bold; text-decoration: underline;\">Wednesday September 24</span><sup style=\"font-weight: bold; text-decoration: underline;\">th</sup> <o:p></o:p></span></p>\r\n<p class=\"MsoNormal\" style=\"text-align: center;\" align=\"center\"><span style=\"font-family: Verdana;\">11:30 AM &ndash; 1:00 PM <o:p></o:p></span></p>\r\n<p class=\"MsoNormal\" style=\"text-align: center;\" align=\"center\"><span style=\"font-family: Verdana;\"><span style=\"font-weight: bold;\">The Manitoba Club</span> <o:p></o:p></span></p>\r\n<p class=\"MsoNormal\" style=\"text-align: center;\" align=\"center\"><span style=\"font-family: Verdana;\">194 Broadway <o:p></o:p></span></p>\r\n<p class=\"MsoNormal\" style=\"text-align: center;\" align=\"center\"><span style=\"font-family: Verdana;\"><span style=\"font-weight: bold; font-style: italic;\">Complimentary Lunch will be served</span></span></p>\r\n<p class=\"MsoNormal\" style=\"text-align: center;\" align=\"center\"><span style=\"font-family: Verdana;\">Event Management is a unique web based tool that allows businesses to enhance their existing website with an Events Calendar and Registration System. The System provides full online registration and credit card payment capabilities as well as it communicates with the registrants on a one to one basis. <br /></span></p>\r\n<p class=\"MsoNormal\" style=\"text-align: center;\" align=\"center\"><span style=\"font-weight: bold;\">Cancellations:</span> All cancellations should be made by Monday September 22 12:00 PM</p>\r\n<p class=\"MsoNormal\" style=\"text-align: center;\" align=\"center\"><span style=\"font-weight: bold;\">Refunds:</span> No Refunds for Cancellations after September 22</p> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=660 <br />End Date: 12/30/2016 12:00 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.86599700,-97.11053500&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.86599700,-97.11053500&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
         },
         {
          "title":"2016 Winnipeg Career Symposium Volunteers",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6430&eventRosterId=17",
          "details":"<br />Title: 2016 Winnipeg Career Symposium Volunteers <br />Categories: lunch, AGM, <br />Start Date: 06/09/2016 18:00<br />Address:  <br /> RBC Convention Centre<br>375 York St.<br>Winnipeg, Manitoba  R3C 3J3<br> Canada <br />Description: <div style=\"text-align: center; line-height: normal;\">\r\n<div style=\"text-align: left;\">\r\n<div style=\"text-align: center;\"><span style=\"font-size: 14pt;\"> <span style=\"color: #0000cd; font-size: 14pt;\"> 2016 Winnipeg Rotary Career Symposium </span> <br style=\"color: #0000cd;\" /></span></div>\r\n</div>\r\n<span style=\"font-size: 14pt;\"> <span style=\"color: #0000cd; font-size: 14pt;\"> May 2nd - 4th, 2016 </span> <br style=\"color: #0000cd;\" /><span style=\"color: #0000cd; font-size: 14pt;\"> RBC Convention Centre </span> </span></div>\r\n<br /><br /><br /><br />\r\n<p>The Career Symposium is where Students, Parents and Educators all meet face-to-face with representatives from all sectors of the labour market. It is a key time for everyone looking to enter the workforce or better understand present and future opportunities. &nbsp; <span style=\"font-size: 10pt;\"> At the Career Symposium, attendees will have a chance to find jobs and submit resumes, learn about internships, volunteer opportunities, and leading academic programs. </span></p>\r\nThe MAMRT is looking for volunteers to staff the MAMRT Booth. &nbsp;Interested members and students are asked to register online. <br /><br />Volunteers may be offered a different shift to ensure coverage and allow for even representation of each modality. <br /><br /><span style=\"color: #ff0000; font-size: medium;\"> <strong> As the required number of volunteers&nbsp;are reached for each time slot; that time slot will no longer be seen. <br /><br />Volunteers:&nbsp; please arrive at least 15 minutes prior to your time slot to allow time for parking and registration. <br /></strong> </span> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=6430 <br />End Date: 06/10/2016 16:00 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.88900000,-97.14450000&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.88900000,-97.14450000&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"Pardy Hardy",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6 29&eventRosterId=17",
          "details":"<br />Title: Pardy Hardy <br />Categories: Training, <br />Start Date: 02/16/20 6 14:30<br />Address:  <br /> 177 Lombard Ave<br>Winnipeg, Manitoba  R3B 0W5<br> Canada <br />Description: <strong>Holiday Party: Festivus for the Re t of Us!<br /></strong>\r\n<p>Festivus&nbsp;serves as an alternative to participating in the pressures and&nbsp;commercialism&nbsp;of the&nbsp;Chri tmas and holiday season. Join us as we gather for drinks and appetizers ... who knows, there may be an unadorned&nbsp;aluminum&nbsp;\"Festivus pole,\" the \"Airing of&nbsp;Grievances\", \"Feats of Strength,\" and the labeling of easily explainable events as \"Festivus miracles.\"</p>\r\n<p><span style=\"font-size: 10pt;\">This wonderful, friendly, joyous event will happen at the city's highest restaurant: Prairie 360. Enjoy the view of our beautiful city at night while networking, catching up with old friends and meeting new ones.</span><span style=\"font-size: 10pt;\">&nbsp;</span></p>\r\n<p>Date: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Thursday, December 19<br />Time: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;5:30 to 8:30 pm<br />Location: &nbsp; &nbsp; &nbsp; &nbsp;Prairie 360, Piano Room<br />Cost: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Free for members<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$20 for guests&nbsp;<br />Registration: &nbsp; Online at our website<a href=\"http://www.youngassociates.org\"><br /></a>Deadline: &nbsp; &nbsp; &nbsp; &nbsp;Monday, December 16<br /><br />Note: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;First drink free, cash bar&nbsp;</p>\r\n<p>In keeping with the holiday tradition, we will once again make a donation to the Christmas Cheer Board.&nbsp; Please bring a new, unwrapped toy or non-perishable food item with you and we will make sure they are delivered to children in need.<br /><br />Hope to see you all soon!</p> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=6129 <br />End Date: 02/16/2016 20:30 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.89642900,-97.13758950&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.89642900,-97.13758950&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"Meetings",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6408&eventRosterId=17",
          "details":"<br />Title: Meetings <br />Categories: <br />Start Date: 03/29/2016 18:30, 02/17/2016 18:30, 02/25/2016 18:30, 02/23/2016 18:30, 02/04/2016 18:30<br />Address:  <br /> 205-1555 St. James St.<br>Winnipeg, Manitoba  R3H 1B5<br> Canada <br />Description:  <br />URL: https://live1.in1touch.org/viewEvent.html?productId=6408 <br />End Date: 03/29/2016 20:30, 02/17/2016 20:30, 02/25/2016 20:30, 02/23/2016 20:30, 02/04/2016 20:30 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.91106400,-97.19909910&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.91106400,-97.19909910&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"IT Congress",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4994&eventRosterId=17",
          "details":"<br />Title: IT Congress <br />Categories: <br />Start Date: 02/28/2014 22:29<br />Address:  <br /> 200 - 1120 Grant Avenue<br>Winnipeg, Manitoba  R3R 3R3<br> Canada <br />Description:  <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4994 <br />End Date: 02/28/2014 22:29 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.85867000,-97.25381000&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.85867000,-97.25381000&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"AsthmaTrec",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6076&eventRosterId=17",
          "details":"<br />Title: AsthmaTrec <br />Categories: Training, Training, <br />Start Date: 09/19/2013 00:00<br />Address:  <br /> 205-1555 St. James Street<br>Winnipeg, Manitoba  R3H 1B5<br> Canada <br />Description: <div align=\"center\"><img src=\"http://live1.olasoft.com/uploaded/web/Resptrec%20ad%20July%202013_.png\" alt=\"\" usemap=\"#RespTrec\" /> <map name=\"RespTrec\"> \r\n<area shape=\"rect\" coords=\"45,190,800,250\" href=\"http://www.resptrec.org/asthmatrec.php\" />\r\n \r\n<area shape=\"rect\" coords=\"45,260,800,330\" href=\"http://www.resptrec.org/copdtrec.php\" />\r\n \r\n<area shape=\"rect\" coords=\"45,390,800,450\" href=\"http://www.resptrec.org\" />\r\n </map></div> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=6076 <br />End Date: 09/22/2013 23:59 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.91106400,-97.19909910&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.91106400,-97.19909910&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"AsthmaTrec Registration",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=6075&eventRosterId=17",
          "details":"<br />Title: AsthmaTrec Registration <br />Categories: <br />Start Date: 07/25/2013 00:00<br />Address:  <br /> 205-1555 St. James Street<br>Winnipeg, Manitoba  R3H 1B5<br> Canada <br />Description: <div align=\"center\"><img src=\"http://live1.olasoft.com/uploaded/web/Resptrec%20ad%20July%202013_.png\" alt=\"\" usemap=\"#RespTrec\" /> <map name=\"RespTrec\"> \r\n<area shape=\"rect\" coords=\"45,190,800,250\" href=\"http://www.resptrec.org/asthmatrec.php\" />\r\n \r\n<area shape=\"rect\" coords=\"45,260,800,330\" href=\"http://www.resptrec.org/copdtrec.php\" />\r\n \r\n<area shape=\"rect\" coords=\"45,390,800,450\" href=\"http://www.resptrec.org\" />\r\n </map></div> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=6075 <br />End Date: 07/25/2013 23:59 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.91100000,-97.19880000&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.91100000,-97.19880000&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"17th Biennial CAPO Conference",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4985&eventRosterId=17",
          "details":"<br />Title: 17th Biennial CAPO Conference <br />Categories: <br />Start Date: 11/26/2010 22:30<br />Address:  <br /> 900, boul. Ren&eacute;-L&eacute;vesque Est, 2e &eacute;tage<br>Soci&eacute;t&eacute; du Centre des congr&eacute;s de Quebec<br>Quebec City, Quebec  G1R 2B5<br> Canada <br />Description: <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td><table id=\"Table2\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"BodyText1\"><div><span style=\"font-size: 12pt;\"><br></span></div><div><div align=\"center\"><table style=\"width: 429px; border-collapse: collapse;\" width=\"771\" border=\"0\" cellpadding=\"0\"><tbody><tr><td><p align=\"center\"><span style=\"font-size: 12pt;\"><img style=\"width: 780px; height: 101px;\" alt=\"\" src=\"https://custom.cvent.com/F4AC2EF53A9B48D9B404D0D01D4D3F86/pix/6fa97589c2ec4d059f091150fe880fbe.jpg\" width=\"796\" border=\"0\" height=\"104\"></span></p></td></tr><tr><td>&nbsp;<br><table style=\"border-collapse: collapse; width: 100%;\"><tbody><tr><td style=\"border: 1px solid rgb(0, 0, 0);\"><span style=\"font-weight: bold; text-decoration: underline;\">Conference Information</span><br><br><a href=\"https://app1.olasoft.com/uploaded/1/web/hotel.pdf\">Hotel &amp; Travel</a><br><a href=\"https://app1.olasoft.com/uploaded/1/web/committee.pdf\">Committee</a><br><a href=\"https://app1.olasoft.com/uploaded/1/web/speakers.pdf\">Speaker BIO</a><br><a href=\"https://app1.olasoft.com/uploaded/1/web/registration.pdf\">Registration &amp; Policies</a><br><a href=\"https://app1.olasoft.com/uploaded/1/web/vacation.pdf\">Vacation Planning</a><br><a href=\"https://app1.olasoft.com/uploaded/1/web/pricing.pdf\">Delegate Registration &amp; Pricing</a><br><br></td><td style=\"border: 1px solid rgb(0, 0, 0);\"><span style=\"font-weight: bold; text-decoration: underline;\">Exhibitor Information</span><br><br><a href=\"https://app1.olasoft.com/uploaded/1/web/exhibitHall.pdf\">Exhibit Hall</a><br><a href=\"https://app1.olasoft.com/uploaded/1/web/prospectus.pdf\">Exhibitor Prospectus</a><br><br><br><br><br><br></td><td style=\"border: 1px solid rgb(0, 0, 0);\"><span style=\"text-decoration: underline; font-weight: bold;\">Program &amp; Abstracts</span><br><br><a href=\"https://app1.olasoft.com/uploaded/1/web/preliminary.pdf\">Preliminary Program</a><br><a href=\"https://app1.olasoft.com/uploaded/1/web/abstracts.pdf\">Abstracts</a><br><br><br><br><br><br></td></tr></tbody></table><br></td></tr><tr><td><p style=\"font-family: Arial; font-size: 10pt;\" align=\"center\">The\r\n Canadian Association for Prosthetics and Orthotics invites all of you \r\nto join us in Quebec City for the 17th Biennial CAPO Conference, August 4\r\n – 7, 2010 at the Soci&eacute;t&eacute; du Centre des congr&eacute;s de Quebec</p><p style=\"font-family: Arial; font-size: 10pt;\" align=\"left\"><span style=\"font-size: 12pt;\"><img style=\"width: 240px; height: 376px;\" alt=\"\" src=\"https://custom.cvent.com/F4AC2EF53A9B48D9B404D0D01D4D3F86/pix/32d817ad34b94724a6fd9cc401f1c493.jpg\" ?=\"\" width=\"240\" align=\"left\" border=\"0\" height=\"376\"></span></p><div>&nbsp;<p align=\"justify\"><span style=\"font-family: Arial; font-size: 10pt;\">The\r\n CAPO conference is Canada's premiere P&amp;O event. Our scientific \r\ncommittee has been working diligently to organize a stimulating program \r\nfeaturing invited speakers, workshops and free paper presentations. \r\nImprove your knowledge of patient care and technical procedures. Learn \r\nmore about outcome measures and evidence based practice. Plan to attend \r\nthis exciting event!</span></p><p align=\"justify\"><span style=\"font-family: Arial; font-size: 10pt;\">Over\r\n 70 exhibitors will be on hand to demonstrate the newest developments in\r\n materials, technology and procedures. Featured in the exhibit hall once\r\n again will be the Product Display Showcase. This series of lunch-time \r\npresentations will feature 15-minute in-depth presentations. Learn more \r\nabout a specific product or procedure while seated in the mini-theatre \r\nsetting right inside the exhibit hall.</span></p><p align=\"justify\"><span style=\"font-family: Arial; font-size: 10pt;\">We\r\n are excited to host this national event in picturesque Quebec City, a \r\nUNESCO World Heritage site and the only walled city north of Mexico! \r\nBring friends and family and enjoy old-world charm, engaging festivals \r\nand fine dining. We hope you will join us to share information, explore \r\nnew concepts, make new friends, and maybe even have a bit of fun at the \r\nsame time.</span></p></div></td></tr><tr><td style=\"height: 387px;\"><p align=\"center\"><span style=\"font-size: 12pt;\"><img alt=\"\" src=\"https://custom.cvent.com/F4AC2EF53A9B48D9B404D0D01D4D3F86/pix/ca80062a54ee4bbb97924df511aebc1a.jpg\" width=\"590\" border=\"0\" height=\"476\"></span></p></td></tr><tr><td>&nbsp;</td></tr><tr><td>&nbsp; <img style=\"width: 256px; height: 104px;\" alt=\"\" src=\"https://custom.cvent.com/F4AC2EF53A9B48D9B404D0D01D4D3F86/pix/7bb3bd7615ef4ed59d3c560aa33554c7.JPG\" ?=\"\" width=\"256\" align=\"left\" border=\"0\" height=\"104\"><table style=\"width: 280px; height: 40px;\" width=\"280\" align=\"left\" border=\"0\" cellpadding=\"2\" cellspacing=\"2\"><tbody><tr><td style=\"width: 458px; font-family: Arial; height: 34px; font-size: 14pt;\"><div align=\"center\"><span style=\"color: rgb(255, 204, 0);\"><span style=\"color: rgb(255, 204, 0);\"><span style=\"color: rgb(255, 204, 51);\"><span style=\"color: rgb(255, 204, 51);\"><span style=\"color: rgb(255, 204, 0);\"><span style=\"color: rgb(255, 204, 0);\">Gold&nbsp;<br>Sponsors</span></span></span></span></span></span></div></td></tr></tbody></table><div align=\"center\"><img alt=\"\" src=\"https://custom.cvent.com/F4AC2EF53A9B48D9B404D0D01D4D3F86/pix/84a70fd37c034e8896648be8d859962d.JPG\" ?=\"\" align=\"right\" border=\"0\"></div><div align=\"center\">&nbsp;</div><div align=\"center\">&nbsp;</div></td></tr><tr><td><br></td></tr></tbody></table></div></div></td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"Spacer3\">&nbsp;</td>\r\n        </tr>\r\n      </tbody></table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td class=\"Spacer3\"><br></td>\r\n  </tr>\r\n  <tr>\r\n    <td>\r\n      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tbody><tr>\r\n          <td class=\"BodyText1\" style=\"vertical-align: top; width: 560px;\"><br></td>\r\n          <td class=\"BodyText1\" align=\"right\">\r\n            <table style=\"border-collapse: collapse;\" cellpadding=\"0\" cellspacing=\"0\">\r\n              <tbody><tr></tr>\r\n            </tbody></table>\r\n          </td>\r\n        </tr>\r\n      </tbody></table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td><input name=\"planner\" value=\"capo@mts.net\" type=\"hidden\"><input name=\"title\" value=\"2010 CAPO CONFERENCE\" type=\"hidden\"><input name=\"start\" value=\"2010-08-04T09:00:00-04:00\" type=\"hidden\"><input name=\"end\" value=\"2010-08-07T16:00:00-04:00\" type=\"hidden\"><input name=\"loc\" value=\"\" type=\"hidden\"><input name=\"desc\" value=\"\" type=\"hidden\"><input name=\"createdate\" value=\"\" type=\"hidden\"><br></td>\r\n  </tr>\r\n  <tr>\r\n    <td class=\"Spacer3\"><br></td>\r\n  </tr>\r\n  <tr>\r\n    <td class=\"BodyText1\"><div align=\"center\">&nbsp;</div><div align=\"center\"><img alt=\"\" src=\"https://custom.cvent.com/F4AC2EF53A9B48D9B404D0D01D4D3F86/pix/b9bb0817feb14272bd64e8a64b67bb45.JPG\" ?=\"\" align=\"left\" border=\"0\"></div><p>&nbsp;<img style=\"width: 315px; height: 80px;\" alt=\"\" src=\"https://custom.cvent.com/F4AC2EF53A9B48D9B404D0D01D4D3F86/pix/1fdef13142244a759d7873417a39566c.JPG\" ?=\"\" width=\"315\" align=\"right\" border=\"0\" height=\"80\"></p><table style=\"width: 138px; height: 29px;\" width=\"138\" align=\"center\" border=\"0\" cellpadding=\"2\" cellspacing=\"2\"><tbody><tr><td><p style=\"font-size: 14pt; color: rgb(153, 153, 153);\" align=\"center\">Silver Sponsors</p></td></tr></tbody></table></td>\r\n  </tr>\r\n  <tr>\r\n    <td class=\"Spacer3\">&nbsp;</td>\r\n  </tr>\r\n  <tr>\r\n    <td>\r\n      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tbody><tr>\r\n          <td class=\"BodyTextBold1\" width=\"63px\" align=\"left\">Planner</td>\r\n          <td><a class=\"BodyLink1\" href=\"javascript:void(0);\" onclick=\"                                    document.location=('MailTo:'+escape('capo@mts.net') + '?Subject=RE:' + escape('2010 CAPO CONFERENCE'));return false;\r\n                                \">Canadian Association for Prosthetics and Orthotics</a></td></tr></tbody></table></td></tr></tbody></table> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4985 <br />End Date: 11/26/2010 22:31 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=46.80958070,-71.21562540&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|46.80958070,-71.21562540&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"CRBSC / WRLA Manual Estimating Program",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4992&eventRosterId=17",
          "details":"<br />Title: CRBSC / WRLA Manual Estimating Program <br />Categories: <br />Start Date: 10/30/2010 13:24<br />Address:  <br /> 2520 Portage Avenue<br>Holiday Inn Winnipeg Airport West<br>Winnipeg, Manitoba  R3J 3T6<br> Canada <br />Description: <p class=\"style57\" style=\"margin-bottom: 0pt;\" align=\"center\"><span style=\"font-family: Verdana;\">CRBSC / WRLA Manual Estimating Program</span></p>\r\n\r\n          \r\n            <p style=\"margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-family: Verdana; font-size: 16px;\"><span style=\"font-size: 13px;\">&nbsp;</span></span></p>\r\n                          <p style=\"margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-family: Verdana; font-size: 16px;\"><span style=\"font-size: 13px;\">The\r\n program is structured on a progressive basis, starting with Estimating \r\nFundamentals - Decks and Garages, Estimating for Residential \r\nConstruction and ending with a Advanced Estimators Forum. There will be \r\nan exam and certificate awarded at the end of each level. Upon \r\ncompletion of the three core courses the student will be awarded a \r\n\"Professional Estimator\" certificate.</span> </span></p>\r\n                          <p style=\"margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-family: Verdana; font-size: 16px;\"><span style=\"font-family: verdana; font-size: 12px; color: black; font-weight: bold;\">&nbsp;</span></span></p>\r\n                          <p style=\"margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-family: Verdana; font-size: 16px;\"><span style=\"font-family: verdana; font-size: 12px; color: black; font-weight: bold;\">&nbsp;</span></span></p>\r\n                          <p style=\"margin-top: 0pt;\"><span class=\"style61\" style=\"font-family: Verdana; font-size: 16px;\"><span style=\"font-weight: bold;\" class=\"style43\"> Estimating Fundamentals - Decks and Garages</span></span><span style=\"font-family: Verdana; font-size: 16px;\"><span class=\"style43\"><span class=\"style41\"><span style=\"font-family: verdana;\"> (2-day course)</span></span></span></span> </p>\r\n                          <p><span style=\"font-family: Verdana; font-weight: bold;\">COURSE OUTLINE</span></p>\r\n                          <ul class=\"style44\"><li><span style=\"font-family: Verdana;\">Applying math to estimating - thought processes</span></li><li><span style=\"font-family: Verdana;\">Estimate vs. Quotation</span></li><li><span style=\"font-family: Verdana;\">Dimensional lumber and basic building material components</span></li><li><span style=\"font-family: Verdana;\">Decks. </span></li><li><span style=\"font-family: Verdana;\">Understanding roofs and pitch</span></li><li><span style=\"font-family: Verdana;\">Detached garage material estimating</span></li><li><span style=\"font-family: Verdana;\">Understanding hip roofs or hip roof basics. </span></li><li><span style=\"font-family: Verdana;\">A \r\nstep-by-step workbook is included and is yours to keep for future \r\nreference. There will be a examination at the end of this course.</span></li></ul> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4992 <br />End Date: 10/30/2010 13:24 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.87467190,-97.25957080&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.87467190,-97.25957080&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"ISA International Sign Expo 2011",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4976&eventRosterId=17",
          "details":"<br />Title: ISA International Sign Expo 2011 <br />Categories: <br />Start Date: 09/22/2010 12:21<br />Address:  <br /> 3950 Las Vegas Boulevard South<br>Mandalay Bay <br>Winnipeg, Nevada  89119<br> United States <br />Description: <span style=\"font-size: 14pt; font-weight: bold;\">Become an Exhibitor\t\t\t\r\n\t\t\t\t\r\n\t\t\r\n\t\t\t\t\t\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</span><p><span style=\"font-size: 10pt;\"><span style=\"font-size: 12pt; font-weight: bold;\">Make a Lasting Impression. Exhibit at&nbsp;ISA Sign Expo 2011.</span></span></p>\r\n<p><span style=\"font-size: 10pt; font-weight: bold;\">&nbsp;</span>ISA International Sign Expo 2011 is the premier event for the global \r\nsign industry and exhibiting is the right choice to achieve your sales \r\nand marketing goals.</p>\r\n<p>&nbsp;ISA Sign Expo gives you the opportunity to not only show your product\r\n or describe your service, but also create that all important first \r\nimpression. Once a year, every facet of the industry converges in one \r\nplace for the ISA Sign Expo — be there to build the relationships that \r\nwill transform your business.</p>\r\n<p><a target=\"_blank\" href=\"http://www.signexpo.org/images/site/ISA_2011_Exhibitor_Propsectus.pdf\"><img src=\"http://www.signexpo.org/images/site/cover_EX_PRO.jpg\" alt=\"2011 Sign Expo Exhibitor Prospectus\" style=\"float: right;\" width=\"158\" height=\"205\"></a></p>\r\n<p>&nbsp;</p><ul><li><span style=\"font-weight: bold;\"><a href=\"http://www.signexpo.org/images/site/ISA_2011_Exhibitor_Propsectus.pdf\" title=\"ISA_2011_Exhibitor_Propsectus.pdf\"><span style=\"font-size: 10pt;\">Download the ISA EXPO 2011 Exhibitor Prospectus</span></a></span></li><li><span style=\"font-size: 10pt;\"><a target=\"_blank\" href=\"http://www.signexpo.org/component/form/Contract%20for%20Exhibit%20Space?form_id=10\"><span style=\"font-weight: bold;\">Co</span><span style=\"font-weight: bold;\">mplete the 2011 Exhibitor Space Contract</span></a></span></li><li><span style=\"font-weight: bold;\"><a target=\"_blank\" href=\"http://www.mapyourshow.com/shows/index.cfm?SHOW_ID=SIGN11&amp;alt_entry=true&amp;curr_pri=facility&amp;curr_sec=OO\"><span style=\"font-size: 10pt;\">2011 Interactive Floor Plan</span></a></span></li><li><span style=\"font-weight: bold;\"><a target=\"_blank\" href=\"http://sign11.mapyourshow.com/3_0/search.cfm;jsessionid=84301412f981fa9906db743f6e2961e39184?let=%40\"><span style=\"font-size: 10pt;\">2011 Exhibitor List</span></a></span></li></ul>\r\n<p><span style=\"font-size: 10pt; font-weight: bold;\">&nbsp;</span></p>\r\n<p><span style=\"font-size: 10pt; font-weight: bold;\">Benefits of exhibiting at ISA Sign Expo 2011 that maximize the impact of your show investment:</span></p>\r\n<p>&nbsp;</p><ul><li>Exposure on ISA Sign Expo’s official website, <a href=\"http://www.signexpo.org/\">www.signexpo.org</a></li><li>Use of the official ISA Sign Expo logo on pre-show and post-show marketing materials</li><li>ISA Sign Expo banner ad to use on your website</li><li>Discounted staff education at the ISA Sign Expo</li><li>Exclusive access to the full pre–and post-show attendee lists</li><li>On-site exhibitor lounge</li><li>Discounted exhibit rates at ISA regional events</li><li>Unlimited complimentary customer passes</li><li>Expo hours designed to maximize attendance and provide additional networking opportunities</li><li>Exposure in the official on-site program, both alphabetically and by product category</li><li>24-hour security from set-up to tear-down</li></ul>\r\n<p>&nbsp;Show your commitment to the industry. Profits from ISA Sign Expo \r\nsupport expanded industry programs, education and work against \r\nrestrictive sign codes.</p>\r\n<p>&nbsp;<span style=\"font-size: 10pt; font-weight: bold;\">Attendees are actively seeking to connect with educated sign professionals</span> <br></p><ul><li>See the latest technology 83%</li><li>Purchase new products and services 51%</li><li>Network with colleagues 48%</li><li>Make international contacts 16%</li><li>Educational programs 15% </li></ul>\r\n<p>&nbsp;<span style=\"font-size: 10pt; font-weight: bold;\">Here's what some of the participants had to say about the Sign Expo 2010 in Orlando:</span></p>\r\n<p>&nbsp;<span style=\"font-style: italic;\">“ Our traffic and lead count were upbeat. We couldn’t have asked for or expected more.”</span> <br>– Paul Kampe, Texture Plus, ISA International Sign Expo 2010 Exhibitor</p>\r\n<p>&nbsp;<span style=\"font-style: italic;\">“The 2010 ISA Sign Expo was a great event! Great attendance, \r\nsmooth operations and a wonderful opportunity to showcase products, meet\r\n vendors and new customers.”<br></span>– ISA International Sign Expo 2010 Exhibitor</p>\r\n<p>&nbsp;<span style=\"font-size: 10pt;\"><span style=\"font-size: 12pt;\"><span style=\"color: rgb(146, 3, 105);\"><span style=\"font-weight: bold;\">Space is going fast!</span> </span><br></span><br>For more information on exhibiting, please contact Bill McGlade at </span><a href=\"mailto:%20%3Cscript%20language=%27JavaScript%27%20type=%27text/javascript%27%3E%20%3C%21--%20var%20prefix%20=%20%27mailto:%27;%20var%20suffix%20=%20%27%27;%20var%20attribs%20=%20%27%27;%20var%20path%20=%20%27hr%27%20+%20%27ef%27%20+%20%27=%27;%20var%20addy94418%20=%20%27bill.mcglade%27%20+%20%27@%27;%20addy94418%20=%20addy94418%20+%20%27signs%27%20+%20%27.%27%20+%20%27org%27;%20document.write%28%20%27%3Ca%20%27%20+%20path%20+%20%27%5C%27%27%20+%20prefix%20+%20addy94418%20+%20suffix%20+%20%27%5C%27%27%20+%20attribs%20+%20%27%3E%27%20%29;%20document.write%28%20addy94418%20%29;%20document.write%28%20%27%3C%5C/a%3E%27%20%29;%20//--%3E%20%3C/script%3E%3Cscript%20language=%27JavaScript%27%20type=%27text/javascript%27%3E%20%3C%21--%20document.write%28%20%27%3Cspan%20style=%5C%27display:%20none;%5C%27%3E%27%20%29;%20//--%3E%20%3C/script%3EThis%20e-mail%20address%20is%20being%20protected%20from%20spambots.%20You%20need%20JavaScript%20enabled%20to%20view%20it%20%3Cscript%20language=%27JavaScript%27%20type=%27text/javascript%27%3E%20%3C%21--%20document.write%28%20%27%3C/%27%20%29;%20document.write%28%20%27span%3E%27%20%29;%20//--%3E%20%3C/script%3E\"><span style=\"font-size: 10pt;\">\r\n <script language=\"JavaScript\" type=\"text/javascript\">\r\n <!--\r\n var prefix = 'm&#97;&#105;lt&#111;:';\r\n var suffix = '';\r\n var attribs = '';\r\n var path = 'hr' + 'ef' + '=';\r\n var addy63714 = 'b&#105;ll.mcgl&#97;d&#101;' + '&#64;';\r\n addy63714 = addy63714 + 's&#105;gns' + '&#46;' + '&#111;rg';\r\n document.write( '<a ' + path + '\\'' + prefix + addy63714 + suffix + '\\'' + attribs + '>' );\r\n document.write( addy63714 );\r\n document.write( '<\\/a>' );\r\n //-->\r\n </script></span></a><a href=\"mailto:bill.mcglade@signs.org\">bill.mcglade@signs.org</a><script language=\"JavaScript\" type=\"text/javascript\">\r\n <!--\r\n document.write( '<span style=\\'display: none;\\'>' );\r\n //-->\r\n </script><span style=\"display: none;\">This e-mail address is being protected from spambots. You need JavaScript enabled to view it\r\n <script language=\"JavaScript\" type=\"text/javascript\">\r\n <!--\r\n document.write( '</' );\r\n document.write( 'span>' );\r\n //-->\r\n </script></span><span style=\"font-size: 10pt;\"> or (703) 836-5685. </span></p> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4976 <br />End Date: 09/24/2010 12:21 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=36.08293720,-115.14741340&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|36.08293720,-115.14741340&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"130th Annual General Meeting & Conference",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4891&eventRosterId=17",
          "details":"<br />Title: 130th Annual General Meeting & Conference <br />Categories: <br />Start Date: 09/14/2010 20:59<br />Address:  <br /> Elkhorn Resort<br>Onanole, Manitoba  R0J 1N0<br> Canada <br />Description: <p style=\"text-align: center; font-weight: bold; text-decoration: underline;\"><span style=\"font-style: italic;\">Mark your Calendar!!!!</span></p>\r\n<p style=\"text-align: center;\">&nbsp;<span style=\"font-style: italic;\">Make your Reservations Today!!!</span></p>\r\n<p style=\"text-align: center;\">&nbsp;AMLS is pleased to announce the</p>\r\n<p style=\"text-align: center;\">&nbsp;130th Annual General Meeting &amp; \r\nConference</p>\r\n<p style=\"text-align: center;\">Elkhorn Resort</p>\r\n<p style=\"text-align: center;\">September 14, 15, 16, 2010</p>\r\n<p style=\"text-align: right;\">&nbsp;<br></p>\r\n<p style=\"text-align: center;\"><span style=\"font-weight: bold; font-style: italic;\">Watch for details</span></p>\r\n<p style=\"text-align: center;\">&nbsp;<span style=\"font-weight: bold;\">***************************************************</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-weight: bold;\">2009 - 2010 Executive Council \r\nAnnounced</span></p>\r\n<h2 style=\"text-align: center;\">&nbsp;<img src=\"http://www.amls.ca/uploads/images/100_1742.JPG\" alt=\"\"></h2><br>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">The Association of Manitoba Land \r\nSurveyors is</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">pleased to announce that</span></p>\r\n<p style=\"text-align: center;\">&nbsp;<span style=\"font-weight: bold; font-style: italic;\">John S. Kulchycki, M.L.S. \r\nC.L.S.</span><span style=\"font-style: italic;\"></span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">&nbsp;has been elected to the office of \r\nPresident</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">of the Association for 2009– 2010</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">&nbsp;</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-weight: bold; font-style: italic;\">2009 -2010 Executive Council</span></p>\r\n<p style=\"text-align: center;\">&nbsp;<span style=\"font-weight: bold; font-style: italic;\">Vice President</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">G. A. Lund, M.L.S.</span></p>\r\n<p style=\"text-align: center;\">&nbsp;<span style=\"font-weight: bold; font-style: italic;\">Past President</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">S.J. Bossenmaier M.L.S.&nbsp;&nbsp; P. Eng.</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">&nbsp;</span><span style=\"font-weight: bold; font-style: italic;\">Secretary -Treasurer</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">&nbsp;R. W. Sherby, M.L.S.</span></p>\r\n<p style=\"text-align: center;\">&nbsp;<span style=\"font-weight: bold; font-style: italic;\">Councillors</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">D.N. Pratt, M.L.S. C.L.S. </span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">D.N. Bourgeois, M.L.S. C.L.S.</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">M.K. Finnie, M.L.S. </span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">D.S. McBurney, M.L.S. C.L.S.</span></p>\r\n<p style=\"text-align: center;\">&nbsp;<span style=\"font-weight: bold; font-style: italic;\">Registrar</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-style: italic;\">J.G. Watling, M.L.S. C.L.S., P. Eng</span></p>\r\n<p style=\"text-align: center;\"><span style=\"font-weight: bold; font-style: italic;\">&nbsp;</span></p> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4891 <br />End Date: 09/16/2010 20:59 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=50.65805448,-99.97188990&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|50.65805448,-99.97188990&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"Regular DoDAF Short Courses",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4902&eventRosterId=17",
          "details":"<br />Title: Regular DoDAF Short Courses <br />Categories: <br />Start Date: 09/13/2010 11:01<br />Address:  <br /> 7054 Haycock Road<br>UVA Northern Virginia Center <br>Falls Church, Virginia  22043<br> United States <br />Description: <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr></tr><tr><td><br></td><td><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td><span class=\"regFormGlobalEventTitle\">FEA(F)/Commercial Fall 2010 </span> (<a href=\"javascript:loadEventDetails(807187);\"><span style=\"font-weight: bold;\">Event Details</span></a>) <input id=\"urlReferer\" value=\"http://feacinstitute.org/ea-certification/reg-FEAF-F10.php\" type=\"hidden\"></td></tr><tr><td><span class=\"regFormGlobalEventDate\">Monday, September 13, 2010 - September 17, 2010</span></td></tr><tr><td class=\"regFromGlobalEventHeader\"><span style=\"font-weight: bold;\"><br>UVA Northern Virginia Center </span></td></tr><tr><td>7054 Haycock Road<br>Falls Church, VA 22043</td></tr></tbody></table></td></tr></tbody></table> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4902 <br />End Date: 09/17/2010 11:01 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=38.89894740,-77.20027450&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|38.89894740,-77.20027450&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"FEA(F)/Commercial Fall 2010 shops",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4901&eventRosterId=17",
          "details":"<br />Title: FEA(F)/Commercial Fall 2010 shops <br />Categories: <br />Start Date: 08/30/2010 11:01<br />Address:  <br /> 7054 Haycock Road<br>UVA Northern Virginia Center <br>Falls Church, Virginia  22043<br> United States <br />Description: <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr></tr><tr><td><br></td><td><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td><span class=\"regFormGlobalEventTitle\">FEA(F)/Commercial Fall 2010 </span> (<a href=\"javascript:loadEventDetails(807187);\"><span style=\"font-weight: bold;\">Event Details</span></a>) <input id=\"urlReferer\" value=\"http://feacinstitute.org/ea-certification/reg-FEAF-F10.php\" type=\"hidden\"></td></tr><tr><td><span class=\"regFormGlobalEventDate\">Monday, August 30, 2010 - Tuesday, December 07, 2010</span></td></tr><tr><td class=\"regFromGlobalEventHeader\"><span style=\"font-weight: bold;\"><br>UVA Northern Virginia Center </span></td></tr><tr><td>7054 Haycock Road<br>Falls Church, VA 22043</td></tr></tbody></table></td></tr></tbody></table> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4901 <br />End Date: 09/02/2010 11:01 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=38.89894740,-77.20027450&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|38.89894740,-77.20027450&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"Dealer Training June 2010",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4957&eventRosterId=17",
          "details":"<br />Title: Dealer Training June 2010 <br />Categories: <br />Start Date: 07/30/2010 15:03<br />Address:  <br /> 680 Moray Street<br>Winnipeg, Manitoba  R3J 3S3<br> Canada <br />Description: <h2>Introducing MacDon’s All-New M Series <acronym title=\"self-propelled\">SP</acronym> Windrowers With Dual Direction™ Technology</h2><p>Don’t blink, you might miss them. With a top highway speed of 23 MPH (37 km/h), MacDon’s new super-fast M Series self-propelled windrowers set a new benchmark for SP windrower design, productivity and performance. They feature MacDon’s patented Dual Direction™ technology (M200, M150), which allows the operator to easily rotate the operator’s station from a cab forward position for cutting, to an engine forward position for faster, more stable, highway travel. You’ll enjoy faster cutting, faster travel between fields and, best of all, be home faster than ever before.</p><p><img src=\"http://www.macdon.com/img/mseries-cover.jpg\" alt=\"\"></p> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4957 <br />End Date: 07/30/2010 15:03 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.89501040,-97.26127450&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.89501040,-97.26127450&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"Professional Development Seminars",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4947&eventRosterId=17",
          "details":"<br />Title: Professional Development Seminars <br />Categories: <br />Start Date: 07/30/2010 12:10<br />Address:  <br /> 1670 Portage Ave<br>Viscount Gort Hotel<br>Winnipeg, Manitoba  R3J 0C9<br> Canada <br />Description: <div style=\"text-align: center;\"><span style=\"font-weight: bold;\">Professional Development \r\nSeminars</span></div>\r\n<div style=\"text-align: center;\">Wednesday, January 13, 2010</div>\r\n<div style=\"text-align: center;\">Viscount Gort Hotel</div>\r\n<div style=\"text-align: center;\">1670 Portage Ave, Winnipeg</div>\r\n<div style=\"text-align: center;\">9 am - 4pm</div>\r\n<div style=\"text-align: center;\"><span style=\"font-size: x-small; font-weight: bold; font-style: italic;\">&nbsp;</span></div>\r\n<div style=\"text-align: center;\"><span style=\"font-size: x-small; font-weight: bold; font-style: italic;\">lunch\r\n will be provided</span></div>\r\n<div style=\"text-align: center;\"><span style=\"font-size: x-small; font-weight: bold; font-style: italic;\">&nbsp;</span></div>\r\n<div style=\"text-align: center;\"><span style=\"font-size: x-small; font-weight: bold; font-style: italic;\">&nbsp;</span></div>\r\n<p style=\"text-align: left;\"><span style=\"font-size: small;\">Presentation:\r\n <span style=\"font-weight: bold;\">&nbsp; Building a Mentoring Relationship</span></span></p>\r\n<p style=\"text-align: left;\"><span style=\"font-size: small;\">Presenter: </span><a href=\"http://www.amls.ca/uploads/Pages%20from%20Value%20Proposal%20AMLS%20website.pdf\"><span style=\"font-size: small;\">Deri Latimer, Human Resource Consultant</span></a></p>\r\n<p><span style=\"font-size: small;\">&nbsp;In this morning workshop, you will \r\nlearn how to create and maintain an effective mentoring relationship as \r\nwell as:</span></p>\r\n<p><span style=\"font-size: small;\">&nbsp;Understand Mentoring and how it \r\nbenefits the organization, the mentor, and the protege; identify what \r\nconstitutes an effective mentoring participant; clarify the expectations\r\n of the mentor and protege roles; and establish a mentorship agreement \r\nthat respects both protege and mentor needs.</span></p>\r\n\r\n<span style=\"font-family: ComicSansMS,Bold; font-size: large;\"><span style=\"font-family: ComicSansMS,Bold; font-size: large;\">\r\n<p style=\"text-align: center;\"><span style=\"font-size: small; font-weight: bold;\">&nbsp;&nbsp;******************</span></p>\r\n\r\n<p style=\"text-align: left;\"><span style=\"font-size: small;\">Presentation:&nbsp;\r\n <span style=\"font-weight: bold;\">Building&nbsp;&amp; Growing Strong Client Relationships</span> </span></p>\r\n<p style=\"text-align: left;\"><span style=\"font-size: small;\">&nbsp;<span style=\"font-size: small;\">Presenter:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><a href=\"http://www.cechanec.com/aboutus.html\"><span style=\"font-size: small;\">Cec Hanec</span></a></span></p>\r\n<p style=\"text-align: left;\"><span style=\"font-size: small;\">&nbsp;This \r\nseminar is focused on building strong client relationships, the \r\nimportance of first impressions, building trust and credibility with \r\nclients, and the value of building business relationships.</span></p>\r\n</span></span> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4947 <br />End Date: 07/30/2010 12:10 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.87971200,-97.20360500&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.87971200,-97.20360500&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"AMLS Annual Golf Tournament",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4596&eventRosterId=17",
          "details":"<br />Title: AMLS Annual Golf Tournament <br />Categories: <br />Start Date: 06/30/2010 18:00<br />Address:  <br /> St. Boniface Golf Course<br>100 Youville Street<br>winnipeg, Manitoba  R2H 2S1<br> Canada <br />Description: <a href=\"http://www.amls.ca/index.php?mact=Calendar,cntnt01,default,0&amp;cntnt01event_id=45966&amp;cntnt01display=event&amp;cntnt01lang=en_GB&amp;cntnt01detailpage=&amp;cntnt01return_id=56&amp;cntnt01returnid=56\">AMLS\r\n Annual Golf Tournament</a><br><div><span style=\"text-decoration: underline; font-weight: bold;\">Event</span>\r\n - PMI Manitoba 9 Hole Texas Scramble Golf Tourney</div>\r\n<div>&nbsp;</div>\r\n<div><span style=\"text-decoration: underline; font-weight: bold;\">Date </span>-\r\n September 15th, 2009</div>\r\n<div>&nbsp;</div>\r\n<div><span style=\"text-decoration: underline; font-weight: bold;\">Place </span>-\r\n St. Boniface Golf Course</div>\r\n<div>&nbsp;</div>\r\n<div><span style=\"text-decoration: underline; font-weight: bold;\">Fees</span>\r\n - Members - $65.00</div>\r\n<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guest - $75.00</div>\r\n<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dinner Only - $30.00</div>\r\n<div>&nbsp;</div>\r\n<div>(Carts, Power Carts, Club Rentals extra)</div>\r\n<ul><li>\r\n<div>Register as a &nbsp;4 person team or as an individual</div>\r\n</li><li>\r\n<div>Dinner and Prizes included</div>\r\n</li><li>\r\n<div>Previous golf experience not necessary</div>\r\n</li><li>\r\n<div>Prize sponsorship welcome!</div></li></ul>\r\n<p>Contact 954-4390 if you have any questions on this event.</p>\r\n\r\n<span style=\"text-decoration: underline;\">Disclaimer:</span><br><span style=\"font-size: 8pt;\">The PMI Manitoba Chapter Inc is not responsible\r\n for personal property that becomes lost, stolen or damaged during an \r\nevent. PMI Manitoba Chapter Inc encourages all individuals to<br>maintain\r\n the security of their personal property at all times.<br>PMI Manitoba \r\nChapter Inc is not responsible or liable for any injuries incurred \r\nduring any social events hosted by PMI Manitoba Chapter Inc.<br>A \r\nphotographer may be on site to document events and activities including \r\ndelegates. Photographs are the sole<br>property of the PMI Manitoba \r\nChapter Inc. By registering for or attending these events, attendees \r\nunderstand and agree that all photographs may be used for promotional \r\npurposes.</span> <br> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4596 <br />End Date: 06/30/2010 22:00 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.87387140,-97.10681510&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.87387140,-97.10681510&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"EA Certification & Workshops",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4900&eventRosterId=17",
          "details":"<br />Title: EA Certification & Workshops <br />Categories: <br />Start Date: 06/21/2010 11:01<br />Address:  <br /> 7054 Haycock Road<br>UVA Northern Virginia Center <br>Falls Church, Virginia  22043<br> United States <br />Description: <h1><span style=\"font-weight: bold;\">EA Certification &amp; Workshops</span>\r\n › <span class=\"head2\">Registration</span></h1>\r\n      <!-- InstanceEndEditable -->\r\n      <!-- InstanceBeginEditable name=\"Content\" --> \r\n      \r\n        \r\n          <table class=\"subnav-pad\" width=\"\" border=\"0\" cellpadding=\"7\" cellspacing=\"0\"><tbody><tr> \r\n            <td colspan=\"5\" valign=\"top\" align=\"left\" nowrap=\"nowrap\"><h1>2009-10\r\n EA Short Courses</h1></td>\r\n            <td valign=\"top\" width=\"122\" align=\"right\" nowrap=\"nowrap\"><a href=\"http://feacinstitute.org/ea-certification/calendar-2010.php\"><img src=\"http://feacinstitute.org/images/button_calendar_over.gif\" alt=\"View Calendar\" name=\"cal21\" id=\"cal21\" onmouseover=\"MM_swapImage('cal21','','../images/button_calendar_over.gif',1)\" onmouseout=\"MM_swapImgRestore()\" width=\"122\" align=\"absmiddle\" height=\"36\"></a></td>\r\n          </tr>\r\n          <tr>\r\n          \t<td colspan=\"6\" valign=\"top\" align=\"left\" nowrap=\"nowrap\">Please\r\n select the date you would like to attend below.</td>\r\n          </tr>\r\n            <tr> \r\n            \t<td colspan=\"6\" valign=\"top\" align=\"left\" nowrap=\"nowrap\"><h1 class=\"program-header\">Regular Open Short Courses are overlaid with \r\nSession 1 of the Certification Program</h1>\r\n           \t    <p class=\"program-header\">&nbsp;</p></td>\r\n            </tr>\r\n            <tr>\r\n              <td valign=\"top\" width=\"174\" align=\"left\" nowrap=\"nowrap\">\r\n                    <div class=\"style15\" style=\"font-weight: bold; color: rgb(51, 51, 51); padding-bottom: 6px;\">Regular Commercial/FEA(F) \r\nShort Courses<br>\r\n                      <br> \r\n                      <a href=\"http://feacinstitute.org/ea-certification/reg-FEAF-F10.php\"><span style=\"font-weight: bold;\">&gt;5\r\n Day EA Bootcamp - Fall 2010 (Aug 30-Sep 4)<br>\r\n                  &gt;3 Day EA Seminar - Fall 2010 (Aug 30-Sep 2)</span></a><br>\r\n                  </div>\r\n                    <p><span style=\"font-weight: bold;\"><span class=\"style13\">Regular DoDAF Short\r\n Courses</span><br>\r\n                      <br>\r\n                      <a href=\"http://feacinstitute.org/ea-certification/reg-DODAF-F10.php\">5 Day\r\n EA Bootcamp - Fall 2010 (Sep 13-17)<br>\r\n              3 Day EA Bootcamp - Fall 2010 (Sep 13-15</a>)</span><br>\r\n              ____________________________________________\r\n              <br>\r\n                </p>\r\n              <p><span class=\"style15\" style=\"font-weight: bold; color: rgb(51, 51, 51); padding-bottom: 6px;\">5 Day Bootcamp – <a href=\"http://www.feacinstitute.org/ea-certification/#day\">&gt;View \r\nTopics</a><br>\r\n3 Day Seminar – <a href=\"http://www.feacinstitute.org/ea-certification/#day\">&gt;View \r\nTopics</a></span></p></td>\r\n                <td width=\"8\"> <br></td>\r\n              <td valign=\"top\" align=\"left\" nowrap=\"nowrap\"><div class=\"bold\" style=\"color: rgb(51, 51, 51); padding-bottom: 6px;\">\r\n                <p><span class=\"style33\">SPECIAL SHORT COURSES</span><span class=\"style25\"><br>\r\n                  </span><br>\r\n                  <span class=\"style27\"><span class=\"style16\"><span class=\"style17\"><span class=\"style18\"><span class=\"style20\"><span class=\"style22\"><span class=\"style23\">2 Day DoDAF 2.0 UPDATE WORKSHOPS</span></span></span></span></span></span></span><span class=\"style24\"><a href=\"https://www.regonline.com/dodaf_20_update_workshop_july_26_27_2010\">\r\n <br>\r\n                  </a><a href=\"https://www.regonline.com/dodaf_20_update_workshop_july_2010_copy\">&gt;JUNE\r\n 21-22</a><a href=\"https://www.regonline.com/dodaf_20_update_workshop_july_26_27_2010\"><br>\r\n                    &gt;JULY 26-27</a></span><span class=\"style26\"><a href=\"https://www.regonline.com/dodaf_20_update_workshop_july_26_27_2010\"><br>\r\n                    </a></span></p>\r\n                <h2><a href=\"https://www.regonline.com/feac_and_soa_workshop_july_26_2010\" class=\"style32\">&gt;FEA &amp; SOA, the What, How and Why</a><span class=\"style15\"><a href=\"https://www.regonline.com/feac_and_soa_workshop_july_26_2010\"><br>\r\n                  </a><span class=\"style26\"><a href=\"https://www.regonline.com/dodaf_20_update_workshop_july_26_27_2010\"><br>\r\n                  </a></span><span class=\"style28\"><a href=\"http://www.regonline.com/CalendarNET/EventCalendar.aspx?EventID=739631&amp;view=Month\">&gt;TOGAF\r\n 9 Courses Schedule</a></span><br>\r\n                </span></h2>\r\n              </div></td>\r\n                <td width=\"8\"><br></td>\r\n                <td width=\"8\"><br></td>  \r\n                <td><br></td>             \r\n\t\t\t</tr>\r\n             <tr><td colspan=\"6\" valign=\"top\" nowrap=\"nowrap\"><h1 class=\"program-header\">Interested in certification? <a href=\"http://feacinstitute.org/ea-certification/registration.php\">Click \r\nhere for CEA program registration</a>.</h1></td></tr>\r\n             <tr><td colspan=\"6\" valign=\"top\" nowrap=\"nowrap\"><h1>Need \r\nto submit a partial payment? <a href=\"http://feacinstitute.org/ea-certification/reg-PartialPay.php\">Click\r\n here to pay special amounts</a>.</h1></td></tr></tbody></table> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4900 <br />End Date: 06/22/2010 11:01 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=38.89894740,-77.20027450&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|38.89894740,-77.20027450&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       },
       {
          "title":"Hemp Building Seminar - FREE",
          "link":"https://live1.in1touch.org/client/event/roster/eventRosterDetails.html?productId=4864&eventRosterId=17",
          "details":"<br />Title: Hemp Building Seminar - FREE <br />Categories: <br />Start Date: 05/29/2010 10:14<br />Address:  <br /> University of Manitoba<br>66 Dafoe Rd Rm 130 <br>Winnipeg, Manitoba  R3T 2N2<br> Canada <br />Description: <h2>Hemp Building Seminar - FREE</h2>\r\n\t\t<p style=\"margin-top: -0.8em;\"><span style=\"font-style: italic;\">April 30-30, 2010 :: University of \r\nManitoba, Winnipeg, Canada 66 Dafoe Rd Rm 130 </span></p>\r\n\t\t<p>The Department of Plant Science- University of Manitoba Winnipeg, \r\nCanada and the Canadian Hemp Trade Alliance are proud to offer this free\r\n open to the public seminar on Building with Hemp!!</p><p>Renowned \r\nHempcrete Builder’s Greg Flavall and David Madera<br>will be providing \r\nan in-depth presentation on Hempcrete building and opportunities in \r\nbuilding with hemp in Canada and the USA. </p><p>Date: April 30th, 2010<br>Time:\r\n 10am-12pm Presentation 1hr with live hempcrete demo and Q&amp;A<br>Place:\r\n University of Manitoba, Plant Science Dept. 66 Dafoe Rd.<br>Room: Rm # \r\n130  Carolyn Sifton Lecture Theatre <br>Contact: Anndrea Hermann, M.Sc.,\r\n  P.Ag anndrea@hemptrade.ca  <br></p>\r\n\t\t\r\n\t\t\r\n\t\t<h4><span style=\"font-style: italic;\">Related Documents:</span></h4>\r\n\t\t\r\n\t\t<ul><li><a href=\"http://www.hemptrade.ca/docs/Greg_Flavall__David_Madera_Hemp_Technologies_Bio_2010.pdf\" target=\"_blank\">Greg Flavall and David Madera Bio's </a> &nbsp;<img src=\"http://www.hemptrade.ca/images/pdf.gif\" style=\"vertical-align: middle;\" height=\"16\" width=\"16\"></li><li><a href=\"http://www.hemptrade.ca/docs/Hemp_Technologies_LLC.pdf\" target=\"_blank\">Hemp Building Seminar April 30th 2010 </a> &nbsp;<img src=\"http://www.hemptrade.ca/images/pdf.gif\" style=\"vertical-align: middle;\" height=\"16\" width=\"16\"></li></ul> <br />URL: https://live1.in1touch.org/viewEvent.html?productId=4864 <br />End Date: 05/29/2010 10:14 <br />MAP: <img src=\"https://maps.google.com/maps/api/staticmap?center=49.80995380,-97.13452170&zoom=15&size=400x300&maptype=roadmap&markers=color:red|label:|49.80995380,-97.13452170&sensor=false&key=AIzaSyDzfes3CjnLiA-TVpM4K60cR4g6TQ-U7pE\" style=\"border:1px solid black;\" width=\"400\" height=\"300\"> <br /><br /><hr />"
       }

          // Add more events as needed
        ]
      };

      const lowerCaseEventTitle = eventTitle.toLowerCase();

      const results = jsonData.events.filter(event =>
        event.title.toLowerCase().includes(lowerCaseEventTitle)
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
  
        <div style={styles.checkboxContainer}>
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
            <input
              type="checkbox"
              checked={isFinished}
              onChange={() => setIsFinished(!isFinished)}
            />
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
          <h2>Search Results:</h2>
          {searchResults.map((result, index) => (
            <div key={index} style={styles.searchResult}>
              <p style={styles.resultTitle}>Title: {result.title}</p>
              <p style={styles.resultLink}>
                Link: <a href={result.link} target="_blank" rel="noopener noreferrer">{result.link}</a>
              </p>
              <div style={styles.resultDetails} dangerouslySetInnerHTML={{ __html: result.details }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
  
export default Search;
