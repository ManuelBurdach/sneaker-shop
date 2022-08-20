const data = [
  {
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Air",
    brand: "Nike",
    price: "120.00 $",
    sizes: ["37", "38", "39"],
  },
  {
    img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Dunk High Pro",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["37", "38", "39", "40", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
    name: "Old Skool",
    brand: "Vans",
    price: "50.00 $",
    sizes: ["37"],
  },
  {
    img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
    name: "Summer Party",
    brand: "Nike",
    price: "100.00 $",
    sizes: ["42", "43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Retro",
    brand: "Adidas",
    price: "149.00 $",
    sizes: ["39", "40"],
  },
  {
    img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Fancy Doc",
    brand: "Crocs",
    price: "79.00 $",
    sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Classic",
    brand: "Reebok",
    price: "99.00 $",
    sizes: ["43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Jungle",
    brand: "New Balance",
    price: "110.00 $",
    sizes: ["39", "40", "41", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Essentials",
    brand: "Errant",
    price: "120.00 $",
    sizes: ["41", "42", "43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Très chic",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
    name: "Plastic Revolution",
    brand: "Adidas",
    price: "180.00 $",
    sizes: ["37", "38", "39", "40"],
  },
  {
    img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sporty",
    brand: "Asics",
    price: "90.00 $",
    sizes: ["41", "42", "43", "44"],
  },
];

// LOGO ANI ---------------------------------
document.querySelector("#logo").addEventListener("mouseover", (event) => {
  event.target.style.animation = "logoAni 1s 1";
  event.target.addEventListener("mouseout", () => {
    event.target.style.animation = "none";
  });
});

// NEW ARRIVALS ---------------------------------
let newArrivals = document.querySelector("#newArrivalsContent");
let shoppingCart = [];

let arrivals = (value = "None") => {
  newArrivals.innerHTML = "";
  data.forEach((item) => {
    if (value == item.brand || value == "None") {
      let article = document.createElement("article");

      let img = document.createElement("img");
      img.src = item.img;
      article.appendChild(img);

      let div1 = document.createElement("div");
      let h6 = document.createElement("h6");
      h6.innerText = item.name;
      div1.appendChild(h6);
      let button = document.createElement("button");
      button.innerText = "+";
      button.addEventListener("click", () => {
        document.querySelector("#shoppingCartCounter p").innerText = Number(document.querySelector("#shoppingCartCounter p").innerText) + 1;
        shoppingCart.push(item);
        console.log(shoppingCart);
      });
      div1.appendChild(button);

      let div2 = document.createElement("div");
      let price = document.createElement("p");
      price.innerText = item.price;

      let div3 = document.createElement("div");
      let button1 = document.createElement("button");
      button1.value = false;
      button1.addEventListener("click", () => {
        if (button1.value === "false") {
          button1.value = "true";
          item.sizes.forEach((item) => {
            let p = document.createElement("p");
            p.innerText = item;
            div3.appendChild(p);
          });
        } else {
          button1.value = "false";
          div3.innerHTML = "";
        }
      });
      let button1Img = document.createElement("img");
      button1Img.src = "assets/img/arrow.svg";
      button1.appendChild(button1Img);
      div2.appendChild(price);
      div2.appendChild(button1);

      article.appendChild(div1);
      article.appendChild(div2);
      article.appendChild(div3);
      newArrivals.appendChild(article);
    }
  });
};

arrivals();

document.querySelector("#select").addEventListener("change", (event) => {
  arrivals(event.target.value);
  console.log(event.target.value);
});

// JOIN NEWSLETTER ---------------------------------
document.querySelector("#join input[type='submit']").addEventListener("click", (event) => {
  event.preventDefault();
  if (document.querySelector("#join input[type='email']").value != "" && document.querySelector("#join input[type='email']").value.includes("@") && document.querySelector("#join input[type='email']").value.includes(".")) {
    document.querySelector("#join").style.display = "none";
    document.querySelector("#joinThanks").style.display = "block";
  } else {
    document.querySelector("#join input[type='email']").style.color = "red";
  }
});

// COOKIE OVERLAY ---------------------------------
let cookieAccept = (check = false) => {
  if (document.cookie.replace("cookieAccept=", "") === "true" || check === true) {
    document.querySelector("#cookieOverlay").style.display = "none";
    document.querySelector("nav").style.filter = "blur(0px)";
    document.querySelector("header").style.filter = "blur(0px)";
    document.querySelector("main").style.filter = "blur(0px)";
    document.querySelector("footer").style.filter = "blur(0px)";
  }
};

document.querySelectorAll("#cookieOverlay button").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.value === "true") {
      document.cookie = "cookieAccept=true; max-age=100000000; path=/";
      location.reload();
    } else if (event.target.value === "false") {
      cookieAccept(true);
    }
  });
});

// SHOPPING CART ---------------------------------
let shoppingCartOverlay = document.querySelector("#shoppingCartOverlay");
let shoppingCartOverlayContent = document.querySelector("#shoppingCartOverlayContent");
let totalCost = shoppingCartOverlay.querySelector("#totalCost span");
totalCost.innerHTML = 0;

shoppingCartOverlay.style.display = "none";
document.querySelector("#shoppingCart").addEventListener("click", () => {
  if (shoppingCartOverlay.style.display == "none") {
    shoppingCartOverlay.style.display = "block";
    shoppingCartOverlayContent.innerText = "";
    if (shoppingCart.length > 1) {
      shoppingCart.forEach((item, index) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = `${index + 1}. ${item.name} ${item.price}`;
        div.appendChild(p);
        shoppingCartOverlayContent.appendChild(div);
        totalCost.innerHTML = Number(totalCost.innerText) + Number(item.price.replace(".00 $", ""));
      });
    } else if (shoppingCart.length == 1) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = shoppingCart[0].name;
      div.appendChild(p);
      shoppingCartOverlayContent.appendChild(div);
    } else {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = "The cart is empty";
      div.appendChild(p);
      shoppingCartOverlayContent.appendChild(div);
    }
  } else {
    shoppingCartOverlay.style.display = "none";
  }
});

shoppingCartOverlay.querySelector("button").addEventListener("click", () => {
  shoppingCartOverlay.style.display = "none";
});
