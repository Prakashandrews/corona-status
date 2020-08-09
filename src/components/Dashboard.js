import React, { useState, useEffect } from "react";

export default function Dashboard(props) {
  const [user, setUser] = useState(null);

  async function fetchUserData() {
     fetch("https://coronavirus-19-api.herokuapp.com/all").then(res => res.json()).then(data => setUser(data));
  }

  useEffect(() => {
    fetchUserData();
  }, []);

 //const res = setUser.map( item => <div>{item.cases} </div>);
 const res = user && user.cases ? user.cases : "test1";
 
  return (
    <div>
        {res}
    </div>
  );
}