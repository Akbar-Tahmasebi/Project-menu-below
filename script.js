window.addEventListener("hashchange",()=>{
    router()
})

function router(){
    switch (location.hash) {
        case "":
            render({title:"HOME",color:"red",hraf:"#home"})
            break;
        case "#home":
            render({title:"HOME",color:"red",hraf:"#home"})
            break;
        case "#search":
            render({title:"SEARCH",color:"blue",hraf:"#search"})
            break;
        case "#likes":
            render({title:"LIKES",color:"yellow",hraf:"#likes"})
            break;
        case "#profile":
            render({title:"PROFILE",color:"pink",hraf:"#profile"})
            break;
    }
}
window.addEventListener("popstate",()=>{
    if(history.state){
        render(history.state)
    }else{
        render({title:"HOME",color:"red",itmeid:"home"})
    }
})

function render(data){
    document.querySelector("h1").innerText = data.title;
    document.querySelector("main").style.backgroundColor = data.color;
    document.querySelectorAll("a").forEach(element=>{
        if(element.href.includes(data.hraf)){
            element.style.color = "white"
        }else{
            element.style.color = "#999"
        }
    })
}