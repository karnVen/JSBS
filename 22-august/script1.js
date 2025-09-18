
const questions = [
  "What is polymorphism",
  "What is indexing",
  "What is paging",
  "What is a MAC address",
  "What is a constructor",
  "What is a firewall",
  "What is a foreign key",
  "What is virtual memory",
  "What is a transaction in DBMS",
  "What is encapsulation",
  "What is a view in SQL",
  "What is a deadlock",
  "What is abstraction",
  "What is the OSI model",
  "What is a join in SQL",
  "What is a system call",
  "What is inheritance in Java",
  "What is the difference between DELETE and TRUNCATE",
  "What is a process in an operating system",
  "What is multithreading in Java",
  "What is a primary key",
  "What is the role of a scheduler in OS",
  "What is the difference between TCP and UDP",
  "What is SQL",
  "What is latency",
  "What is normalization",
  "What is the difference between final, finally, and finalize",
  "What is the difference between == and .equals()",
  "What is DNS",
  "What is the difference between a process and a thread",
  "What is JVM",
  "What is context switching",
  "What is bandwidth",
  "What is segmentation",
  "What is HTTP",
  "What are ACID properties",
  "What is an IP address",
  "What is TCP/IP",
  "What is the difference between JDK and JRE",
  "What are the necessary conditions for deadlock"
];


//here, playing with the event object:
//an event is an object, which stores each and every information related to a particular event(i.e. which key you have pressed, where you have clicked on the webpage, etc) that has happend on the webpage
document.addEventListener('keydown', (event)=>{
console.log(event); //prints the event.
console.log(event.key); //you can also see with this that which key has been pressed.
const text = document.getElementById("quote");
const index = Math.floor(Math.random()*questions.length);
text.textContent = questions[index];
})