import React from "react"
import Header from "./src/components/header"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
  return (
    <div>
      <Header />
      {element}
    </div>
  );
}

export default wrapPageElement;