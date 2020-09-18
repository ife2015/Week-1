// let emptyObject = {}

// for (let obj of companySalesData) {
//   obj["totalSales"] = obj["sales"].reduce((prev,currVal) => prev+currVal);
  
//   for(let provTax in salesTaxRates) {
//     if(obj.province === provTax ) {
//       obj["totalTaxes"] = salesTaxRates[provTax] * obj["totalSales"];
//     }
//   }
//   delete obj["sales"];
//   delete obj["province"];
// }

// for(let i=0; i < companySalesData.length; i++) {
//   for(let j=0; j < companySalesData.length; j++) {
//     if((companySalesData[i].name === companySalesData[j].name) && (companySalesData[i].totalSales !== companySalesData[j].totalSales) ) {
//       companySalesData[i].totalSales += companySalesData[j].totalSales;
//       companySalesData[i].totalTaxes += companySalesData[j].totalTaxes;
//       companySalesData.splice(j, j+1); 
//     }
//   }  
// }; 


//console.log(companySalesData[0]);

const calculateSalesTax = function (salesData, taxRates) {

  let emptyObject = {}; 

  for (let obj of salesData) {
    obj["totalSales"] = obj["sales"].reduce((prev, currVal) => prev + currVal);

    for (let provTax in taxRates) {
      if (obj.province === provTax) {
        obj["totalTaxes"] = taxRates[provTax] * obj["totalSales"];
      }
    }
    delete obj["sales"];
    delete obj["province"];
  }

  for(let i=0; i < salesData.length; i++) {
    for(let j=0; j < salesData.length; j++) {
      if((salesData[i].name === salesData[j].name) && (salesData[i].totalSales !== salesData[j].totalSales) ) {
        salesData[i].totalSales += salesData[j].totalSales;
        salesData[i].totalTaxes += salesData[j].totalTaxes;
        salesData.splice(j, j+1); 
      }
    }  
  }; 
  
  for(let i=0; i < salesData.length; i++) {
    emptyObject[salesData[i].name] = {totalSales: salesData[i].totalSales, totalTaxes: salesData[i].totalTaxes} 
  }

  return emptyObject;
}

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

console.log(calculateSalesTax(companySalesData, salesTaxRates));