function cleanData(num, place){
  if (!num) {
    return 0;
  }
  return parseFloat(num.toFixed(place));
}

function NutritionInfo(data) {
  data = data || {};
  return {
    caloriesFromFat: cleanData((data.totalFat * 9), 0),
    calories: cleanData(data.calories, 0),
    totalFat: cleanData(data.totalFat, 1),
    saturatedFat: cleanData(data.saturatedFat, 1),
    transFat: cleanData(data.transFat, 1),
    polyunsaturatedFat: cleanData(data.polyunsaturatedFat, 1),
    monounsaturatedFat: cleanData(data.monounsaturatedFat, 1) || 0,
    cholesterol: cleanData(data.cholesterol, 1) || 0,
    sodium: cleanData(data.sodium, 0) || 0,
    potassium: cleanData(data.potassium, 0) || 0,
    totalCarbs: cleanData(data.totalCarbs, 0) || 0,
    fiber: cleanData(data.fiber, 1) || 0,
    sugars: cleanData(data.sugars, 1) || 0,
    protein: cleanData(data.protein, 1) || 0,
    vitaminA: cleanData((data.vitaminA / 5000 * 100), 1) || 0,
    vitaminC: cleanData((data.vitaminC / 60 * 100), 1) || 0,
    calcium: cleanData((data.calcium / 10), 1) || 0,
    iron: cleanData((data.iron / 18 * 100), 1) || 0
  }
}

export default NutritionInfo;
