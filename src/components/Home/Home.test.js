import ReactTestUtils from 'react-dom/test-utils'; // ES6
import { should } from 'chai-react-element';
// on importe la fonction qu'on veut tester
import { handleQuery, usePopularMovies } from './Home.js';

// avec should il faut instancier la fonction avant de l'utiliser
should();

// Mocha = test runner
//  utilise 2 fonctions pour les tests
// - describe : permet de décrire un chapitre / sommaire
// - it : permet de décrire un test
// la fonction .only() permet d'afficher uniquement la batterie de test souhaitée
// attention à bien les retirer une fois le test terminé
// describe.only('desc', () => {})
describe('Home Tests', () => {
  describe('Home', () => {
    describe('Return value', () => {
      it('should be a function', () => {
        // ici on va faire nos assertions
        handleQuery.should.be.a('function');
      });

      it('should return an array', () => {
        usePopularMovies().should.be.an('array');

        // // quand on teste un tableau/objet avec equal,
        // // on teste la référence de ce tableau/objet
        // // recipesReducer().should.be.equal([]);

        // recipesReducer().should.be.deep.equal([]);
        // recipesReducer().should.be.eql([]);

        // recipesReducer().should.be.equal(initialState);
      });
    });

    // describe('with actions', () => {
    //   describe(SAVE_RECIPES, () => {
    //     it('should receive a new state for recipes', () => {
    //       // pour pouvoir tester le fait que le reducer nous renvoie bien
    //       // un nouveau state avec les valeurs stocké dans l'action
    //       // il faut se fabriquer un jue de données
    //       const fakeRecipes = [{ a: 1 }, { b: 2 }];
    //       // on construit l'action avec ces fausses données
    //       const action = saveRecipes(fakeRecipes);
    //       recipesReducer(initialState, action).should.be.eql(fakeRecipes);
    //     });
    //   });
    // });
  });
});