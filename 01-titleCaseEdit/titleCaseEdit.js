function titleCaseEdit(title) {
   var separation= title.split(' ');

   for(i in separation){
     separation[i]= separation[i].charAt(0).toUpperCase() + separation[i].substring(1);
   }
    //put wach word back with space and return the title
   title=separation.join(' ');
    return title;
 }


// Do not edit this line;
module.exports = titleCaseEdit;