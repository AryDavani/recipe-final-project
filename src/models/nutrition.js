function cleanData(num, place){
  console.log('number', num, 'place', place);
  return parseFloat(num.toFixed(place));
}

function NutritionInfo(data) {
  console.log('data before modification', data);
  if (data) {
    return {
      caloriesFromFat: cleanData((data.totalFat * 9), 0) || 0,
      calories: cleanData(data.calories, 0) || 0,
      totalFat: cleanData(data.totalFat, 1) || 0,
      saturatedFat: cleanData(data.saturatedFat, 1) || 0,
      transFat: cleanData(data.transFat, 1) || 0,
      polyunsaturatedFat: cleanData(data.polyunsaturatedFat, 1) || 0,
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
  } else {
    return {
      // caloriesFromFat: data.totalFat * 9), 0) || 0,
      calories: data.calories || 0,
      totalFat: data.totalFat || 0,
      saturatedFat: data.saturatedFat || 0,
      transFat: data.transFat || 0,
      polyunsaturatedFat: data.polyunsaturatedFat || 0,
      monounsaturatedFat: data.monounsaturatedFat || 0,
      cholesterol: data.cholesterol || 0,
      sodium: data.sodium || 0,
      potassium: data.potassium || 0,
      totalCarbs: data.totalCarbs || 0,
      fiber: data.fiber || 0,
      sugars: data.sugars || 0,
      protein: data.protein || 0,
      vitaminA: data.vitaminA || 0,
      vitaminC: data.vitaminC || 0,
      calcium: data.calcium || 0,
      iron: data.iron || 0
    };
  }
}

export default NutritionInfo;
