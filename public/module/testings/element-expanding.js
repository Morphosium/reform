"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../Definitions/InitialFields/ElementField/index");
const index_2 = require("../Definitions/InitialFields/SectionField/index");
const Reflector_1 = require("../Reflection/Reflector");
function southParkCharacters() {
    let array = [], source = [
        {
            name: "cartman",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/EricCartman.png/220px-EricCartman.png"
        },
        {
            name: "kyle",
            imgUrl: "https://vignette.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png"
        },
        {
            name: "stan",
            imgUrl: "https://vignette.wikia.nocookie.net/southpark/images/c/c6/Stan-marsh-0.png"
        },
        {
            name: "kenny",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png"
        },
    ];
    let chr;
    for (let index = 0; index < source.length; index++) {
        chr = source[index];
        let eventThings = {};
        if (chr.name === "kenny") {
            eventThings = {
                "click": [
                    (reflection, event) => {
                        reflection.element.style.display = "none";
                        const description = reflector.findReflectionById("description");
                        if (description === null || description === void 0 ? void 0 : description.element)
                            description.element.textContent = "Oh my god, they killed Kenny! YOU B🤬ARD!!!";
                    }
                ]
            };
        }
        array.push(new index_1.ElementField({
            content: [],
            tag: "img",
            attributes: [
                {
                    key: "src",
                    value: chr.imgUrl
                },
                {
                    key: "alt",
                    value: chr.name
                },
                {
                    key: "height",
                    value: "100px"
                }
            ],
            eventBindings: eventThings
        }));
    }
    return array;
}
const reflector = new Reflector_1.Reflector(new index_2.RootSectionField({
    content: [
        new index_1.ElementField({
            tag: "h1",
            content: "reform-js element rendering, includes event binding..."
        }),
        new index_1.ElementField({
            tag: "p",
            id: "description",
            content: "Maybe, you can consider click the known person."
        }),
        ...southParkCharacters()
    ]
}));
reflector.expandThere("div#base");
