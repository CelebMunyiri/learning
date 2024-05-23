// const  getSenderInfo = async(req, res)=> {
//     const { creatorId, mongourl,client_name } = req.query;
//     try {
     
//       // Connect to the specified MongoDB instance using the mongourl
//       const customer=await Customer.findOne({client_name:client_name});
//       const db = await mongoose.createConnection(mongourl);
  
//       // Get the User model from the connected database
//       const UserModel = db.model('User', User.schema);
  
//       // Query the User collection in the specified database
//       const user = await UserModel.findOne({ _id: creatorId });
  
//       // Close the database connection after fetching the data
//       db.close();
  
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       res.status(200).json({ success: true, user });
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to fetch user details', error: error.message });
//     }
//   };

//   ////
//   bank_details:{
//     account_name:{type:String},
//     IBAN:{type:String},
//     account_number:{type:String}
// },

//Addd an array

let ar=[1,2,3];

function addArray(arr){
  let sum=0;

  for(let i=0;i<arr.length;i++){
    if (ar[i] >= 1 && ar[i] <= 1000) {
      sum += ar[i];
    } else {
      console.log(`Element at index ${i} (${ar[i]}) is out of range.`);
    }
  }
  return sum;
}

//console.log(addArray(ar));

function compareTriplets(a,b){
  let al=0;
  let bo=0;
  let results=[];
  for(let i=0;i<a.length;i++){
    if(a[i]>b[i]){
      al+=1;
    } else if(a[i]<b[i]){
      bo+=1;
    } else if(a[i]==bo[i]){
      al+=0;
      bo+=0;
    }
  }
  
  return [al,bo];

}

//console.log(compareTriplets([17,28,30],[99,16,8]));

1<=n<=10
0<=ar[i]<=10^10

function aVeryBigSum(ar) {
  // Initialize sum as a BigInt to handle large numbers
  let sum = BigInt(0);
  
  // Calculate the sum of array elements
  for (let i = 0; i < ar.length; i++) {
    let n=ar.length;
      if (ar[i] >= 0 && ar[i] <= 10n**10n) {
          sum += BigInt(ar[i]);
      } else {
          throw new Error(`Element at index ${i} is out of range: ${ar[i]}`);
      }
  }
  
  return sum.toString(); // Convert BigInt sum to string for output
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]))

