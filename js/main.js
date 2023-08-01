var siteNameInput = document.getElementById("siteName")
var siteUrlInput = document.getElementById("siteUrl")



var rowsContainer =[];
function addWebsite(){


    var website={
        Name: siteNameInput.value,
        Url: siteUrlInput.value
    }
    rowsContainer.push(website)
    console.log(rowsContainer);


    clearData()
}
function clearData(){
    siteNameInput.value=''
    siteUrlInput.value=''
}
function displayData(){
   var table=''
    for( var i=0 ;i<rowsContainer.length ;i++){
        table += `
        <tr>
            <td>${i}</td>
            <td>jk</td>
            <td><button class="btn btn-primary" data-index="0">
                <i class="fa-solid fa-eye pe-2"></i>Visit
              </button></td>
              <td><button class="btn btn-danger" data-index="0">
                <i class="fa-solid fa-trash-can pe-2"></i>Delete
              </button></td>
              </tr>
        `
    }
    document.getElementById("tbody").innerHTML=table;

}