// use this if get error while running app inside package.json file inside script
     "start": "rm -rf .parcel-cache && parcel",
     "build": "rm -rf .parcel-cache && parcel build"
     
    "build": "parcel build index.html"


    // PLANNING TO BUILD A ZOMATO LIKE WEB-APP 
    REQUIREMENT CLARIFICATION

    COMPONENTS 
    *HEADER
      -Logo
      -Nav-items

    *BODY
      -Search-Functionality
      -Card-items
       -Img
       -title,decription,rating,cuisine,etc

    *FOOTER
      -Copyright Logo 
      -Title

// TODO == Fetch the Real Data by using Api of Swiggy

response.data.cards[3].card.gridElements.infoWithStyle.restaurants