

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
  

const hexColors = [
  "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD",
  "#AEC6CF", "#FFDAB9", "#E6E6FA", "#FFFACD", "#F5DEB3",
  "#1ABC9C", "#E74C3C", "#2ECC71", "#3498DB", "#9B59B6",
  "#D8BFD8", "#F08080", "#B0E0E6", "#C1FFC1", "#FFB6C1",
  "#34495E", "#16A085", "#27AE60", "#2980B9", "#D35400",
  "#E0FFFF", "#FADADD", "#E3F9FD", "#FBE8EB", "#D5E8D4",
  "#C0392B", "#BDC3C7", "#7F8C8D", "#FF6F61", "#6B5B95",
  "#88B04B", "#F7CAC9", "#92A8D1", "#955251", "#B565A7",
  "#F8B195", "#C2DFFF", "#E0BBE4", "#FFDFD3", "#D7ECD9",
  "#F5F5DC", "#FFE4E1", "#D3FFCE", "#FFECB3", "#BFD8B8",
  "#009B77", "#DD4124", "#45B8AC", "#EFC050", "#5B5EA6", 
  "#FDFD96", "#C6E2FF", "#FFDEAD", "#E6E6FA", "#F0FFF0"
];


//here, the event is applied on the document:
document.addEventListener('keyup', ()=>{ 
const text = document.getElementById("quote");
const index = Math.floor(Math.random()*questions.length);
text.textContent = questions[index];
const element = document.getElementsByClassName('container')[0];
const idx = Math.floor(Math.random()*hexColors.length);
element.style.backgroundColor = hexColors[idx];
})