//selectors
let addBtn=$("#button");
//console.log(addBtn);
let listTable=$("table");
//console.log(listTable);
let textBox=$("#myInput");
//console.log(textBox);

    addBtn.click(function(){
        let trElm=$("<tr></tr>");
        let tdElm=$("<td></td>");
        let inputValue=textBox.val()
        if (inputValue === '') {
            alert("You must write something!");
            return;
        } else {
        tdElm.html(inputValue);
        trElm.append(tdElm);
        }
        textBox.val("");  
        
        //delete button
        let deleteImg=$("<img src='./images/delete.svg' height='25'>");
        deleteImg.click(function(){
            $(this).parent().parent().remove();
        });
        let tdElm2=$("<td></td>");
        tdElm2.append(deleteImg);
        tdElm2.css('background-color','white');
        trElm.append(tdElm2);
        //done 
        tdElm.click(function(){
            $(this).toggleClass('checked');
        });
        
        listTable.append(trElm);
    });







