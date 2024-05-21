import React, { useEffect } from "react";
import M from "materialize-css";

const Projects = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  }, []);

  const openModal = (modalId) => {
    const elem = document.getElementById(modalId);
    const instance = M.Modal.getInstance(elem);
    instance.open();
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="projects-page page-content">
      <ul class="section table-of-contents">
        <li>
          <a href="#featured" onClick={(e) => handleScroll(e, "featured")}>
            Featured
          </a>
        </li>
        <li>
          <a href="#prog" onClick={(e) => handleScroll(e, "prog")}>
            Programming
          </a>
        </li>
        <li>
          <a href="#webdev" onClick={(e) => handleScroll(e, "webdev")}>
            Web Dev
          </a>
        </li>
        <li>
          <a href="#appdev" onClick={(e) => handleScroll(e, "appdev")}>
            App Dev
          </a>
        </li>
      </ul>

      <div class="container">
        <div class="section" id="featured">
          <h2>Featured</h2>
          <div class="ex_card" onClick={() => openModal("jpl_modal")}>
            <a href="#jpl_modal">
              <img src="images/jplm2020.png" alt="jplm2020" />
              <p>
                <span class="title">JPL Mars Rover Simulation</span>
                <br />
                <span class="lang">React.js, HTML, CSS</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("currents_modal")}>
            <a href="#currents_modal">
              <img src="images/currents_icon.png" alt="currents" />
              <p>
                <span class="title">Currents</span>
                <br />
                <span class="lang">Node.js, Python, Swift</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("beamsync_modal")}>
            <a href="#beamsync_modal">
              <img src="images/beamsync_icon.jpg" alt="beamsync" />
              <p>
                <span class="title">Beam Sync</span>
                <br />
                <span class="lang">Python (ros)</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("onshape_modal")}>
            <a href="#onshape_modal">
              <img src="images/onshape_icon.png" alt="onshape" />
              <p>
                <span class="title">OnShape</span>
                <br />
                <span class="lang">C++</span>
              </p>
            </a>
          </div>
        </div>

        <div class="divider"></div>

        <div class="section" id="prog">
          <h2>Programming</h2>
          <div class="ex_card" onClick={() => openModal("dbms_modal")}>
            <a href="#dbms_modal">
              <img src="images/dbms_icon.png" alt="dbms" />
              <p>
                <span class="title">Database Management System</span>
                <br />
                <span class="lang">OCaml</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("a8_modal")}>
            <a href="#a8_modal">
              <img src="images/a8_icon.png" alt="shortest path icon" />
              <p>
                <span class="title">Shortest Path Optimization</span>
                <br />
                <span class="lang">Java</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("tetris_modal")}>
            <a href="#tetris_modal">
              <img src="images/tetris_icon.png" alt="tetris" />
              <p>
                <span class="title">Tetris</span>
                <br />
                <span class="lang">Python</span>
              </p>
            </a>
          </div>
        </div>

        <div class="divider"></div>

        <div class="section" id="webdev">
          <h2>Web Development</h2>
          <div class="ex_card" onClick={() => openModal("gsk_modal")}>
            <a href="#gsk_modal">
              <img src="images/gsk_icon.png" alt="gsk" />
              <p>
                <span class="title">GSK Tech Hub</span>
                <br />
                <span class="lang">HTML, CSS, Javascript</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("cusdhub_modal")}>
            <a href="#cusdhub_modal">
              <img src="images/cusd_icon.png" alt="cusd" />
              <p>
                <span class="title">CUSD Member Database</span>
                <br />
                <span class="lang">HTML, CSS, Javascript</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("shimtah_modal")}>
            <a href="#shimtah_modal">
              <img src="images/shimtah_icon.png" alt="shimtah" />
              <p>
                <span class="title">Shimtah Website Design</span>
                <br />
                <span class="lang">HTML, CSS, PHP, SQLite</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("scavenger_modal")}>
            <a href="#scavenger_modal">
              <img src="images/scavenger_icon.png" alt="scavenger" />
              <p>
                <span class="title">Scavenger</span>
                <br />
                <span class="lang">Vue.js, HTML, CSS</span>
              </p>
            </a>
          </div>
        </div>

        <div class="divider"></div>

        <div class="section" id="appdev">
          <h2>App Development</h2>
          <div class="ex_card" onClick={() => openModal("resource_modal")}>
            <a href="#resource_modal">
              <img src="images/resource_icon.jpg" alt="resource" />
              <p>
                <span class="title">re(source)</span>
                <br />
                <span class="lang">Swift</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("tranzent_modal")}>
            <a href="#tranzent_modal">
              <img src="images/tranzent_icon.png" alt="tranzent" />
              <p>
                <span class="title">tran.z.ent</span>
                <br />
                <span class="lang">Java</span>
              </p>
            </a>
          </div>

          <div class="ex_card" onClick={() => openModal("mykitchen_modal")}>
            <a href="#mykitchen_modal">
              <img src="images/mykitchen_icon.png" alt="mykitchen" />
              <p>
                <span class="title">my kitchen</span>
                <br />
                <span class="lang">Swift, Python</span>
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <div id="jpl_modal" class="modal">
        <div class="modal-content">
          <h4>Mars 2020 Flight Software Simulation</h4>
          <p>
            In order to safely drive the Mars rovers, a team of engineers at JPL
            created a suite of simulation tools so that rover planners can write
            and execute sequences for the rover while visualizing the
            environment on Mars. My project during my internship was to create a
            web frontend for the Mars 2020 flight software (in React). The
            application takes in a file of rover commands (available in
            different formats such as the Rover Markup Language and Rover
            Sequencing Language), a start time, the previous day's terrain, and
            several other parameters. The application then sends a call to the
            API for the flight software, which simulates the expected behavior
            of the rover and returns it in the Rover Kinematic State Markup
            Language (RKSML). This RKSML file is passed into a 3D visualization
            tool, written in three.js, which is displayed as an interactive
            video on the frontend. Alongside the 3D visualization is a live
            command editor with command validation, a table for viewing
            thousands of event records, and a chart that displays the sequence
            durations of each command and sequence from the original input file.
            It has numerous components for the user to interact with and meets
            the needs of different target audiences including each of the
            instrument teams and eventually, the rover planners as well.
          </p>
          <p>
            When I first arrived at JPL over the summer, all I knew about this
            project was that I needed to piece together an existing Event Record
            Viewer (EVR) and a 3D visualization tool (created internally at JPL)
            to visualize rover commands. The project seemed vague and did not
            have much of a direction, and my mentors were unable to offer much
            help, since they were inexperienced in frontend development. Drawing
            from my user-centered design classes in college, I felt like what
            was most important for the development of this application was to
            understand the user's needs and present the application in a way
            that would be intuitive for the user. In a development-driven
            environment and during such a short internship, going through the
            design process felt like a challenge. However, through a couple of
            user interviews and eventually meeting with members of the rover
            instrument teams, I was able to piece together the application in a
            way that made the most sense to the user. I was also able to conduct
            a few rounds of user testing and consequently realized several
            usability issues that were immediately fixed. The design process
            helped me create an application that, while functionally similar to
            what would have been created by another developer, improved the
            user's experience and considered the needs of the different target
            audiences.
          </p>
          <p>
            On the other hand, I also faced several technical challenges during
            the development of the project. The first issue I faced was the
            integration of the existing EVR. It had been created years prior and
            was computationally expensive when the EVR needed to only display
            and filter through a table of records. The previous EVR was
            disregarded and instead, I learned to develop with the thousands of
            existing node packages such as react-data-table, react-redux, and
            react-ace. Several challenges throughout the summer also presented
            themselves when I was given internal tools to integrate into this
            frontend application. The existing 3D visualizer was created as a
            standalone app and through weeks of debugging the three.js code, the
            original developer and I were able to package the visualizer to run
            in my application. In addition, I wanted to make use of the existing
            command validation tools in the command text editor but faced
            several issues when it came to interfacing the older command
            validation with the newer flight software. Solving these integration
            issues exposed me to many of the different challenges that JPL
            engineers were involved in and enforced the need for collaboration
            between teams. Finally, working on this project gave me the
            experience in creating and packaging an app for deployment in a work
            environment. I learned to test my code with Jest, package it with
            webpack, and deploy it after creating a Docker image.
          </p>
          <p>
            <span class="bold">Languages used:</span> React.js, HTML, CSS
          </p>
        </div>
      </div>

      <div id="currents_modal" class="modal">
        <div class="modal-content">
          <img alt="img" src="images/currents_app.png" />
          <h4>Currents</h4>
          <p>
            In this project, we find a solution to the question: How can we
            optimize energy usage in single occupancy rooms depending on the
            thermodynamics of each room and the user's location? i.e. how likely
            is it that the room will be in use at specific times of day? This
            project is a collaboration between engineers, who provide the
            research behind the energy optimization problem, and computer
            scientists, to write the algorithm that controls the HVAC settings
            and to deliver a mobile app as the user interface.
          </p>
          <p id="currents_cs">The CS team is split into three components:</p>
          <ul>
            <li>
              The mobile app, which allows users to check & edit the state of
              their HVAC systems and their energy usage;
            </li>
            <li>
              The prediction algorithm, which predicts when the HVAC systems
              should be on or off based on the user's calendar events, location
              data, user-inputted events, and past prediction patterns; and
            </li>
            <li>
              The server, which runs many backend processes such as the
              algorithm, writing to the databases, user authentication, etc.
            </li>
          </ul>
          <p>
            As the lead of the CS team, my responsibilities include training
            team members on their respective parts of the project, managing the
            progress of the team, and interfacing our technologies will with the
            thermal engineering team and the building's HVAC systems. As a
            result, I've learned and taught the various skills required by the
            team, including servers and APIs, databases, algorithms, and mobile
            development. This project has also expanded my knowledge in managing
            a larger project that is both dependent on creativity and
            innovation, as well as user-centered design.
          </p>
          <p>
            When I first joined the team, there had been a lot of prior research
            on the problem we were trying to solve, but soon after, the
            upperclassmen on the team graduated and left poorly documented code,
            along with only a few notes explaining their work. When I was chosen
            to be the next team lead for the Computer Science subteam, I felt
            lost and did not understand much of the work that had been left to
            me. I spent my first semester as lead working through the core
            issues with my team and restructuring the CS team. We thought about
            the scale of our project and how we would eventually scale up,
            beyond single occupancy rooms; we mapped out each part of the
            project and listed the types of data we needed, then recreated our
            databases accordingly; and we rewrote the existing code for the
            prediction algorithm so that it could predict the current day's
            heating schedule and rerun each time the user modified their own
            schedule through the mobile app. The structural changes I envisioned
            gave our team a better understanding of our code base and allowed us
            to properly document the code for the future. I've served as the
            team lead for a year and a half now, and most recently, we set up
            our API endpoint to handle the GET and POST requests needed by the
            mobile app; we deployed our mobile app (written in React Native); we
            have a working algorithm that predicts the user's schedule for the
            day; and we've begun researching how to improve our prediction
            algorithm based on the user's patterns. Although I'm graduating
            soon, I've been a part of the project's development for a while and
            have watched it evolve as we learn more about thermal modeling,
            interfacing with different types of HVAC systems, and ways we could
            potentially market our app. Being on this project has taught me a
            lot about systems engineering, imagination, and collaboration in
            unique ways when dedicating myself to an ambitious, long-term
            project.
          </p>
          <p>
            <span class="bold">Languages used:</span> Node.js, PostgreSQL,
            Python, React Native
          </p>
        </div>
      </div>

      <div id="beamsync_modal" class="modal">
        <div class="modal-content">
          <h4>Beam Sync</h4>
          <p>
            Beam Sync is an idea that tackles the challenge of remote teaching
            and collaboration. Mentored by Dr. François Guimbretière in his
            research lab in the Information Science department at Cornell, I
            took on the task of taking live data from an XBox Kinect sensor and
            mirroring it with the position of a Beam robot. The Beam robot is a
            telepresence robot that users can control remotely through a
            smartphone app. The issue we noticed, however, was that users would
            dedicate a lot of their energy to just driving the robot, detracting
            them from their goal of immersing themselves in their remote
            teaching or collaboration. The first step was to track the user's
            movements and rotation through multiple Kinect sensors. Then, these
            coordinates are recalculated to determine the new x-y positions of
            the Beam robot and its yaw. By developing on the existing Beam
            robot, the recalculated values can be used to control its wheels
            rather accurately.
          </p>
          <p>
            This was the first time I had worked extensively with a Linux system
            and ros, making this a completely novel and challenging research
            experience. During my first month on the project, I focused a lot of
            my efforts on modifying and compiling existing C++ code to work with
            our updated Beam Plus model. The next challenge was to develop on an
            existing technology that was intended for different uses by its
            users. It was difficult navigating the hardware of the Beam robot in
            addition to working with the cameras and sensors we had installed on
            the robot. Finally, when I was able to work on the updated software
            for the robot, I needed to take my expertise in programming with
            Python and furthermore, apply it to the new packages that were
            relevant to this project under the extensive work that had been
            previously done with ros. Through the multiple confusions and
            setbacks I faced during this process, I learned to extend my
            previous programming knowledge to a larger scale involving the
            operating system and hardware limitations. I now feel much more
            confident in tackling projects involving system design and look
            forward to continuing my research. In the coming months, I'll be
            working on implementing obstacle avoidance in the hardware and
            software of the Beam robot to allow for a smoother and more reliable
            experience when using this technology.
          </p>
          <p>
            <span class="bold">Languages used:</span> Python (ros)
          </p>
        </div>
      </div>

      <div id="onshape_modal" class="modal">
        <div class="modal-content">
          <h4>OnShape: Remote 3D Object Interaction</h4>
          <p>
            OnShape was an idea inspired by several of the projects from the MIT
            Tangible Media Group such as Recompose and inForm. Our goal was to
            create an intuitive interface that allows the user to make gestures
            to manipulate their physical environment. More specifically, the
            user controls the display through hand gestures under an XBox Kinect
            sensor. The image of the Kinect is read in real-time and translated
            into x-y and depth values, which are then sent to the Arduino and
            translated into a form that indicates which motors should run, which
            direction they should rotate in, and the number of steps they should
            run for. The motors allow the user to observe the linear motion of
            the objects on the actuated surface. Read more about the project and
            its implementation in my group's{" "}
            <a target="_blank" href="./uploads/onshape_report.pdf">
              final report
            </a>
            .
          </p>
          <img
            class="modal_image_small"
            alt="OnShape demo"
            src="images/onshape.jpg"
          />
          <p>
            <span class="bold">Languages used:</span> C++
            <br />
            <span class="bold">Code:</span>{" "}
            <a
              target="_blank"
              href="https://github.com/vml39/info4320-onshape"
              rel="noreferrer"
            >
              https://github.com/vml39/info4320-onshape
            </a>
            <br />
            <span class="bold">Tools used:</span> Arduino Mega, Fusion 360,
            Laser cutter, 3D printer
          </p>
        </div>
      </div>

      <div id="dbms_modal" class="modal">
        <div class="modal-content">
          <h4>Database Management System</h4>
          <p>
            For the final project for my Functional Programming and Data
            Structures course, my group wanted to create something practical and
            settled on creating our own database management system, based on
            MySQL. Several challenges we faced in the implementation of our own
            DBMS were considering how to store the data and the table schemas
            efficiently; how to read in our data so that we wouldn't have to
            maximize space and time efficiency; how to modularize our code to
            separate each of the functions; and finally, how we wanted the user
            to interact with our system. We decided to store the data in text
            files, where each database has its own schema file in an input
            folder and its own folder with each of the tables and their data.
            This allowed us to keep our entire system under a certain size
            instead of needing to store each table as an OCaml data structure.
            In the text files, rows are separated by new lines, which made
            reading and writing to the data easier. On the computational end of
            the DBMS, each line in the file channel is read, then filtered
            through a bunch of functions depending on the optional parameters in
            the queries such as WHERE, ORDER BY, and JOIN. The resulting table
            is either printed to the Command Line or to a text file depending on
            the size of the table.
          </p>
          <p>
            Based on the constraints of the project, the final queries we were
            able to implement include: SELECT, INSERT INTO, DELETE FROM, CREATE
            TABLE, and DROP TABLE, with additional parameters including WHERE
            and all of its conditionals (such as LIKE, =, !=), ORDER BY, INNER
            JOIN, LEFT JOIN, and RIGHT JOIN. As the only member in my group who
            had prior experience in working with databases, I ended up
            implementing most of the queries for our DBMS.
          </p>
          <p>
            <span class="bold">Languages used:</span> OCaml <br />
            <span class="bold">Code:</span>
            <a
              target="_blank"
              href="https://github.com/vml39/cs3110-dbms"
              rel="noreferrer"
            >
              https://github.com/vml39/cs3110-dbms
            </a>
          </p>
        </div>
      </div>

      <div id="a8_modal" class="modal">
        <div class="modal-content">
          <h4>Shortest Path Optimization</h4>
          <p>
            The setting: a spaceship traveling from Earth to Planet X in the
            shortest path possible, then returning to Earth while collecting the
            most gems on the way and staying within the allotted fuel. From
            first glance, it wasn't difficult to complete the project at all; I
            already knew how to write Dijkstra's shortest path algorithm. Next,
            came the million-dollar question: how would I optimize the shortest
            path algorithm, i.e. how would I collect the most gems and still
            make it back to Earth? After multiple ideas and different sets of
            code, the final version I settled on was to visit the neighboring
            planet with the most gems, making this a greedy algorithm, while
            calculating at each planet if I would have enough fuel to make it
            back to Earth.
          </p>
          <p>
            <span class="bold">Languages used:</span> Java
          </p>
        </div>
      </div>

      <div id="tetris_modal" class="modal">
        <div class="modal-content">
          <h4>Tetris</h4>
          <p>
            Tetris is my favorite game and I had a blast coding my own version
            as well. Not only did I get to work with the graphics in Python but
            I also had to determine each stage of coding the game, focusing on
            details such as creating each individual block, timing the falling
            of the blocks, updating the scores & speed, and a lot more. It was
            an elaborate project but was so rewarding to complete and to be able
            to play!
          </p>
          <p>
            <span class="bold">Languages used:</span> Python
            <br />
            <span class="bold">Code:</span>
            <a
              target="_blank"
              href="https://github.com/vml39/tetris"
              rel="noreferrer"
            >
              https://github.com/vml39/tetris
            </a>
          </p>
        </div>
      </div>

      <div id="scavenger_modal" class="modal">
        <div class="modal-content">
          <img class="modal_image_small" alt="img" src="images/scavenger.png" />
          <h4>Scavenger</h4>
          <p>
            Scavenger is an app designed for the Ithaca Farmer's Market to solve
            the unique need of improving patron-vendor relations and encouraging
            patrons to explore new vendors at the market. It gamifies the
            farmers market experience and rewards users with levels and badges
            as they complete tasks, such as scanning the QR code of a new vendor
            at the market, referring a vendor to a friend, or sharing their
            experience at the market on social media. The app also provides the
            contact information of each vendor and allows the user to search
            through the vendor directory and favorite certain vendors. Scavenger
            was an app created after going through the design process, from user
            interviews to affinity diagramming, creating personas and scenarios,
            sketches and wireframes, user testing, and several design
            iterations.
          </p>
          <p>
            <span class="bold">Languages used:</span> Vue.js, HTML, CSS
            <br />
            <span class="bold">Design Process:</span>{" "}
            <a
              target="_blank"
              href="https://github.com/vml39/scavenger/blob/master/TableofContents.md"
              rel="noreferrer"
            >
              https://github.com/vml39/scavenger/blob/master/TableofContents.md
            </a>
            <br />
            <span class="bold">Code:</span>{" "}
            <a
              target="_blank"
              href="https://github.com/vml39/scavenger"
              rel="noreferrer"
            >
              https://github.com/vml39/scavenger
            </a>
            <br />
            <span class="bold">
              Deployed app (intended for a mobile device):
            </span>{" "}
            <a
              target="_blank"
              href="https://ithaca-farmers-market.herokuapp.com/"
              rel="noreferrer"
            >
              https://ithaca-farmers-market.herokuapp.com/
            </a>
          </p>
        </div>
      </div>

      <div id="gsk_modal" class="modal">
        <div class="modal-content">
          <h4>GSK Tech Hub</h4>
          <p>
            A central technology hub for GSK's 100,000 employees to keep track
            of their work calendar events, tasks, messages, etc. in one
            location. Built as a Chrome extension, a web app, and a mobile app.
          </p>
          <p>
            <span class="bold">Languages used:</span> HTML, CSS, Javascript
            <br />
            <span class="bold">Design process: </span>
            <a target="_blank" href="uploads/gsk_demo.pdf">
              Presentation
            </a>
            <br />
            <span class="bold">Code:</span>{" "}
            <a
              target="_blank"
              href="https://github.com/vml39/GSK-Tech-Hub"
              rel="noreferrer"
            >
              https://github.com/vml39/GSK-Tech-Hub
            </a>
          </p>
          <video controls>
            <source src="uploads/gsk_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="shimtah_modal" class="modal">
        <div class="modal-content">
          <img alt="img" src="images/shimtah.png" />
          <h4>Shimtah Website Design</h4>
          <p>
            <span class="bold">My role:</span> Project Manager, Web Developer,
            Data Scientist
            <br />
            In a team of four, we took on the complete design and implementation
            of the website for Shimtah, a performing group on campus. Their
            website was a bit more complex and required us to use PHP sessions
            to securely implement a member login as well as SQlite to keep
            inventory of the club's instruments. I took on the implementation of
            the backend portion including all code in PHP and DB queries. I also
            managed team meetings and delegated tasks according to each member's
            strengths. As a team, we agreed upon the design of the website and
            performed multiple rounds of user research.
          </p>
          <p>
            <span class="bold">Languages used:</span> HTML, CSS, PHP, MySQL
            <br />
            <span class="bold">Code:</span>
            <a
              target="_blank"
              href="https://github.com/vml39/Shimtah-Website-Design"
              rel="noreferrer"
            >
              https://github.com/vml39/Shimtah-Website-Design
            </a>
          </p>
        </div>
      </div>

      <div id="cusdhub_modal" class="modal">
        <div class="modal-content">
          <img alt="img" src="images/cusdhub.png" />
          <h4>CUSD Alumni and Active Member Database</h4>
          <p>
            <span class="bold">My role:</span> Backend Developer
            <br />
            On the Technical Operations team of Cornell University Sustainable
            Design (CUSD), we took on the creation of an alumni and active
            member database in only one semester. This task started straight
            from the drawing board: a completely blank piece of paper, an empty
            frame in Sketch, and an empty file of code. However, through
            brainstorming, scribbling rough sketches, creating wireframes, user
            testing and revisiting the drawing board, writing pseudocode, and
            finally implementing the pseudocode, we were able to create a final
            product with many well-thought out features. My role on the team was
            primarily in the backend development of the website, in features
            such as file storage and retrieval. I also did a few rounds of user
            testing and some frontend development as well in the earlier stages
            of the development. We faced several problems throughout the
            implementation of the database, such as deciding on how to sort the
            members and having conflicts merging our code without overriding
            each other, but were ultimately able to complete a beta version in
            only a few months.{" "}
          </p>
          <p>
            <span class="bold">Languages used:</span> HTML, CSS, JavaScript,
            Node.js
          </p>
        </div>
      </div>

      <div id="resource_modal" class="modal">
        <div class="modal-content">
          <img class="modal_image_small" alt="img" src="images/resource.png" />
          <h4>re(source)</h4>
          <p>
            <span class="bold">My role:</span> iOS Developer
            <br />
            re(source) is an app created by me and my friends in response to the
            prompt, "develop an application or tool that assists its users in
            the event of a crisis", at Technica, an all women's hackathon at
            UMD. We chose this prompt because we wanted to make a large social
            impact, and despite the dozens of crisis-related apps out there,
            there were none of this function. The purpose of the app is to
            connect community members in times crisis by allowing members to ask
            one another for spare resources or track user-reported supply
            inventories at local markets. It was my first time participating in
            a hackathon and it was a really exciting experience to be able to
            develop a project from just a prompt to a final product.
          </p>
          <p>
            <span class="bold">Languages used:</span> Swift
          </p>
        </div>
      </div>

      <div id="tranzent_modal" class="modal">
        <div class="modal-content">
          <img class="modal_image_small" alt="img" src="images/tranzent.png" />
          <h4>tran.z.ent</h4>
          <p>
            <span class="bold">My role:</span> Android Developer
            <br />
            tran.z.ent is an app addressing the difficulty doctors have in
            diagnosing their patients regarding sleep disorder, created at the
            Health Hackathon at Cornell. The app is composed of two main
            components: first, an algorithm that compares patient breathing
            patterns with those of patients with common sleep disorders such as
            asthma and sleep apnea; and second, an Android application that
            allows patients to track their sleep and subsequently alerts health
            care providers of possible sleep disorders. My team had a difficult
            start in the process because we realized that essentially all phone
            apps that track sleep are laregly inaccurate, and there was no
            definite way to estimate a person's sleep based solely on micriphone
            recordings or slight movements. The beginning of the night began
            with all hands on deck on conducting research in sleep patterns and
            detection. After we determined that the best solution was to track
            the patient's heart rate, I began the design and implementation of
            the app using Java in Android Studio and was able to complete a
            rough prototype.
          </p>
          <p>
            <span class="bold">Languages used:</span> Java
            <br />
            <span class="bold">Code:</span>{" "}
            <a
              target="_blank"
              href="https://github.com/oliver-leung/hh-sleepapp"
              rel="noreferrer"
            >
              https://github.com/oliver-leung/hh-sleepapp
            </a>
          </p>
        </div>
      </div>

      <div id="mykitchen_modal" class="modal">
        <div class="modal-content">
          <h4>my kitchen</h4>
          <p>
            As a college student, I wanted a way to organize the items I had in
            my pantry, to create grocery lists, and to cook simple recipes with
            the ingredients I had without having to spend so much time worrying
            about my meals and my weekly shopping trips. So I decided to create
            an app just so I could do that. I've been able to work through the
            entire design process, from sketching, to prototyping, and finally,
            developing. I've also taken on both roles of frontend and backend
            developer through the design of my app and the creation of a backend
            API. I'm excited to soon have a completed app that will make my life
            easier and may benefit the lives of many other busy college
            students.
          </p>
          <p>
            <span class="bold">Languages used:</span> Swift, Python
            <br />
            <span class="bold">Code:</span>{" "}
            <a
              target="_blank"
              href="https://github.com/vml39/my-kitchen"
              rel="noreferrer"
            >
              https://github.com/vml39/my-kitchen
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
