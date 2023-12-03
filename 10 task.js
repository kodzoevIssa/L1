function convertStringToJson(string) {
  try {
    const json = JSON.parse(string);
    return json;
  } catch (error) {
    console.error("Error converting string to JSON:", error);
    return null;
  }
}
const jsonString = '{"name": "John", "age": 30}';
const json = convertStringToJson(jsonString);

if (json) {
  console.log("Parsed JSON:", json);
}
