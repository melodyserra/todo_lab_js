var form=document.getElementById("toDoList");
var listItems=document.getElementById("listOfItems");

form.addEventListener("submit", function (event){
	event.preventDefault();

	var item=this.item.value;
	var listItem=document.createElement("li");
	listItem.innerHTML=item;
	listItems.appendChild(listItem);

	
	var deleteButton=document.createElement("button");
	deleteButton.innerHTML="Delete";
	listItem.appendChild(deleteButton);

	deleteButton.addEventListener("click", function () {
		listItems.removeChild(listItem);

	});
	var doneButton=document.createElement("button");
	doneButton.innerHTML="Done";
	listItem.appendChild(doneButton);
	doneButton.addEventListener("click", strikethrough); 
		// listItem.removeChild(doneButton);
		// var undoButton=document.createElement("button");
		// listItem.appendChild(undoButton);
		// undoButton.addEventListener("click", strikethrough);
	

	this.item.value="";

});

var strikethrough=function (event) {
	this.parentElement.classList.toggle("done");
	if(this.innerHTML==="Done") {
		this.innerHTML="Undo";
	}
	else {
		this.innerHTML="Done";
		}

};
