var library = [
  { 
    author: "Bill Gates", 
    title: "The Road Ahead", 
    readingStatus: true 
  },
  { 
    author: "Steve Jobs", 
    title: "Walter Isaacson", 
    readingStatus: true 
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for(element=0;element<library.length;element++){
  var info = library[element].title + 'written by' + library[element].author
  if(library[element].readingStatus){
    console.log('Status: Read'+'\nBook Details= '+ info );
  }
  else{
    console.log('Status: Not Read'+'\nBook Details= '+ info );
  }
};

// for (var i = 0; i < library.length; i++) 
//    {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//       console.log("Already read " + book);
//     } else
//     {
//      console.log("You still need to read " + book);
//     }
//    }