(function () {
    let menuData, navItems;
    const Http = new XMLHttpRequest();
    const url = 'https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            menuData = JSON.parse(Http.responseText);
            navItems = Object.assign(menuData);
            
            let navItemKeys = Object.keys(navItems);
            let mobileNavItemKeys = Object.keys(navItems);
            navItemKeys.push("pricing");
            mobileNavItemKeys.push("sigma");

            let menuSection = document.getElementById("menuData");

            navItemKeys.forEach(item => {
                let createChildElement = document.createElement("button");
                createChildElement.innerHTML = item;
                menuSection.appendChild(createChildElement);
            });
            
            mobileNavItemKeys.forEach(item => {
                let createChildElement = "<li><a href='javascript:void(0)'>" + item + "</a></li>"
                $("#mobileNavProductList").append(createChildElement);
            });

            Object.keys(navItems).forEach(item => {
                let createSubEle;
                let createEle = "<div class='navSectionContent' id=" + item + "><ul></ul></div>";
                $(".dropDownNavSection").append(createEle);
                menuData[item].forEach(menu => {
                    createSubEle = "<li><a href='javascript:void(0)'><div class='navContent'><h5 class='navTitle'>"+ menu.title +"</h5><p class='navDesc'>"+ menu["sub-title"] +"</p></div></a></li>";
                });
                $(".navSectionContent > ul").append(createSubEle);
            });

            $("li#menuData > button").on({
                mouseover: function(e) {
                    if(e.target.innerHTML.toLowerCase() !== 'pricing') {
                        var leftPosition = e.target.offsetLeft;
                        var eleWidth = e.target.offsetWidth/2;
                        var dropDownWidth = $(".dropDwonContainer").width();
                        $(".dropDownNav").css({left: (leftPosition - (dropDownWidth/3) - (eleWidth/4)), opacity: 1});
                        // $(".dropDownSectionArrow").css({left: (leftPosition + eleWidth)/2});
                        $("#"+e.target.innerHTML).siblings().removeClass('active').hide();
                        $("#"+e.target.innerHTML).addClass('active').show();
                    }
                }, 
                mouseleave: function(e){
                    $(".dropDownNav").css({opacity: 0});
                }
            });
        }
    }

    $(".mobileMenu a.hamburgerNav").click(function(event) {
        event.preventDefault();
        $(".mobileNavPopup").show();
    });
    
    $(".mobileNavPopup .closeBtn").click(function(event) {
        event.preventDefault();
        $(".mobileNavPopup").hide();
    });
})();