!function(){const e=document.getElementById("taskform"),t=document.querySelector("#taskform > button");var n=document.getElementById("taskInput"),o=document.getElementById("tasklist"),d=document.getElementById("dueDateInput"),l=document.getElementById("completionTimeInput"),i=document.getElementById("estimatedTimeInput"),u=document.getElementById("priorityInput");t.addEventListener("click",(function(t){t.preventDefault();let m=n.value,c=d.value,p=l.value;!function(t,n,d,l,d,i,u){let m=(new Date).getFullYear(),c={taskDescription:t,dueDate:n,dateCreated:m,estimatedTime:l,completionTime:i,priorityRating:d,estimatedTime:l,completionStatus:u};a.push(c),function(t){let n=document.createElement("li");n.innerHTML="<p>"+t.taskDescription+"</p",o.appendChild(n);let d=document.createElement("button"),l=document.createTextNode("Delete Task");d.appendChild(l),n.appendChild(d),d.addEventListener("click",(function(e){e.preventDefault(),n.remove()})),e.reset()}(c)}(m,c,i.value,u.options[u.selectedIndex].value,p,!1),console.log(o)}));var a=[]}();
//# sourceMappingURL=index.880dc2a1.js.map