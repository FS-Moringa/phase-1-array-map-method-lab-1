const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven                          Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference      between == and ===?',
  'what is the  difference between event capturing and bubbling?',
  'what is JSONP?'
];
console.log('what is the  difference between event capturing and bubbling?'.match(/\s/g))
const titleCased = () => {
  // tutorial->  'what does the this keyword mean' split(' ')-> [what,does,the,this,keyword,mean?] ->map(word)-> [What,Does,]
  // regex -> 
  return tutorials.map(tutorial=>tutorial.split(/\s{1,}/g).map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' '))
}
