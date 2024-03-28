// Define a function called introduction that takes a parameter name and returns a greeting
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// Define a function called introductionWithLanguage that takes two parameters: name and language, and returns a customized greeting
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Define a function called introductionWithLanguageOptional with two parameters: name and language, where language has a default value of "JavaScript"
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

module.exports = {
  introduction,
  introductionWithLanguage,
  introductionWithLanguageOptional,
};
