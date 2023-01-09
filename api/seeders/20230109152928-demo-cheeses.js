"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cheeses", [
      {
        name: "Brillat-Savarin",
        milk_type: ["cow"],
        location_id: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/WikiCheese_-_Brillat-savarin_04.jpg/1200px-WikiCheese_-_Brillat-savarin_04.jpg",
        description:
          "Brillat-Savarin is a triple cream dessert cheese that was created by cheese-maker Henri Androuët in the 1930s. It is named after 19th-century gastronome and epicure, Jean Anthelme Brillat-Savarin. It is an industrial cheese produced by three dairies situated in the Ile de France region. Since classified as triple cream cheese, Brillat-Savarin has a fat content of at least 75% achieved by adding rich, luscious cream to pasteurized cow's milk. Young cheese tastes similar to fresh cheese but usually, it is matured for about four to five weeks to develop more complex flavours. A matured Brillat-Savarin has a typical white, bloomy rind with an interior paste that is buttery-white in colour. The texture is dense, moist, and slightly chalky with enough lusciousness and creaminess. The cheese has a milky aroma with lemon sour tones. Flavours are of butter and fresh cream. (https://www.cheese.com/brillat-savarin/)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ossau-Iraty",
        milk_type: ["sheep"],
        location_id: 2,
        image:
          "https://thecheeseatlas.com/wp-content/uploads/2020/04/AOP-Ossau-Iraty-e1655358775588.jpg",
        description:
          "Ossau-Iraty (or Esquirrou) is a traditional, unpasteurised ewe's milk cheese from the picturesque mountains of Pyrenees that hold a fertile grazing land for the milk-giving ewes. This cheese unites two regions of France in the Western Pyrénées: Ossau valley of Bearn and Iraty Forest of Basque Country. It received an AOC protection in 1980, which requires that the cheese be produced with the milk of only two breeds of ewes - Manech and Basco-Béarnaise. An uncooked and pressed cheese, Ossau-Iraty is semi-hard in texture with a thick, buff rind marked with rust and grey moulds. Beneath the brown and orange rind is an ivory white, supple and slightly grainy interior that has a creamy and buttery mouth feel. Flavours are herbaceous, nutty and fruity if the produce is from winter while the summer cheeses tend to reveal aromas of grass and flowers. Matured for at least 6 months, Ossau-Iraty often comes in a flat cylindrical shape. There are three main sizes available, small (Petit-Ossau-Iraty-Brebis Pyrenes), intermediate (non-fermier) and large (fermier). It is sometimes dusted with paprika leaves to add a kick of flavour. It tastes delicious with fruity red, full-bodied red or white wines such as Zinfandel, Tempranillo or Syrah. (https://www.cheese.com/ossau-fermier)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Pelardon",
        milk_type: ["goat"],
        location_id: 3,
        image:
          "https://sud-de-france.com/wp-content/uploads/2019/06/Images-SDF-1190x508-Pelardon-2.jpg",
        description:
          "Pelardon is a traditional, fresh table cheese made from the unpasteurised milk of goats. Since August 2000, the cheese has benefited from Appellation d'origine contrôlée (AOC) status. The cheese is produced in the Cevennes region, near the Alpes in the Languedoc. The thin, wrinkled, natural rind of the cheese has white and pale blue moulds. The flavour of Pelardon suggests sour cream with walnut oil, balanced by a gentle, salty finish. When young, the cheese is softer and more mousse-like than most goat's milk cheeses. When aged, it gives a goaty aroma and intense Brazil-nut sweetness. (https://www.cheese.com/pelardon-des-cevennes)",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("cheeses", null, {});
  },
};
