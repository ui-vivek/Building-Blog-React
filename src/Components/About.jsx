import Header from "./NavBar/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>FirePost</h1>
        <p>
          The project is a web application that allows users to create and view
          posts. Posts are stored in Firebase's Realtime Database, allowing for
          real-time updates. The application uses React Router v6 for
          client-side routing and Bootstrap for responsive UI design. The
          useState and useEffect hooks are used for state management and event
          handling, while the useParams hook is used to extract parameters from
          the URL. The preventDefault method is used to handle form submissions.
          The live version of the project is available at
        </p>
        <p>
          Live URL:{" "}
          <a href="https://firepost.netlify.app/">
            https://firepost.netlify.app/
          </a>
        </p>
        <h5>Why FirePost</h5>
        <p>
          Choosing the name FirePost for my website could imply a sense of speed
          and efficiency, as well as the ability to quickly and easily share
          information or content. The name "fire" could also be associated with
          passion, excitement, and intensity, which could be appealing if my
          website is geared towards a specific niche or audience.
          <br />
          Additionally, the word "post" could suggest a platform or forum for
          sharing ideas or content, which aligns with the purpose of many
          websites. Overall, FirePost has the potential to be a memorable and
          impactful name for my website, and could help you establish a strong
          brand identity.
        </p>
        <hr />
        <h2>Installation</h2>
        <ol>
          <li>
            Clone the repository to your local machine. ({" "}
            <code>https://github.com/ui-vivek/Building-Blog-React.git</code> ){" "}
          </li>
          <li>Navigate to the project directory.</li>
          <li>
            Run <code>npm install</code> to install the dependencies.
          </li>
          <li>
            Run <code>npm start</code> to start the development server.
          </li>
          <li>
            Open <code>http://localhost:3000</code> in your browser to view the
            application.
          </li>
        </ol>
        <hr />
        <h2>Features</h2>
        <ul>
          <li>
            Developed a dynamic and responsive Front-End web application using
            React and Firebase's Realtime Database to create, store and retrieve
            user-generated posts in real-time.
          </li>
          <li>
            Implemented client-side routing using the latest version of React
            Router, v6, to ensure a seamless and smooth navigation experience
            for users.
          </li>
          <li>
            Designed an intuitive and visually-appealing user interface with
            Bootstrap, ensuring cross-device compatibility and optimal user
            experience on all devices.
          </li>
          <li>
            Efficiently managed state and events using React hooks such as
            useState and useEffect, making the application fast and lightweight
            while maintaining optimal performance.
          </li>
          <li>
            Implemented advanced user input validation and form submission
            handling using the preventDefault method, ensuring the highest level
            of security and data integrity for users.
          </li>
        </ul>
        <hr />
        <h2>Contributing</h2>
        <p>
          Contributions are welcome and encouraged! To contribute, please follow
          these steps:
        </p>
        <ol>
          <li>Fork the repository.</li>
          <li>Create a new branch for your feature or bug fix.</li>
          <li>
            Commit your changes and push the branch to your forked repository.
          </li>
          <li>Submit a pull request to the main repository.</li>
        </ol>
        <hr />
        <h2>License</h2>
        <p>
          This project is licensed under the MIT License. See{" "}
          <a href="LICENSE">LICENSE</a> for more information.
        </p>
      </div>
    </>
  );
}
