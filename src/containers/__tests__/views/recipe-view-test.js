/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import RecipeView from '@containers/recipes/RecipeView';

it('RecipeView renders correctly', () => {
  const thisRecipe = {
    title: 'A Recipe',
    content: 'Lorem ipsum',
    featured_image: 'http://placehold.it/300x100',
    acf: {
      ingredients: [
        { ingredient: 'Eggs' },
        { ingredient: 'Milk' },
      ],
    },
  };

  const tree = renderer.create(
    <RecipeView recipe={thisRecipe} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
