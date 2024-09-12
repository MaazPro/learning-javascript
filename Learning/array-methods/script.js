const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
companies.forEach(company=>{
    console.log(company.name);   
})
// filter
const adults = ages.filter(age=>(age >= 21))
// console.log(adults);
const retailers = companies.filter(company => company.category == "Retail")
// console.log(retailers);
const eightys = companies.filter(company=>(company.start > 1979 && company.start < 1990))
// console.log(eightys);
const tenYears = companies.filter((company)=>(company.end - company.start >= 10));
// console.log(tenYears);

// map
const companyNames = companies.map(company=> company.name)
const year = companies.map((company)=>`${company.name} [${company.start} - ${company.end}]`)
const ageMap = ages.map(age => Math.sqrt(age)).map(age => (age * 2))
// console.log(ageMap);

// sort
  const sortedCompanies = companies.sort((a,b)=>(a.start > b.start ? 1 : -1))
  // console.log(sortedCompanies);
  const sortedAges = ages.sort((a,b) => (a - b));
  // console.log(sortedAges);
  
  // reduce
const ageSum = ages.reduce((total, age)=>{
  return total + age;
},0)
// console.log(ageSum);
const totalYears = companies.reduce((total, company)=>{
  return total + (company.end - company.start)
},0)
// console.log(totalYears);

// Combine Methods
const combined = ages
.map(age => age * 2)
.filter( age => age >= 40)
.sort((a, b)=> a - b)
.reduce((a, b)=> a + b)
// console.log(combined);
