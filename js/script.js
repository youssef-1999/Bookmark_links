var SiteName=document.getElementById("SiteName")
var SiteUrl=document.getElementById("SiteUrl")
var myBody=document.getElementById("myBody")
var error=document.getElementById("error")
var errorUrl=document.getElementById("errorUrl")
var urlList
if(localStorage.getItem("UrlList"))
{
    urlList=JSON.parse(localStorage.getItem("UrlList"))
    displayUrl(urlList)
}
else
{
    urlList=[]
}

//function to add url
function addUrl()

{
    if(urlValidation() && websiteValidation())
    {

        var url={
            Name:SiteName.value,
            Url:SiteUrl.value
        }
        urlList.push(url)
        displayUrl(urlList)
        
        addToLocalStorage()
        console.log(displayUrl(urlList));
        clearValues()
    }
}

///function to clear values
function clearValues()
{
    SiteName.value='',
    SiteUrl.value=''
}
//function to display Url
function displayUrl(url)
{var cartona=''
    for(var i=0;i<url.length;i++)
    {
        cartona+=
        `
        <tr>
        <td>${i+1}</td>
        <th>${url[i].Name}</th>
        <th><a target="_blank" href=${url[i].Url}><button class='btn btn-primary'><i class="fa-solid fa-eye mx-2"></i>Visit</button></a></th>
        <th><button onclick="removeUrl(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can mx-2"></i>Delete</button></th>
    </tr>
        `
    }
    myBody.innerHTML = cartona
}



//function to remove url
function removeUrl(index)
{
    urlList.splice(index, 1)
    displayUrl(urlList)
    console.log(index);
}

function addToLocalStorage()
{
    localStorage.setItem('UrlList',JSON.stringify(urlList))
}

// function to validate the Url 
function urlValidation()
{
    var regex=/^(https:\/\/www\.|https:\/\/www\.)[A-Za-a0-9!\$]+\.[a-zA-Z]{2,5}$/gi
    if(regex.test(SiteUrl.value))
    {
        SiteUrl.classList.add('is-valid');
        SiteUrl.classList.remove('is-invalid');
        errorUrl.classList.replace('d-block','d-none');
        return true
    }
    else
    {
        SiteUrl.classList.add('is-invalid');
        SiteUrl.classList.remove('is-valid');
        errorUrl.classList.replace('d-none','d-block');
        return false
    }
}

// function to validate Wesbite Name 
function websiteValidation()
{
    var regex=/^[A-Za-z0-9\s]{3,}$/gi
    if(regex.test(SiteName.value))
    {
        SiteName.classList.add('is-valid');
        SiteName.classList.remove('is-invalid');
        error.classList.replace('d-block','d-none');
        return true
    }
    else
    {
        SiteName.classList.add('is-invalid');
        SiteName.classList.remove('is-valid');
        error.classList.replace('d-none','d-block');
        return false
    }
}