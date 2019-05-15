var dummyData = {};


//---------------Books----------------------------------------------------
dummyData.books = [{id:1 , userId:1 , name:"Head First Javascript" , authorName:"O'Reilly" , category:"Computer Science" , subcategory:"JavaScript" , pages:400 , image:"books/book1.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:2 , userId:3 , name:"Head First Java" , authorName:"O'Reilly" , category:"Computer Science" , subcategory:"Java" , pages:250 , image:"books/book3.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:3 , userId:1 , name:"Head First C" , authorName:"O'Reilly" , category:"Computer Science" , subcategory:"C" , pages:360 , image:"books/book4.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:4 , userId:2 , name:"Head First HTML5" , authorName:"O'Reilly" , category:"Computer Science" , subcategory:"HTML" , pages:412 , image:"books/book2.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:5 , userId:4 , name:"Concept of Physics 1" , authorName:"H.C Verma" , category:"Science" , subcategory:"Physics" , pages:431 , image:"books/book5.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:6 , userId:1 , name:"Concept of Physics 2" , authorName:"H.C Verma" , category:"Science" , subcategory:"Physics" , pages:278 , image:"books/book7.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:7 , userId:1 , name:"Chemistry 1" , authorName:"Pradeep" , category:"Science" , subcategory:"Chemistry" , pages:789 , image:"books/book6.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:8 , userId:2 , name:"Chemistry 2" , authorName:"Pradeep" , category:"Science" , subcategory:"Chemistry" , pages:621 , image:"books/book2.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:9 , userId:1 , name:"Data Structures and Algorithms" , authorName:"Narsimha" , category:"Computer Science" , subcategory:"Data Structures" , pages:365 , image:"books/book3.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:10 , userId:3 , name:"Mathematics I" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:465 , image:"books/book4.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:11 , userId:4 , name:"Mathematics II" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:326 , image:"books/book5.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:12 , userId:1 , name:"Mathematics III" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:489 , image:"books/book6.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:13 , userId:2 , name:"Mathematics IV" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:451 , image:"books/book1.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:14 , userId:2 , name:"Mathematics V" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:427 , image:"books/book2.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:15 , userId:2 , name:"Mathematics VI" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:378 , image:"books/book5.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:16 , userId:3 , name:"Mathematics VII" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:298 , image:"books/book6.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:17 , userId:4 , name:"Mathematics VIII" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:201 , image:"books/book7.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:18 , userId:4 , name:"Mathematics IX" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:376 , image:"books/book1.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:19 , userId:4 , name:"Mathematics X" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:524 , image:"books/book2.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:20 , userId:5 , name:"Mathematics XI" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:672 , image:"books/book3.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:21 , userId:5 , name:"Mathematics XII" , authorName:"R.D Sharma" , category:"Science" , subcategory:"Maths" , pages:524 , image:"books/book4.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:22 , userId:5 , name:"Sex And The City" , authorName:"Lakshya" , category:"Literature" , subcategory:"Fiction" , pages:367 , image:"books/book5.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:23 , userId:3 , name:"Head First Android" , authorName:"O'Reilly" , category:"Computer Science" , subcategory:"Android" , pages:398 , image:"books/book6.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:24 , userId:2 , name:"Head First Servlets" , authorName:"O'Reilly" , category:"Computer Science" , subcategory:"Java" , pages:382 , image:"books/book7.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:25 , userId:1 , name:"English Communication" , authorName:"John" , category:"English" , subcategory:"Grammar" , pages:450 , image:"books/book2.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:26 , userId:2 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book1.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:27 , userId:4 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book2.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:28 , userId:3 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book4.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:29 , userId:5 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book6.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:30 , userId:5 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book7.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:31 , userId:5 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book3.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:32 , userId:6 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book2.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:33 , userId:6 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book1.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:34 , userId:7 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book1.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5},
{id:35 , userId:8 , name:"" , authorName:"" , category:"" , subcategory:"" , pages:"" , image:"books/book3.jpg" , available:1 , buy:1 , rent:1 , buyAmount:400 , rentAmount:5}];
//--------------------------------------------------------------------------------






//--------------------------Users------------------------------------------------------
dummyData.users = [{id:1 , username:"lakshyasinghal333@gmail.com" , password:"lakshya" , name:"Lakshya Singhal" , birthday:"02/03/1990" , address:"House no. 74 B , Sec 11" , city:"Faridabad" , state:"Haryana" , pincode:"121006" , contactNo:"8826387794" , bookIds:"1,2,3,4,5" , active:1 , creationTime:"20-02-2018 02:00:00" , lastVisited:"20-02-2018 02:00:00"},
{id:2 , username:"himanshu@gmail.com" , password:"himanshu" , name:"Himanshu Singhal" , birthday:"05/03/1993" , address:"House no. 74 B , Sec 11" , city:"Faridabad" , state:"Haryana" , pincode:"121006" , contactNo:"8448054935" , bookIds:"6,7,8,9,10,11" , active:1 , creationTime:"20-02-2018 02:00:00" , lastVisited:"20-02-2018 02:00:00" },
{id:3 , username:"anil@gmail.com" , password:"anil" , name:"Anil Poonia" , birthday:"10/15/1991" , address:"65 huddang road" , city:"Jaipur" , state:"Rajasthan" , pincode:"100201" , contactNo:"9182039282" , bookIds:"12,13,14,15,16,17" , active:1 , creationTime:"21-02-2018 14:30:00" , lastVisited:"21-02-2018 14:30:00"},
{id:4 , username:"mahendra@gmail.com" , password:"mahendra" , name:"Mahendra Beniwal" , birthday:"20/06/1992" , address:"21 C Khet 25" , city:"Nagaur" , state:"Rajasthan" , pincode:"136527" , contactNo:"8273648290" , bookIds:"18,19,20,21" , active:1 , creationTime:"23-02-2018 13:56:00" , lastVisited:"23-02-2018 13:56:00"},
{id:5 , username:"jitendra@gmail.com" , password:"jitendra" , name:"Jitendra Meena" , birthday:"16/01/1993" , address:"123 gali no. 10 chameli road" , city:"Chittor" , state:"Rajastan" , pincode:"345261" , contactNo:"7346783299" , bookIds:"22,23" , active:1 , creationTime:"23-02-2018 13:56:00" , lastVisited:"23-02-2018 13:56:00"},
{id:6 , username:"sher@gmail.com" , password:"sher" , name:"Sher Mohammad" , birthday:"17/12/1993" , address:"House no. 36 street 21" , city:"Delhi" , state:"Delhi" , pincode:"223876" , contactNo:"7382782387" , bookIds:"24,25,26" , active:1 , creationTime:"21-02-2018 14:30:00" , lastVisited:"21-02-2018 14:30:00" },
{id:7 , username:"anshu@gmail.com" , password:"anshu" , name:"Anshu Kumar" , birthday:"07/03/1991" , address:"" , city:"Patna" , state:"Bihar" , pincode:"290382" , contactNo:"192873" , bookIds:"27,28,29,10,31,32,33,34,35" , active:1 , creationTime:"21-02-2018 14:30:00" , lastVisited:"21-02-2018 14:30:00"}];
//--------------------------------------------------------------------------------------





//-----------------------BookRequests----------------------------------------------------
dummyData.bookRequests = [{id:1 , requestType:1 , requestStatus:1 , requesterId:4 , bookId:3 , targetId:1 , estimatedDays:5 , creationTime:"24-02-2018 09:34:00" , lastModified:"24-02-2018 09:34:00"},
{id:2 , requestType:1 , requestStatus:1 , requesterId:1 , bookId:8 , targetId:2 , estimatedDays:7 , creationTime:"25-02-2018 11:45:00" , lastModified:"25-02-2018 11:45:00"},
{id:3 , requestType:1 , requestStatus:1 , requesterId:1 , bookId:19 , targetId:4 , estimatedDays:8 , creationTime:"25-02-2018 15:16:00" , lastModified:"25-02-2018 15:16:00"},
{id:4 , requestType:1 , requestStatus:1 , requesterId:"" , bookId:"" , targetId:"" , estimatedDays:"" , creationTime:"" , lastModified:""},
{id:5 , requestType:1 , requestStatus:1 , requesterId:"" , bookId:"" , targetId:"" , estimatedDays:"" , creationTime:"" , lastModified:""},
{id:6 , requestType:1 , requestStatus:1 , requesterId:"" , bookId: "", targetId:"" , estimatedDays:"" , creationTime: "", lastModified:""}];




//---------------------Subcategories-------------------------------------------------------
dummyData.subcategories = ["HTML5" , "C" , "C++" , "Physics" , "Literature" , "Erotica" , "Chemistry" , "Maths" , "English" , "History" , "Geography" , "Aptitude" , "Reasoning" , "Finance" , "Accounts" , "Arts" , "Biography" , "Biology" , "Hindi" , "English Grammar" , "Sanskrit"];









































