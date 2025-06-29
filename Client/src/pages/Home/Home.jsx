import React, { useContext } from "react";
import { appState } from "../../App";
import Layout from "../../Component/layout/Layout";
import style from "./home.module.css";
import Question from "../../Component/question/Question";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useContext(appState);
  
  return (
    <Layout>
      <div>
        <div className={style.container}>
          <Link to='/ask-question' className={style.btn}> Ask Question</Link>
          <div>
            <h2>Welcome, {user.username}</h2>
          </div>
        </div>
        <div className={style.title}><h1>Question</h1></div>
        <Question/>
      </div>
    </Layout>
  );
}

export default Home;


////////////////////////////////////////////
// function Home() {
//   const { user } = useContext(appState);

//   return (
//     <Layout>
//       <div>
//         <div className={style.container}>
//           <Link to="/ask-question" className={style.btn}>
//             {" "}
//             Ask Question
//           </Link>
//           <div>
//             <h2>Welcome, {user.name || user.username}</h2>{" "}
//             {/* Adjust based on your user object */}
//           </div>
//         </div>
//         <div className={style.title}>
//           <h1>Question</h1>
//         </div>
//         <Question />
//       </div>
//     </Layout>
//   );
// }