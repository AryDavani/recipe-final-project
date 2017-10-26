function cleanData(num, place){
  return parseInt(num.toFixed(place));
}

function NutritionInfo(data) {
  console.log('NutritionInfo Model data', data);
  if (data) {
    return {
      caloriesFromFat: cleanData((data.totalFat * 9), 0) || 0,
      calories: cleanData(data.calories, 0) || 0,
      totalFat: cleanData(data.totalFat, 1) || 0,
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
    }
  } else {
    return {};
  }
}

export default NutritionInfo;
