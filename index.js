// // console.log("Hello !");
// //let -> block scoped variables 
// let a;
// let firstName = "Harsh";
// let lastName = "Babu";
// console.log(windows.location.hostname); 

function makeClickableLink(link) {
    // Check if the link is a valid URL.
    if (!/^https?:\/\//.test(link)) {
      return link;
    }
  
    // Create the HTML anchor element.
    // const anchorElement = document.createElement("a");
    anchorElement.href = link;
    anchorElement.textContent = link;
  
    // Return the anchor element.
    return anchorElement;
  }
  
  // Example usage.
  const link = "https://www.example.com";
  const clickableLink = makeClickableLink(link);
  
  console.log(clickableLink); 