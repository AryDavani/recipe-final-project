function cleanData(num, place, servings) {
  servings = servings || 1;
  if (!num) {
    return 0;
  }
  return parseFloat(parseFloat(num.toFixed(place)) / servings).toFixed(place);
}

function NutritionInfo(data, servings) {
  data = data || {};
  return {
    caloriesFromFat: cleanData(data.totalFat * 9, 0, servings),
    calories: cleanData(data.calories, 0, servings),
    totalFat: cleanData(data.totalFat, 1, servings),
    saturatedFat: cleanData(data.saturatedFat, 1, servings),
    transFat: cleanData(data.transFat, 1, servings),
    polyunsaturatedFat: cleanData(data.polyunsaturatedFat, 1, servings),
    monounsaturatedFat: cleanData(data.monounsaturatedFat, 1, servings) || 0,
    cholesterol: cleanData(data.cholesterol, 1, servings) || 0,
    sodium: cleanData(data.sodium, 0, servings) || 0,
    potassium: cleanData(data.potassium, 0, servings) || 0,
    totalCarbs: cleanData(data.totalCarbs, 0, servings) || 0,
    fiber: cleanData(data.fiber, 1, servings) || 0,
    sugars: cleanData(data.sugars, 1, servings) || 0,
    protein: cleanData(data.protein, 1, servings) || 0,
    vitaminA: cleanData(data.vitaminA / 5000 * 100, 1, servings) || 0,
    vitaminC: cleanData(data.vitaminC / 60 * 100, 1, servings) || 0,
    calcium: cleanData(data.calcium / 10, 1, servings) || 0,
    iron: cleanData(data.iron / 18 * 100, 1, servings) || 0
  };
}

export default NutritionInfo;
