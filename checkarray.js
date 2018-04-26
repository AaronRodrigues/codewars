var arr = [1,2,2,3,3,4,4,4,4,4];
var n = 3;

// function deleteNth(arr,n){
//     var compressed = [];
//       // make a copy of the input array
//       var copy = arr.slice(0);
   
//       // first loop goes over every element
//       for (var i = 0; i < arr.length; i++) {
   
//           var myCount = 0;	
//           // loop over every element in the copy and see if it's the same
//           for (var w = 0; w < copy.length; w++) {
//               if (arr[i] == copy[w]) {
//                   // increase amount of times duplicate is found
//                   myCount++;
//                   // sets item to undefined
//                   delete copy[w];
//               }
//           }
   
//         //   if (myCount > 0) {
//               var a = new Object();
//               a.value = arr[i];
//               a.count = myCount;
//               compressed.push(a);
//         //   }
//       }
   
//     //  return compressed;
//     result = [];
//     for(j=0; j<compressed.length; j++){

//         if (compressed[j].count <= n){
//             result.push(compressed[j].value);
//         }
        
//     }
//     console.log(result);
//   }



function deleteNth(arr,n){
  
    result = [];
     for(i=0;i<arr.length;i++){
       var count = 0;
       for( j=0;j<=i;j++){
         if(arr[i] === arr[j])
           count++;
          //  console.log(count,'1');
           if (count > n)break;
         }
         if(count > n)continue;
        //  console.log(count,'2');
          result.push(arr[i]);      
     }
     console.log(result);
     return result;
}


// function deleteNth(arr,x) {
//   var arrReduced = [];
//   for ( var i = 0; i < arr.length; i++ ) {
//     var count = 0;
//     for ( var j = 0; j <= i; j++ ) {
//       if ( arr[i] === arr[j] ) count++;

//       if ( count > x ) break;
//     }
//     if ( count > x ) continue;
//     arrReduced.push(arr[i]);
//   }
//   console.log(arrReduced);
//   return arrReduced;
// }


// function deleteNth(arr,n){
// // function compressArray(original, maxOccurrences) {arr) { return null; }
//   if (n < 1) { return []; }
  
//   var result = [];
//   var itemCounts = {};
//   for (var index = 0; index < arr.length; index++){
//       var item = arr[index];
//       var count = itemCounts[item] || 0;
//       if (count < n) {
//           result.push(item);
//           itemCounts[item] = count + 1;
//       }
//   }
//   console.log(result);
//   return result;
// }

deleteNth(arr,n);