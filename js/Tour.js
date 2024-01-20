AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards(); // Call the function to create cards when the component initializes
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "surt",
        title: "The Surt",
        url: "./assets/thumbnails/surt.jpg",
      },
      {
        id: "spider",
        title: "Spider",
        url: "./assets/thumbnails/spider.jpeg",
      },
      {
        id: "justice_league",
        title: "Justice League",
        url: "./assets/thumbnails/justice_league.jpeg",
      },
      {
        id: "god_monster",
        title: "God & Monster",
        url: "./assets/thumbnails/god_monster.jpg",
      },
    ];

    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      var borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      var thumbnailEl = this.createThumbnail(position, item.url);
      borderEl.appendChild(thumbnailEl);

      // Title Text Element

      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) {
    var entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", { primitive: "ring", radiusInner: 9, radiusOuter: 10 });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#000", opacity: 10000 });

    return entityEl;
  },

  createThumbnail: function (position, url) {
    var entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", { primitive: "circle",radius:9});
    entityEl.setAttribute("material", { src: url });



    return entityEl;
  },

});
