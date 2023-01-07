
// for showing navigation catagory lapton
let NavClickAction = document.querySelector(".NavClickAction");
let CatagorisIcinShow = document.querySelector(".CatagorisIcinShow");
let CatagorisIcinHide = document.querySelector(".CatagorisIcinHide");

function showMenuLaptop(){
    NavClickAction.style.display = "block";
    CatagorisIcinShow.style.display = "block";
    CatagorisIcinHide.style.display = "none";
}

function cross(){
    NavClickAction.style.display = "none";
    CatagorisIcinShow.style.display = "none";
    CatagorisIcinHide.style.display = "block";
    CatagorisIcinShow.style.background = "#818181";
}

// for showing catagoris in phone
let NavCaragoris = document.querySelector(".NavCaragoris");
    
function HideMiniNev(){
    NavCaragoris.style.display = "none";
}

function ShowMiniNev(){
    NavCaragoris.style.display = "block";
}

// for dropdown menu in phone
let DropDown = document.querySelector(".DeopDownMenuMobiel");
DropDown.style.display = "none";
let isTrue = true;

function showDropdown(){
    if(isTrue){
        DropDown.style.display = "block";
        isTrue = false;
    }else{
        DropDown.style.display = "none";
        isTrue = true;
    }

}

// For scrole efect
window.addEventListener('scroll', () => {
    let TopNev = document.querySelector('.TopNev');
    let MidNev = document.querySelector('.MidNev');

    if (window.scrollY > 100) {
        TopNev.style.display = 'none';
        MidNev.style.display = 'fixed';
    } else {
        TopNev.style.display = 'block';;
    }
})