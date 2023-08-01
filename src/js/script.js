

/////// tab for dashboard  ///////////////////

$$('.change-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        localStorage.setItem('tabNumber', index);
        showContent(index)
    })
    
})

function hideContent(){
    $$('.tab-item').forEach(tab => {
        tab.style.display = "none";
    })
}

function showContent(index){
    hideContent()
    $$('.tab-item')[index].style.display = "block";
}


hideContent()
showContent(localStorage.getItem("tabNumber") || 0)