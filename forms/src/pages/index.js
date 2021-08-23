import React from "react"
import { useEffect } from "react"

export default function Home() {
  
 useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });
  return <div>Hello world!</div>

}
