import "./App.css";
import { Description } from "../Description/Description";

import { Options } from "../Options/Options";

import { Feedback } from "../Feedback/Feedback";

export default function App() {
  return (
    <>
      <Description
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Options friends={friends} />
      <Feedback items={transactions} />
    </>
  );
}
