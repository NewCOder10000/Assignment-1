function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";

    const labels = [
        { text: "Alienware Aurora R15 Gaming", link: "Assignment1Page3Part6.html" },
        { text: "Hp 22 Touch", link: "Assignment1Page3Part7.html" },
        { text: "Asus Expert Center D700SC", link: "Assignment1Page3Part8.html" },
        { text: "Dell Desktop Computer Bundle", link: "Assignment1Page3Part9.html" },
        { text: "Dell Inspiron 24", link: "Assignment1Page3Part10.html" },
        { text: "Iphone 15 Pro Max", link: "Assignment1Page3Part11.html" },
        { text: "Huawei Mate 60 Pro", link: "Assignment1Page3Part12.html" },
        { text: "Oppo Reno 9 Pro 5G", link: "Assignment1Page3Part13.html" },
        { text: "Samsung Galaxy S23 Ultra 5G", link: "Assignment1Page3Part14.html" },
        { text: "XiaoMi mi 11 Pro 5G", link: "Assignment1Page3Part15.html" },
        { text: "Refurbished Ipad Air", link: "Assignment1Page3Part16.html" },
        { text: "Huawei MatePad", link: "Assignment1Page3Part17.html" },
        { text: "Oppo Pad Air", link: "Assignment1Page3Part18.html" },
        { text: "Samsung Galaxy Tab A7 Lite", link: "Assignment1Page3Part19.html" },
        { text: "XiaoMi Mi Pad 6", link: "Assignment1Page3Part20.html" },
        { text: "Panasonic X1", link: "Assignment1Page3Part21.html" },
        { text: "Panasonic TH-55Hx655s", link: "Assignment1Page3Part22.html" },
        { text: "Sony Bravia X75K", link: "Assignment1Page3Part23.html" },
        { text: "Sony W60D", link: "Assignment1Page3Part24.html" },
        { text: "Mitsubishi WD-73737", link: "Assignment1Page3Part25.html" }
    ];

    let foundMatch = false;

    labels.forEach(label => {
        if (label.text.toLowerCase().includes(searchTerm)) {
            foundMatch = true;
            window.open(label.link, "_blank");
        }
    });

    if (!foundMatch) {
        const li = document.createElement("li");
        li.textContent = "No results found";
        searchResultsElement.appendChild(li);
    }
}
